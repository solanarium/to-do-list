import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { Task } from '../../components/helpers/consts'
import { getTasks } from '../../components/helpers/getTasks'

export const getTasksThunk = createAsyncThunk('toDos/getTasks', () => {
  return getTasks()
})

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
  },
})

export default tasksSlice.reducer
