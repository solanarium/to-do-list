import { toggleIsAddTaskModalOpen } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import { ModalAddTask } from './ModalAddTask'
import { AddButton } from './uikit/AddButton'

export const NewTask = () => {
  const dispatch = useDispatch()
  const IsAddTaskModalOpen = useSelector(
    (state) => state.tasks.isAddTaskModalOpen,
  )

  return (
    <>
      <AddButton onClick={() => dispatch(toggleIsAddTaskModalOpen())} />
      {IsAddTaskModalOpen && <ModalAddTask />}
    </>
  )
}
