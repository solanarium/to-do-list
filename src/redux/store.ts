import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import tasksReducer from './slices/toDoSlice'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export const useDispatch = () => useReduxDispatch() as AppDispatch

export const useSelector = <T>(selector: (state: RootState) => T) =>
  useReduxSelector(selector)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
