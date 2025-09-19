import '@testing-library/jest-dom'

import { addTask } from '../../../api/addTask'
import { NewTask } from '../../../components/NewTask'
import { AddTaskPageObject } from '../../../test-support/page-objects/new.task'
import { render } from '../../../test-support/test-utils'

jest.mock('../../../api/addTask')

describe('Integration | Components | Add Task', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('it toggles modal', async () => {
    const screen = render(<NewTask />)

    const addTaskPageObject = new AddTaskPageObject(screen)

    await addTaskPageObject.openModal()

    expect(addTaskPageObject.modal).toBeInTheDocument()

    await addTaskPageObject.closeModal()

    expect(addTaskPageObject.modal).not.toBeInTheDocument()
  })
  test('it adds task', async () => {
    const mockAddTask = (addTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve({
        id: 127,
        todo: 'Prepare a dish from a foreign culture',
        completed: false,
        userId: 7,
      })
    })

    const screen = render(<NewTask />)

    const addTaskPageObject = new AddTaskPageObject(screen)

    await addTaskPageObject.openModal()

    await addTaskPageObject.typeTask('fghjopoiu xcvbhjiuyghn')

    await addTaskPageObject.clickApply()

    expect(mockAddTask).toHaveBeenCalledWith(
      'fghjopoiu xcvbhjiuyghn',
      expect.any(Object),
    )
  })
  test('it does not add task', async () => {
    const mockAddTask = (addTask as jest.Mock).mockImplementation(() => {
      return Promise.reject()
    })

    const screen = render(<NewTask />)

    const addTaskPageObject = new AddTaskPageObject(screen)

    await addTaskPageObject.openModal()

    await addTaskPageObject.typeTask('fghjopoiu xcvbhjiuyghn')

    await addTaskPageObject.clickApply()

    expect(mockAddTask).toHaveBeenCalledWith(
      'fghjopoiu xcvbhjiuyghn',
      expect.any(Object),
    )

    expect(addTaskPageObject.modal).toBeInTheDocument()
  })
})
