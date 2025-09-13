import type { Task } from '../types'

export interface UpdateTaskVariables {
  taskId: number;
  isCompleted: boolean;
}

export const updateTask = ({
  taskId,
  isCompleted,
}: UpdateTaskVariables): Promise<Task> => {
  const promise = fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: isCompleted,
    }),
  }).then((res) => res.json())

  return promise
}
