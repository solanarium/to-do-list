import { type FC, useState } from 'react'

import { useSelector } from '../redux/store'
import styles from './List.module.css'
import { Task } from './Task/Task'

export const List: FC = () => {
  const todos = useSelector((state) => state.tasks.list.todos)
  const [editId, setEditId] = useState<null | number>(null)

  return (
    <div className={styles.container}>
      {todos.map((todo) => {
        return (
          <Task
            setEditId={setEditId}
            isEditMode={editId === todo.id}
            key={todo.id}
            task={todo}
          />
        )
      })}
    </div>
  )
}
