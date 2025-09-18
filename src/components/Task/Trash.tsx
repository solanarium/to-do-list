import type { ComponentProps, FC } from 'react'

import { deleteTaskThunk } from '../../redux/slices/thunks'
import { useDispatch } from '../../redux/store'
import type { Task } from '../../types'
import { Icon } from '../Icon'

type Props = {
  task: Task
} & ComponentProps<'button'>

export const Trash: FC<Props> = ({ task, ...rest }) => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => {
        dispatch(deleteTaskThunk(task.id))
      }}
      {...rest}
    >
      <Icon name="trash" />
    </button>
  )
}
