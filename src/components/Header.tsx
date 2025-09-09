import type { FC } from 'react'

import { Filters } from './Filters'
import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p>TODO LIST</p>
      </div>
      <Filters />
    </div>
  )
}
