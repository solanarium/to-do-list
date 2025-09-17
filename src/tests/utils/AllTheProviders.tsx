import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../../redux/store'

interface Props {
  children: ReactNode;
}

export const AllTheProviders: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
