import type { FC } from 'react'

import { classNames } from '../helpers/classNames'
import { Icon } from './Icon'
import style from './Loader.module.css'

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(style.loader_container, className)}>
      <Icon className={style.loader} name="loader" />
    </div>
  )
}
