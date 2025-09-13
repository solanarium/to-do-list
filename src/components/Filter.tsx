import { useState } from 'react'

import { classNames } from '../helpers/classNames'
import styles from './Filter.module.css'
import { Icon } from './Icon'
import { Button } from './uikit/Button'

export const Filter = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={classNames(styles.button_filter, open && styles.open)}
      >
        <p>ALL</p>
        <Icon
          name="chevron-down"
          className={classNames(styles.icon, open && styles.open)}
        />
      </Button>
    </div>
  )
}
