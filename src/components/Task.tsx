import type { FC } from 'react'

import { classNames } from './helpers/classNames'
import { useToggle } from './helpers/toggle'
import { Icon } from './Icon'
import styles from './Task.module.css'
import { Checkbox } from './uikit/Checkbox'

export const Task: FC = () => {
  const [isChecked, toggle] = useToggle(false)

  return (
    <button onClick={toggle} className={styles.cart_container}>
      <div className={styles.notes}>
        <Checkbox isChecked={isChecked} />
        <h3 className={classNames(isChecked && styles.checked)}>NOTE #1</h3>
      </div>
      {!isChecked && (
        <div className={styles.icons}>
          <Icon name="frame" />
          <Icon name="trash" />
        </div>
      )}
    </button>
  )
}
