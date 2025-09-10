import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { Task } from '../../components/helpers/consts'
import { getTasks } from '../../components/helpers/getTasks'

export const getTasksThunk = createAsyncThunk('toDos/getTasks', () => {
  return getTasks()
})

interface BackendResponse {
  limit: number;
  skip: number;
  todo: Task[];
  total: number;
}

interface State {
  isLoading: boolean;
  response: BackendResponse;
}

const initialState: State = {
  isLoading: true,
  response: {
    limit: 0,
    skip: 0,
    todo: [],
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
        state.response = action.payload
        state.isLoading = false
      })
      .addCase(getTasksThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTasksThunk.rejected, (state) => {
        state.response.todo = []
        state.isLoading = false
      })
  },
})

export default tasksSlice.reducer
