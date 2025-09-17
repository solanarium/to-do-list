import fetchMock from '@fetch-mock/jest'

import { updateTask } from '../../../api/updateTask'
import type { Task } from '../../../types'

const mockTask: Task = {
  id: 0,
  completed: false,
  todo: 'qwerty',
  userId: 157,
}

describe('Unit | Api | updateTask', () => {
  test('it returns updated Task', async () => {
    fetchMock.mockGlobal().route(`https://dummyjson.com/todos/0`, mockTask)

    const data = await updateTask({
      taskId: 0,
      completed: false,
      todo: 'qwerty',
    })

    expect(fetchMock).toHavePut(`https://dummyjson.com/todos/0`, {
      headers: { 'Content-Type': 'application/json' },
      body: {
        completed: false,
        todo: 'qwerty',
      },
    })
    expect(data).toEqual(mockTask)
  })
})
