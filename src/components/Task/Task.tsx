import {
  type Dispatch,
  type FC,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react'

import { updateTaskThunk } from '../../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../../redux/store'
import type { Task as TaskType } from '../../types'
import { Loader } from '../Loader'
import { Cancel } from './Cancel'
import { Check } from './Check'
import { EditTask } from './EditTask'
import { Pencil } from './Pencil'
import styles from './Task.module.css'
import { TaskCheckbox } from './TaskCheckbox'
import { Trash } from './Trash'

interface Props {
  task: TaskType;
  editId: number | null;
  setEditId: Dispatch<SetStateAction<number | null>>;
}

export const Task: FC<Props> = ({ task, editId, setEditId }) => {
  const editInputRef = useRef(null as HTMLInputElement | null)
  const isEdit = editId === task.id
  const dispatch = useDispatch()
  const isLoading = useSelector((state) =>
    state.tasks.todoLoadingIds.includes(task.id),
  )

  const submit = useCallback(() => {
    dispatch(
      updateTaskThunk({
        taskId: task.id,
        taskValue: editInputRef.current?.value,
      }),
    ).then(() => setEditId(null))
  }, [dispatch, task.id, setEditId])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (isEdit) {
        if (event.key === 'Enter') {
          if (editInputRef.current?.value !== task.todo) {
            submit()
          } else {
            setEditId(null)
          }
        }
      }
    }

    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [submit, setEditId, task.todo, isEdit])

  return (
    <div className={styles.task_container}>
      {editId === task.id ? (
        <EditTask inputRef={editInputRef} isLoading={isLoading} task={task} />
      ) : (
        <TaskCheckbox task={task} />
      )}
      <div className={styles.icons}>
        {!task.completed && (
          <>
            {editId === task.id ? (
              <>
                {isLoading ? (
                  <Loader className={styles.edit_loader} />
                ) : (
                  <Check
                    onClick={() => {
                      if (editInputRef.current?.value !== task.todo) {
                        submit()
                      } else {
                        setEditId(null)
                      }
                    }}
                    className={styles.icon}
                  />
                )}

                <Cancel onClick={() => setEditId} className={styles.icon} />
              </>
            ) : (
              <>
                <Pencil
                  className={styles.icon}
                  onClick={() => {
                    setEditId(task.id)
                  }}
                />
                <Trash task={task} className={styles.icon} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
