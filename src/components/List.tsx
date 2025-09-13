import { type FC } from 'react'

import { useSelector } from '../redux/store'
import styles from './List.module.css'
import { Task } from './Task/Task'

export const List: FC = () => {
  const todos = useSelector((state) => state.tasks.list.todos)

  return (
    <div className={styles.container}>
      {todos.map((todo) => {
        return <Task key={todo.id} task={todo} />
      })}
    </div>
  )
}
