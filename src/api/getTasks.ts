import type { Task } from '../types'

export interface GetToDosResponse {
  limit: number;
  skip: number;
  todos: Task[];
  total: number;
}

export const getTasks = (): Promise<GetToDosResponse> => {
  const response = fetch('https://dummyjson.com/todos').then((res) =>
    res.json(),
  )

  return response
}
