import { Search as SearchIcon } from 'lucide-react'
import { type ComponentProps, type FC, useState } from 'react'

import { classNames } from './helpers/classNames'
import styles from './Search.module.css'

export const Search: FC<ComponentProps<'input'>> = ({ className }) => {
  const [value, setValue] = useState('')

  return (
    <div className={classNames(styles.container, className)}>
      <input
        name="uikit"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search note..."
        className={styles.input}
      />
      <SearchIcon
        className={styles.searchIcon}
        strokeWidth={1.5}
        color="#6C63FF"
      />
    </div>
  )
}
