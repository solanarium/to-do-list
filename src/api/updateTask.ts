import type { Task } from '../types'

export interface UpdateTaskVariables {
  taskId: number;
  Completed?: boolean;
  todo?: string;
}

export const updateTask = ({
  taskId,
  Completed,
  todo,
}: UpdateTaskVariables): Promise<Task> => {
  return fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: Completed,
      todo: todo,
    }),
  }).then((res) => res.json())
}
