import type { FC } from 'react'

import { toggleIsAddTaskModalOpen } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import { ModalAddTask } from './ModalAddTask'
import { AddButton } from './uikit/AddButton'

export const NewTask: FC = () => {
  const dispatch = useDispatch()
  const isAddTaskModalOpen = useSelector(
    (state) => state.tasks.isAddTaskModalOpen,
  )

  return (
    <>
      <AddButton onClick={() => dispatch(toggleIsAddTaskModalOpen())} />
      {isAddTaskModalOpen && <ModalAddTask />}
    </>
  )
}
