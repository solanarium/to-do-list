import type { FC } from 'react'

import { classNames } from '../helpers/classNames'
import type { Task as TaskType } from '../helpers/consts'
import { updateTaskThunk } from '../redux/slices/toDoSlice'
import { useDispatch } from '../redux/store'
import { Icon } from './Icon'
import styles from './Task.module.css'
import { Checkbox } from './uikit/Checkbox'

interface Props {
  task: TaskType;
}

export const Task: FC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  // const todo = useSelector((state) => state.tasks.list.todos)

  return (
    <button
      onClick={() => {
        dispatch(
          updateTaskThunk({ taskId: task.id, isCompleted: !task.completed }),
        )
      }}
      className={classNames(
        styles.cart_container,
        task.completed && styles.checked,
      )}
    >
      <div className={styles.notes}>
        <Checkbox isChecked={task.completed} />
        <h3 className={styles.title}>{task.todo}</h3>
      </div>
      <div className={styles.icons}>
        <Icon name="frame" />
        <Icon name="trash" />
      </div>
    </button>
  )
}
