import { ChevronDown } from 'lucide-react'
import { type FC, useState } from 'react'

import styles from './Filters.module.css'
import { classNames } from './helpers/classNames'
import { Search } from './Search'
import { Button } from './uikit/Button'

export const Filters: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <Search className={styles.search} />
      <Button
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
