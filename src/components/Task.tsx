import type { FC } from 'react'

import { classNames } from '../helpers/classNames'
import { deleteTaskThunk, updateTaskThunk } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import type { Task as TaskType } from '../types'
import { Icon } from './Icon'
import { Loader } from './Loader'
import styles from './Task.module.css'
import { Checkbox } from './uikit/Checkbox'

interface Props {
  task: TaskType;
}

export const Task: FC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) =>
    state.tasks.todoLoadingIds.includes(task.id),
  )

  return (
    <div className={styles.task_container}>
      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(
            updateTaskThunk({
              taskId: task.id,
              isCompleted: !task.completed,
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
          {isLoading ? <Loader /> : <Checkbox isChecked={task.completed} />}
          <h3 className={styles.title}>{task.todo}</h3>
        </div>
      </button>
      <div className={styles.icons}>
        <button className={styles.icon}>
          <Icon name="frame" />
        </button>
        <button
          className={styles.icon}
          onClick={() => dispatch(deleteTaskThunk(task.id))}
        >
          <Icon name="trash" />
        </button>
      </div>
    </div>
  )
}
