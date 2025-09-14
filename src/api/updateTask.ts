import type { Task } from '../types'

export interface UpdateTaskVariables {
  taskId: number;
  completed: boolean;
  todo: string;
}

export const updateTask = ({
  taskId,
  completed,
  todo,
}: UpdateTaskVariables): Promise<Task> => {
  return fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed,
      todo,
    }),
  }).then((res) => res.json())
}
