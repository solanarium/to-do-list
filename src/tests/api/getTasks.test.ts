import fetchMock, { manageFetchMockGlobally } from '@fetch-mock/jest'
import { jest } from '@jest/globals'

import { getTasks } from '../../api/getTasks'
import type { Task } from '../../types'

manageFetchMockGlobally(jest)

const mockTasks: Task[] = [
  {
    id: 0,
    completed: false,
    todo: 'asfasf',
    userId: 157,
  },
]

describe('Unit | Api | getTasks', () => {
  beforeEach(() => {
    fetchMock.mockGlobal().route('https://dummyjson.com/todos', mockTasks)
  })
  test('it returns a promise', async () => {
    const data = await getTasks()

    expect(fetchMock).toHaveGot('https://dummyjson.com/todos')
    expect(data).toEqual(mockTasks)
  })
})
