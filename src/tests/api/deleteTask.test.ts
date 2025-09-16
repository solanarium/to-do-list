import fetchMock from '@fetch-mock/jest'

import { type DeletedTask, deleteTask } from '../../api/deleteTask'

const date = new Date('2025-09-16T17:32:47.808Z')

const deletedTask: DeletedTask = {
  id: 0,
  completed: false,
  todo: 'qwerty',
  userId: 157,
  isDeleted: false,
  deletedOn: date.toISOString(),
}

describe('Unit | Api | deleteTask', () => {
  test('it returns deleted Task', async () => {
    fetchMock.mockGlobal().route('https://dummyjson.com/todos/0', deletedTask)

    const data = await deleteTask(0)

    expect(fetchMock).toHaveDeleted()
    expect(data).toEqual(deletedTask)
  })
})
