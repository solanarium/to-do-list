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

  async toggleTask() {
    await this.click(this.screen.getByTestId('button-task'))
  }
}
