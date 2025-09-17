import { render } from '@testing-library/react'

import { Task } from '../../../components/Task/Task'
import type { Task as TaskType } from '../../../types'

const todo: TaskType = {
  id: 127,
  todo: 'Prepare a dish from a foreign culture',
  completed: false,
  userId: 7,
}

describe('Integration | Components | Task', () => {
  beforeEach(() => {})
  test('it renders', () => {
    const screen = render(
      <Task setEditId={() => {}} isEditMode={false} task={todo} />,
    )
  })
})
