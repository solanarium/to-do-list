import { type FC, useEffect } from 'react'

import { getTasksThunk } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import styles from './List.module.css'
import { Task } from './Task'

export const List: FC = () => {
  const response = useSelector((state) => state.tasks.response)
  const dispatch = useDispatch()

  console.log(response)

  useEffect(() => {
    dispatch(getTasksThunk())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Task />
    </div>
  )
}
