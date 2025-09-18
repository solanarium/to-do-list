import { type FC, type RefObject, useEffect, useState } from 'react'

import { classNames } from '../../helpers/classNames'
import type { Task } from '../../types'
import styles from './EditTask.module.css'

interface Props {
  task: Task
  isLoading: boolean
  inputRef: RefObject<null | HTMLInputElement>
}

export const EditTask: FC<Props> = ({ task, isLoading, inputRef }) => {
  const [value, setValue] = useState(task.todo)

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  return (
    <div className={classNames(styles.container)}>
      <input
        ref={inputRef}
        name="Edit Task"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        className={classNames(styles.input, isLoading && styles.loading)}
      />
    </div>
  )
}
