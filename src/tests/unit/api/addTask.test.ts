import fetchMock, { manageFetchMockGlobally } from '@fetch-mock/jest'
import { jest } from '@jest/globals'

import { addTask } from '../../../api/addTask'
import type { Task } from '../../../types'

manageFetchMockGlobally(jest)

const addedText = 'qwerty'

const mockTask: Task = {
  id: 0,
  completed: false,
  todo: addedText,
  userId: 157,
}

describe('Unit | Api | addTask', () => {
  test('it returns added Task', async () => {
    fetchMock.mockGlobal().route('https://dummyjson.com/todos/add', mockTask)

    const data = await addTask(addedText)

    expect(fetchMock).toHavePosted('https://dummyjson.com/todos/add', {
      headers: { 'Content-Type': 'application/json' },
      body: {
        completed: false,
        todo: addedText,
      },
    })
    expect(data).toEqual(mockTask)
  })
})
