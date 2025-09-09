import { Check } from 'lucide-react'
import { type FC } from 'react'

import { classNames } from '../helpers/classNames'
import { useToggle } from '../helpers/toggle'
import styles from './Checkbox.module.css'

export const Checkbox: FC = () => {
  const [isChecked, toggle] = useToggle(false)

  return (
    <button
      onClick={toggle}
      className={classNames(styles.checkbox, isChecked && styles.checked)}
    >
      {isChecked && <Check className={styles.icon} />}
    </button>
  )
}
