import type { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export class AddTaskPageObject {
  get addButton() {
    return this.screen.getByRole('button', {
      name: 'Add Task',
    })
  }
  get modal() {
    return this.screen.queryByTestId('add-task-modal')
  }

  get input() {
    return this.screen.getByRole('textbox')
  }

  get applyButton() {
    return this.screen.getByRole('button', {
      name: 'APPLY',
    })
  }

  get cancelButton() {
    return this.screen.getByRole('button', {
      name: 'CANCEL',
    })
  }

  async openModal() {
    await userEvent.click(this.addButton)
  }

  async typeTask(value: string) {
    await userEvent.type(this.input, value)
  }

  async clickApply() {
    await userEvent.click(this.applyButton)
  }

  async closeModal() {
    await userEvent.click(this.cancelButton)
  }

  constructor(private readonly screen: ReturnType<typeof render>) {}
}
