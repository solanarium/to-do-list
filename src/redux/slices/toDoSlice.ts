import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { addTask } from '../../api/addTask'
import { deleteTask } from '../../api/deleteTask'
import { getTasks, type GetTasksResponse } from '../../api/getTasks'
import { updateTask } from '../../api/updateTask'

export const getTasksThunk = createAsyncThunk('tasks/getTasks', getTasks)

export const updateTaskThunk = createAsyncThunk('tasks/updateTask', updateTask)

export const deleteTaskThunk = createAsyncThunk('tasks/deleteTask', deleteTask)

export const addTaskThunk = createAsyncThunk('taks/addTask', addTask)

interface TasksState {
  isAddTaskModalOpen: boolean;
  todoLoadingIds: number[];
  newTaskLoading: boolean;
  isLoading: boolean;
  list: GetTasksResponse;
  // error: null | string;
}

const initialState: TasksState = {
  isAddTaskModalOpen: false,
  todoLoadingIds: [],
  newTaskLoading: false,
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
  reducers: {
    toggleIsAddTaskModalOpen: (state) => {
      state.isAddTaskModalOpen = !state.isAddTaskModalOpen
    },
  },
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
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.list.todos.push(action.payload)
        state.newTaskLoading = false
        state.isAddTaskModalOpen = false
      })
      .addCase(addTaskThunk.pending, (state) => {
        state.newTaskLoading = true
      })
      .addCase(addTaskThunk.rejected, (state) => {
        state.newTaskLoading = false
      })
  },
})

export const { toggleIsAddTaskModalOpen } = tasksSlice.actions

export default tasksSlice.reducer
