import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getTasks } from '../../api/getTasks'
import { updateTask, type UpdateTaskVariables } from '../../api/updateTask'
import type { Task } from '../../helpers/consts'

export const getTasksThunk = createAsyncThunk('toDos/getTasks', () => {
  return getTasks()
})

export const updateTaskThunk = createAsyncThunk(
  'task/updateTask',
  (params: UpdateTaskVariables) => {
    return updateTask(params)
  },
)

export interface GetToDosResponse {
  limit: number;
  skip: number;
  todos: Task[];
  total: number;
}

interface TasksState {
  isLoading: boolean;
  list: GetToDosResponse;
  // error: null | string;
}

const initialState: TasksState = {
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
        const updatedToDo = state.list.todos.find((todo) => {
          return todo.id === action.payload.id
        })

        if (updatedToDo) {
          updatedToDo.completed = action.payload.completed
        }
      })
    // .addCase(updateTaskThunk.pending, (state) => {
    //   state.isLoading = true
    // })
    // .addCase(updateTaskThunk.rejected, (state) => {
    //   state.isLoading = false
    // })
  },
})

export default tasksSlice.reducer
