import type { ComponentProps, FC } from 'react'

import { Icon } from '../Icon'

export const Cancel: FC<ComponentProps<'button'>> = (props) => {
  return (
    <button {...props}>
      <Icon name="cancel" />
    </button>
  )
}
