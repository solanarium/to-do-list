import { configureStore } from '@reduxjs/toolkit'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { rootReducer, type RootState } from '../redux/store'

interface Props {
  children: ReactNode;
}

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export const getAllProviders = (
  initialState: Partial<RootState>,
): FC<Props> => {
  const store = setupStore(initialState)

  return ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
}
