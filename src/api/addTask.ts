import type { Task } from '../helpers/consts'

export const addTask = (task: string): Promise<Task> => {
  const promise = fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: task,
      completed: false,
      userId: 5,
    }),
  }).then((res) => res.json())

  return promise
}
