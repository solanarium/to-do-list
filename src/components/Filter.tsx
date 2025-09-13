import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { classNames } from '../helpers/classNames'
import styles from './Filter.module.css'
import { Button } from './uikit/Button'

export const Filter = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        size="medium"
        variant="primary"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={classNames(styles.button_filter, open && styles.open)}
      >
        <p>ALL</p>
        <ChevronDown
          className={classNames(styles.icon, open && styles.open)}
          size={16}
        />
      </Button>
    </div>
  )
}
