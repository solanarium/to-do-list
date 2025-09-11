import type { GetToDosResponse } from '../redux/slices/toDoSlice'

export const getTasks = (): Promise<GetToDosResponse> => {
  const response = fetch('https://dummyjson.com/todos').then((res) =>
    res.json(),
  )

  return response
}
