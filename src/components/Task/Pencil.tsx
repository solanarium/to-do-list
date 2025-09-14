import type { ComponentProps, FC } from 'react'

import { Icon } from '../Icon'

export const Pencil: FC<ComponentProps<'button'>> = (props) => {
  return (
    <button {...props}>
      <Icon name="pencil" />
    </button>
  )
}
