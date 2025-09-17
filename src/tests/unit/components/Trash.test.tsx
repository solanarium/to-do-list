import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Trash } from '../../../components/Task/Trash'
import { deleteTaskThunk } from '../../../redux/slices/thunks'
import { useDispatch } from '../../../redux/store'
import type { Task } from '../../../types'

jest.mock('../../../redux/store')

jest.mock('../../../redux/slices/thunks')

const task: Task = {
  id: 127,
  todo: 'Prepare a dish from a foreign culture',
  completed: false,
  userId: 7,
}

describe('Unit | Components | Trash', () => {
  test('it renders', async () => {
    const mockDispatch = jest.fn()

    ;(useDispatch as jest.Mock).mockImplementation(() => {
      return mockDispatch
    })
    const mockThunk = (
      deleteTaskThunk as unknown as jest.Mock
    ).mockImplementation(() => {
      return 'action'
    })

    const screen = render(<Trash task={task} />)

    await userEvent.click(screen.getByRole('button'))

    expect(mockThunk).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith('action')
    expect(deleteTaskThunk).toHaveBeenCalledWith(127)
  })
})
