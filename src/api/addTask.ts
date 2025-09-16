import type { Task } from '../types'

export const addTask = (task: string): Promise<Task> => {
  return fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: task,
      completed: false,
    }),
  }).then((res) => res.json())
}
