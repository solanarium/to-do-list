import {
  type ComponentProps,
  type Dispatch,
  type FC,
  type SetStateAction,
  useCallback,
  useRef,
} from 'react'

import { useKeyboard } from '../../hooks/useKeyboard'
import { updateTaskThunk } from '../../redux/slices/thunks'
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

type Props = {
  task: TaskType
  isEditMode: boolean
  setEditId: Dispatch<SetStateAction<number | null>>
} & ComponentProps<'div'>

export const Task: FC<Props> = ({ task, isEditMode, setEditId, ...rest }) => {
  const editInputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()
  const isLoading = useSelector((state) =>
    state.tasks.todoLoadingIds.includes(task.id),
  )

  const submit = useCallback(() => {
    if (editInputRef.current?.value !== task.todo) {
      void dispatch(
        updateTaskThunk({
          taskId: task.id,
          todo: editInputRef.current?.value as string,
          completed: task.completed,
        }),
      ).then(() => setEditId(null))
    } else {
      setEditId(null)
    }
  }, [dispatch, task, setEditId])

  useKeyboard(
    'Enter',
    () => {
      if (isEditMode) {
        submit()
      }
    },
    [isEditMode, submit],
  )

  return (
    <div className={styles.task_container} {...rest}>
      {isEditMode ? (
        <EditTask inputRef={editInputRef} isLoading={isLoading} task={task} />
      ) : (
        <TaskCheckbox task={task} />
      )}
      <div className={styles.icons}>
        {!task.completed && (
          <>
            {isEditMode ? (
              <>
                {isLoading ? (
                  <Loader className={styles.edit_loader} />
                ) : (
                  <Check
                    data-testid="check"
                    onClick={submit}
                    className={styles.icon}
                  />
                )}

                <Cancel
                  data-testid="cancel"
                  onClick={() => setEditId(null)}
                  className={styles.icon}
                />
              </>
            ) : (
              <>
                <Pencil
                  data-testid="pencil"
                  className={styles.icon}
                  onClick={() => {
                    setEditId(task.id)
                  }}
                />
                <Trash
                  data-testid="trash"
                  task={task}
                  className={styles.icon}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
