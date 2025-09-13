import { type FC } from 'react'

import { useToggle } from '../../helpers/toggle'
import { updateTaskThunk } from '../../redux/slices/toDoSlice'
import { useDispatch } from '../../redux/store'
import type { Task as TaskType } from '../../types'
import { Cancel } from './Cancel'
import { Check } from './Check'
import { EditTask } from './EditTask'
import { Pencil } from './Pencil'
import styles from './Task.module.css'
import { TaskCheckbox } from './TaskCheckbox'
import { Trash } from './Trash'

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
        {!task.completed && (
          <>
            {isEdit ? (
              <>
                <Check
                  onClick={() => dispatch(updateTaskThunk({ taskId: task.id }))}
                  className={styles.icon}
                />
                <Cancel onClick={toggle} className={styles.icon} />
              </>
            ) : (
              <>
                <Pencil className={styles.icon} onClick={toggle} />
                <Trash task={task} className={styles.icon} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
