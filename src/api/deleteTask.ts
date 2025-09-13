import type { Task } from '../types'

type DeletedTask = {
  isDeleted: boolean,
  deletedOn: string,
} & Task

export const deleteTask = (taskId: number): Promise<DeletedTask> => {
  const promise = fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'DELETE',
  }).then((res) => res.json())

  return promise
}
