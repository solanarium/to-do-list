import type { Task } from '../types'

export interface UpdateTaskVariables {
  taskId: number;
  isCompleted?: boolean;
  taskValue?: string;
}

export const updateTask = ({
  taskId,
  isCompleted,
  taskValue,
}: UpdateTaskVariables): Promise<Task> => {
  const promise = fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: isCompleted,
      todo: taskValue,
    }),
  }).then((res) => res.json())

  return promise
}
