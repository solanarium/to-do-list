import userEvent from '@testing-library/user-event'

import type { render } from '../test-utils'

export class TaskPageObject {
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
    await userEvent.click(this.screen.getByTestId('button-task'))
  }

  async clickPencil() {
    await userEvent.click(this.screen.getByTestId('pencil'))
  }

  async clickCheck() {
    await userEvent.click(this.screen.getByTestId('check'))
  }

  async typeName(name: string) {
    await userEvent.type(this.input, name)
  }

  async clickCancel() {
    await userEvent.click(this.cancel)
  }

  async pressEnter() {
    await userEvent.keyboard('{Enter}')
  }

  async clickTrash() {
    await userEvent.click(this.trash)
  }

  constructor(private readonly screen: ReturnType<typeof render>) {}
}
