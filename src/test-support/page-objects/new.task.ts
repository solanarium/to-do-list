import { PageObject } from './-page-object'

export class AddTaskPageObject extends PageObject {
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
    await this.click(this.addButton)
  }

  async typeTask(value: string) {
    await this.type(this.input, value)
  }

  async clickApply() {
    await this.click(this.applyButton)
  }

  async closeModal() {
    await this.click(this.cancelButton)
  }
}
