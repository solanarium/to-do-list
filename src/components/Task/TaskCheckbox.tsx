import type { FC } from 'react'

import { classNames } from '../../helpers/classNames'
import { updateTaskThunk } from '../../redux/slices/thunks'
import { useDispatch, useSelector } from '../../redux/store'
import type { Task } from '../../types'
import { Loader } from '../Loader'
import { Checkbox } from '../uikit/Checkbox'
import styles from './TaskCheckbox.module.css'

interface Props {
  task: Task
}

export const TaskCheckbox: FC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) =>
    state.tasks.todoLoadingIds.includes(task.id),
  )

  return (
    <button
      data-testid="button-task"
      disabled={isLoading}
      onClick={() => {
        dispatch(
          updateTaskThunk({
            taskId: task.id,
            completed: !task.completed,
            todo: task.todo,
          }),
        )
      }}
      className={classNames(
        isLoading && styles.loading,
        styles.cart_container,
        task.completed && styles.checked,
      )}
    >
      <div className={styles.notes}>
        {isLoading ? (
          <Loader data-testid="checkbox-loader" />
        ) : (
          <Checkbox isChecked={task.completed} />
        )}
        <p className={styles.title}>{task.todo}</p>
      </div>
    </button>
  )
}
