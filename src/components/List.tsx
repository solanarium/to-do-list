import { type FC, useEffect } from 'react'

import { getTasksThunk } from '../redux/slices/toDoSlice'
import { useDispatch, useSelector } from '../redux/store'
import styles from './List.module.css'
import { Task } from './Task'

export const List: FC = () => {
  // const todos = useSelector((state) => state.tasks.list.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksThunk())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {/* {todos.map()} */}
      <Task />
    </div>
  )
}
