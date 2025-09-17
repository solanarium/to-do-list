import '@testing-library/jest-dom'

import { updateTask } from '../../../api/updateTask'
import { List } from '../../../components/List'
import { Task } from '../../../components/Task/Task'
import { TaskPageObject } from '../../../test-support/page-objects/task'
import { render } from '../../../test-support/test-utils'
import type { Task as TaskType } from '../../../types'

const todo: TaskType = {
  id: 127,
  todo: 'Prepare a dish from a foreign culture',
  completed: false,
  userId: 7,
}

jest.mock('../../../api/updateTask')

describe('Integration | Components | Task', () => {
  test('it renders', async () => {
    const taskPageObject = new TaskPageObject(
      render(<Task setEditId={() => {}} isEditMode={false} task={todo} />),
    )

    expect(taskPageObject.checkbox).toBeInTheDocument()
  })

  test('it toggles', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture',
        completed: true,
        userId: 7,
      })
    })

    const taskPageObject = new TaskPageObject(
      render(<List />, {
        initialState: {
          tasks: {
            list: {
              limit: 0,
              skip: 0,
              todos: [
                {
                  id: 127,
                  todo: 'Prepare a dish from a foreign culture',
                  completed: false,
                  userId: 7,
                },
              ],
              total: 100,
            },
            isAddTaskModalOpen: false,
            isLoading: false,
            newTaskLoading: false,
            todoLoadingIds: [],
          },
        },
      }),
    )

    await taskPageObject.toggleTask()
    expect(mockUpdateTask).toHaveBeenCalledWith(
      {
        taskId: todo.id,
        completed: true,
        todo: 'Prepare a dish from a foreign culture',
      },
      expect.any(Object),
    )
    expect(await taskPageObject.checkboxIcon).toBeInTheDocument()
  })

  test('it shows loading when request is going', async () => {
    let resolveUpdateTask: (value: unknown) => void = () => {}
    const updateTaskPromise = new Promise((res) => {
      resolveUpdateTask = res
    })

    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return updateTaskPromise
    })

    const screen = render(<List />, {
      initialState: {
        tasks: {
          list: {
            limit: 0,
            skip: 0,
            todos: [
              {
                id: 127,
                todo: 'Prepare a dish from a foreign culture',
                completed: false,
                userId: 7,
              },
            ],
            total: 100,
          },
          isAddTaskModalOpen: false,
          isLoading: false,
          newTaskLoading: false,
          todoLoadingIds: [],
        },
      },
    })

    const taskPageObject = new TaskPageObject(screen)

    expect(taskPageObject.checkbox).toBeInTheDocument()

    await taskPageObject.toggleTask()
    expect(taskPageObject.checkboxLoader).toBeInTheDocument()

    expect(mockUpdateTask).toHaveBeenCalledWith(
      {
        taskId: todo.id,
        completed: true,
        todo: 'Prepare a dish from a foreign culture',
      },
      expect.any(Object),
    )
    resolveUpdateTask({
      id: 127,
      todo: 'Prepare a dish from a foreign culture',
      completed: true,
      userId: 7,
    })

    expect(await taskPageObject.checkboxIcon).toBeInTheDocument()
  })
})
