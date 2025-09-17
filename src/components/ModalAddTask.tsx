import { type FC, useState } from 'react'

import { addTaskThunk } from '../redux/slices/thunks'
import { toggleIsAddTaskModalOpen } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import { Loader } from './Loader'
import styles from './ModalAddTask.module.css'
import { Button } from './uikit/Button'
import { Input } from './uikit/Input'
import { Modal } from './uikit/Modal'

export const ModalAddTask: FC = () => {
  const isLoading = useSelector((state) => state.tasks.newTaskLoading)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  return (
    <Modal title="NEW NOTE">
      <Input
        name="newNote"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Input your note..."
        className={styles.new_note}
      />
      <div className={styles.buttons}>
        <Button
          onClick={() => dispatch(toggleIsAddTaskModalOpen())}
          size="large"
          variant="secondary"
        >
          CANCEL
        </Button>
        <Button
          disabled={isLoading || !value}
          size="large"
          variant="primary"
          onClick={() => {
            dispatch(addTaskThunk(value))
          }}
          className={styles.button_apply}
        >
          {isLoading && <Loader className={styles.loader_apply} />}
          APPLY
        </Button>
      </div>
    </Modal>
  )
}
