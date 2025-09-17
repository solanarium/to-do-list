import { render } from '@testing-library/react'
import type { ReactNode } from 'react'

import type { RootState } from '../../redux/store'
import { AllTheProviders } from './AllTheProviders'

interface Options {
  initialState?: Partial<RootState>;
}

const customRender = (ui: ReactNode, options: Options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
