import type { ComponentProps, FC } from 'react'

import { classNames } from '../../helpers/classNames'
import styles from './Button.module.css'

type Props = {
  size: 'medium' | 'large'
  variant: 'primary' | 'secondary'
} & ComponentProps<'button'>

export const Button: FC<Props> = ({
  className,
  size,
  variant,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        styles.button,
        className,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
      )}
      {...rest}
    />
  )
}
