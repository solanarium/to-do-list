import { render } from '@testing-library/react'
import type { ReactNode } from 'react'

import type { RootState } from '../redux/store'
import { getAllProviders } from './getAllProviders'

interface Options {
  initialState?: Partial<RootState>;
}

const customRender = (children: ReactNode, options: Options = {}) =>
  render(children, {
    wrapper: getAllProviders(options.initialState || {}),
  })

export { customRender as render }
