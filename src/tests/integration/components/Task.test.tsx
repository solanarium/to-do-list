import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'

import { updateTask } from '../../../api/updateTask'
import { Task } from '../../../components/Task/Task'
import type { Task as TaskType } from '../../../types'
import { render } from '../../utils/test-utils'

const todo: TaskType = {
  id: 127,
  todo: 'Prepare a dish from a foreign culture',
  completed: false,
  userId: 7,
}

jest.mock('../../../api/updateTask')

describe('Integration | Components | Task', () => {
  test('it renders', async () => {
    const screen = render(
      <Task setEditId={() => {}} isEditMode={false} task={todo} />,
    )

    expect(screen.getByTestId('task-checkbox')).toBeInTheDocument()
  })
  test('it toggles', async () => {
    const mockUpdateTask = (updateTask as jest.Mock).mockImplementation(() => {
      return Promise.resolve()
    })

    const screen = render(
      <Task setEditId={() => {}} isEditMode={false} task={todo} />,
    )

    await userEvent.click(await screen.findByTestId('button-task'))
    expect(screen.getByTestId('button-task'))
    expect(mockUpdateTask).toHaveBeenCalledWith(
      {
        taskId: todo.id,
        completed: true,
        todo: 'Prepare a dish from a foreign culture',
      },
      expect.any(Object),
    )
    expect(screen.getByTestId('icon-checkbox')).toBeInTheDocument()
  })
})
