import type { ComponentProps, FC } from 'react'

import { classNames } from '../helpers/classNames'
import styles from './Button.module.css'

export const Button: FC<ComponentProps<'button'>> = ({
  className,
  ...rest
}) => {
  return <button className={classNames(styles.button, className)} {...rest} />
}
