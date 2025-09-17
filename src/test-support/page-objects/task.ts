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

  async toggleTask() {
    await userEvent.click(this.screen.getByTestId('button-task'))
  }

  constructor(private readonly screen: ReturnType<typeof render>) {}
}
