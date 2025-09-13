import { type FC } from 'react'

import { useToggle } from '../../helpers/toggle'
import { deleteTaskThunk } from '../../redux/slices/toDoSlice'
import { useDispatch } from '../../redux/store'
import type { Task as TaskType } from '../../types'
import { Icon } from '../Icon'
import { EditTask } from './EditTask'
import styles from './Task.module.css'
import { TaskCheckbox } from './TaskCheckbox'

interface Props {
  task: TaskType;
}

export const Task: FC<Props> = ({ task }) => {
  const [isEdit, toggle] = useToggle(false)
  const dispatch = useDispatch()

  return (
    <div className={styles.task_container}>
      {isEdit ? <EditTask task={task} /> : <TaskCheckbox task={task} />}
      <div className={styles.icons}>
        {task.completed ? (
          <></>
        ) : (
          <>
            <button className={styles.icon}>
              <Icon onClick={toggle} name="pencil" />
            </button>
            <button
              className={styles.icon}
              onClick={() => dispatch(deleteTaskThunk(task.id))}
            >
              <Icon name="trash" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
