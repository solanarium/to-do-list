import { type FC, useState } from 'react'

import { classNames } from '../../helpers/classNames'
import type { Task } from '../../types'
import styles from './EditTask.module.css'

interface Props {
  task: Task;
}

export const EditTask: FC<Props> = ({ task }) => {
  const [value, setState] = useState(task.todo)

  return (
    <div className={styles.container}>
      <input
        name="Edit Task"
        type="text"
        value={value}
        onChange={(event) => setState(event.target.value)}
        className={classNames(styles.input)}
      />
    </div>
  )
}
