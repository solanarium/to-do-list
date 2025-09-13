import { type ComponentProps, type FC } from 'react'

import { classNames } from '../../helpers/classNames'
import styles from './Input.module.css'

export const Input: FC<ComponentProps<'input'>> = ({ className, ...rest }) => {
  return <input className={classNames(styles.input, className)} {...rest} />
}
