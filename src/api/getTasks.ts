import type { Task } from '../types'

export interface GetTasksDosResponse {
  limit: number;
  skip: number;
  todos: Task[];
  total: number;
}

export const getTasks = (): Promise<GetTasksDosResponse> => {
  const response = fetch('https://dummyjson.com/todos').then((res) =>
    res.json(),
  )

  return response
}
