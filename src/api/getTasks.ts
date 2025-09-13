import type { Task } from '../types'

export interface GetTasksResponse {
  limit: number;
  skip: number;
  todos: Task[];
  total: number;
}

export const getTasks = (): Promise<GetTasksResponse> => {
  const response = fetch('https://dummyjson.com/todos').then((res) =>
    res.json(),
  )

  return response
}
