import type { ComponentProps, FC } from 'react'

import { classNames } from '../helpers/classNames'
import { Icon } from './Icon'
import style from './Loader.module.css'

export const Loader: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className={classNames(style.loader_container, className)} {...rest}>
      <Icon className={style.loader} name="loader" />
    </div>
  )
}
