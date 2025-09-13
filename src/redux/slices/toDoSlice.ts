import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { deleteTask } from '../../api/deleteTask'
import { getTasks, type GetTasksDosResponse } from '../../api/getTasks'
import { updateTask, type UpdateTaskVariables } from '../../api/updateTask'

export const getTasksThunk = createAsyncThunk('tasks/getTasks', () => {
  return getTasks()
})

export const updateTaskThunk = createAsyncThunk(
  'tasks/updateTask',
  (params: UpdateTaskVariables) => {
    return updateTask(params)
  },
)

export const deleteTaskThunk = createAsyncThunk(
  'tasks/deleteTask+',
  (taskId: number) => {
    return deleteTask(taskId)
  },
)

interface TasksState {
  todoLoadingIds: number[];
  isLoading: boolean;
  list: GetTasksDosResponse;
  // error: null | string;
}

const initialState: TasksState = {
  todoLoadingIds: [],
  isLoading: true,
  // error: null,
  list: {
    limit: 0,
    skip: 0,
    todos: [],
    total: 0,
  },
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksThunk.fulfilled, (state, action) => {
        state.list = action.payload
        state.isLoading = false
      })
      .addCase(getTasksThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTasksThunk.rejected, (state) => {
        state.list = initialState.list
        state.isLoading = false
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        const updatedTask = state.list.todos.find((todo) => {
          return todo.id === action.payload.id
        })

        if (updatedTask) {
          updatedTask.completed = action.payload.completed
        }
        state.todoLoadingIds = state.todoLoadingIds.filter(
          (id) => id !== action.meta.arg.taskId,
        )
      })
      .addCase(updateTaskThunk.pending, (state, action) => {
        state.todoLoadingIds.push(action.meta.arg.taskId)
      })
      .addCase(updateTaskThunk.rejected, (state, action) => {
        state.todoLoadingIds = state.todoLoadingIds.filter(
          (id) => id !== action.meta.arg.taskId,
        )
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.list.todos = state.list.todos.filter(
          (todo) => todo.id !== action.payload.id,
        )
      })
      .addCase(deleteTaskThunk.pending, (state, action) => {
        state.todoLoadingIds.push(action.meta.arg)
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.todoLoadingIds = state.todoLoadingIds.filter(
          (id) => id !== action.meta.arg,
        )
      })
  },
})

export default tasksSlice.reducer
