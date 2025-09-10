import type { BackendResponse } from '../../redux/slices/toDoSlice'
import type { Task } from './consts'

export const getTasks = (): Promise<Task[]> => {
  const response = fetch('https://dummyjson.com/todos').then((res) =>
    res.json(),
  )

  return response
}
