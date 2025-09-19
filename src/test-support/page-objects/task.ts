import { PageObject } from './-page-object'

export class TaskPageObject extends PageObject {
  get checkbox() {
    return this.screen.getByTestId('task-checkbox')
  }

  get checkboxLoader() {
    return this.screen.getByTestId('checkbox-loader')
  }

  get checkboxIcon() {
    return this.screen.findByTestId('icon-checkbox')
  }

  get input() {
    return this.screen.getByRole('textbox')
  }

  get title() {
    return this.screen.getByRole('paragraph')
  }

  get cancel() {
    return this.screen.getByTestId('cancel')
  }

  get trash() {
    return this.screen.getByTestId('trash')
  }

  get task() {
    return this.screen.queryByTestId('task')
  }

  async toggleTask() {
    await this.click(this.screen.getByTestId('button-task'))
  }

  async clickPencil() {
    await this.click(this.screen.getByTestId('pencil'))
  }

  async clickCheck() {
    await this.click(this.screen.getByTestId('check'))
  }

  async typeName(name: string) {
    await this.type(this.input, name)
  }

  async clickCancel() {
    await this.click(this.cancel)
  }

  async pressEnter() {
    await this.keyboard('{Enter}')
  }

  async clickTrash() {
    await this.click(this.trash)
  }
}
