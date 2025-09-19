import type { ComponentProps, FC } from 'react'

import { classNames } from '../../helpers/classNames'
import { Icon } from '../Icon'
import styles from './AddButton.module.css'

export const AddButton: FC<ComponentProps<'button'>> = ({
  className,
  ...rest
}) => {
  return (
    <button className={classNames(styles.add_button, className)} {...rest}>
      <p className="sr_only">Add Task</p>
      <Icon className={styles.icon} name="plus" />
    </button>
  )
}
