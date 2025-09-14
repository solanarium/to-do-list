import type { ComponentProps, FC } from 'react'

import { Icon } from '../Icon'

export const Check: FC<ComponentProps<'button'>> = (props) => {
  return (
    <button {...props}>
      <Icon name="check" />
    </button>
  )
}
