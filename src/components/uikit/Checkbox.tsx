import { type FC } from 'react'

import { classNames } from '../../helpers/classNames'
import { Icon } from '../Icon'
import styles from './Checkbox.module.css'

interface Props {
  isChecked: boolean;
}

export const Checkbox: FC<Props> = ({ isChecked }) => {
  return (
    <div className={classNames(styles.checkbox, isChecked && styles.checked)}>
      {isChecked && <Icon name="check" className={styles.icon} />}
    </div>
  )
}
