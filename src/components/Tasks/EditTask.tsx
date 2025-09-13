import { type FC } from 'react'

import { classNames } from '../../helpers/classNames'
import type { Task } from '../../types'
import styles from './EditTask.module.css'

interface Props {
  task: Task;
}

export const EditTask: FC<Props> = ({ task }) => {
  return (
    <div className={styles.container}>
      <input
        name="Edit Task"
        type="text"
        value={task.todo}
        onChange={(event) => event.target.value}
        className={classNames(styles.input)}
      />
    </div>
  )
}
