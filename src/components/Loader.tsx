import type { FC } from 'react'

import { classNames } from '../helpers/classNames'
import { Icon } from './Icon'
import style from './Loader.module.css'

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={style.loader_container}>
      <Icon className={classNames(style.loader, className)} name="loader" />
    </div>
  )
}
