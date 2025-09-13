import { type FC } from 'react'

import { Filter } from './Filter'
import styles from './Filters.module.css'
import { Search } from './Search'

export const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <Search className={styles.search} />
      <Filter />
    </div>
  )
}
