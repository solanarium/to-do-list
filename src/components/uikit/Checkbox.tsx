import { Check } from 'lucide-react'
import { type FC, useState } from 'react'

import { classNames } from '../helpers/classNames'
import styles from './Checkbox.module.css'

export const Checkbox: FC = () => {
  const [isChecked, setISChecked] = useState(false)

  return (
    <button
      onClick={() => setISChecked((prevChecked) => !prevChecked)}
      className={classNames(styles.checkbox, isChecked && styles.checked)}
    >
      {isChecked && <Check className={styles.icon} />}
    </button>
  )
}
