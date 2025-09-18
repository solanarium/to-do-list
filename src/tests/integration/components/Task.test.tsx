import '@testing-library/jest-dom'

import { waitFor } from '@testing-library/react'

import { deleteTask } from '../../../api/deleteTask'
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
jest.mock('../../../api/deleteTask')

describe('Integration | Components | Task', () => {
  let mockUpdateTask: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    mockUpdateTask = updateTask as jest.Mock
  })
  test('it renders', async () => {
    const taskPageObject = new TaskPageObject(
      render(<Task setEditId={() => {}} isEditMode={false} task={todo} />),
    )

    expect(taskPageObject.checkbox).toBeInTheDocument()
  })

  test('it toggles', async () => {
    mockUpdateTask.mockImplementation(() => {
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
  test('it updates task', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture qwerty',
        completed: false,
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

    await taskPageObject.clickPencil()

    expect(taskPageObject.input).toBeInTheDocument()

    await taskPageObject.typeName(' qwerty')
    await taskPageObject.clickCheck()

    expect(mockUpdateTask).toHaveBeenCalledWith(
      {
        taskId: 127,
        completed: false,
        todo: 'Prepare a dish from a foreign culture qwerty',
      },
      expect.any(Object),
    )
    expect(taskPageObject.title).toHaveTextContent(
      'Prepare a dish from a foreign culture qwerty',
    )
  })
  test('it does not request when value is initial', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture',
        completed: false,
        userId: 7,
      })
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

    await taskPageObject.clickPencil()

    expect(taskPageObject.input).toHaveValue(
      'Prepare a dish from a foreign culture',
    )
    await taskPageObject.clickCheck()

    expect(mockUpdateTask).not.toHaveBeenCalled()
  })
  test('it toggles EditMode', async () => {
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

    await taskPageObject.clickPencil()

    await taskPageObject.typeName(' hello')

    await taskPageObject.clickCancel()

    expect(taskPageObject.title).toHaveTextContent(
      'Prepare a dish from a foreign culture',
    )

    await taskPageObject.clickPencil()

    expect(taskPageObject.input).toHaveValue(
      'Prepare a dish from a foreign culture',
    )
  })
  test('it submits on enter press', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture world',
        completed: false,
        userId: 7,
      })
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

    await taskPageObject.clickPencil()

    await taskPageObject.typeName(' world')

    await taskPageObject.pressEnter()

    expect(mockUpdateTask).toHaveBeenCalled()
  })
  test('it does not submit on enter press when editMode is disabled', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture',
        completed: false,
        userId: 7,
      })
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

    await taskPageObject.pressEnter()

    expect(mockUpdateTask).not.toHaveBeenCalled()
  })
  test('it deletes task', async () => {
    const mockDeleteTask = (deleteTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture',
        completed: false,
        userId: 7,
        isDeleted: true,
        deletedOn: 'gcfhjbk',
      })
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

    await taskPageObject.clickTrash()

    expect(mockDeleteTask).toHaveBeenCalledWith(127, expect.any(Object))

    expect(taskPageObject.task).not.toBeInTheDocument()
  })
  test('it does not delete task when promise is rejected', async () => {
    const mockDeleteTask = (deleteTask as jest.Mock).mockImplementation(
      Promise.reject,
    )
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

    await taskPageObject.clickTrash()

    expect(mockDeleteTask).toHaveBeenCalledWith(127, expect.any(Object))

    await waitFor(() => {
      expect(screen.queryByTestId('task')).toBeInTheDocument()
    })
  })

  describe('Error handling', () => {
    beforeEach(() => {
      mockUpdateTask.mockImplementation(Promise.reject)
    })
    test('it does not update todo when promise rejected', async () => {
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

      await taskPageObject.clickPencil()

      expect(taskPageObject.input).toBeInTheDocument()

      await taskPageObject.typeName(' qwerty')
      await taskPageObject.clickCheck()

      expect(mockUpdateTask).toHaveBeenCalledWith(
        {
          taskId: 127,
          completed: false,
          todo: 'Prepare a dish from a foreign culture qwerty',
        },
        expect.any(Object),
      )

      expect(taskPageObject.title).toHaveTextContent(
        'Prepare a dish from a foreign culture',
      )
    })
    test('it does not toggle when promise rejected', async () => {
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

      await taskPageObject.toggleTask()
      expect(mockUpdateTask).toHaveBeenCalledWith(
        {
          taskId: todo.id,
          completed: true,
          todo: 'Prepare a dish from a foreign culture',
        },
        expect.any(Object),
      )
      expect(screen.queryByTestId('icon-checkbox')).not.toBeInTheDocument()
    })
  })
})
