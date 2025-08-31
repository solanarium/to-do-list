import type { FC } from 'react'

import styles from './NoteCard.module.css'
import { Checkbox } from './uikit/Checkbox'

export const NoteCard: FC = () => {
  return (
    <div className={styles.container}>
      <Checkbox />
      <h3>NoteCart#3</h3>
    </div>
  )
}
