import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { render } from '../test-utils'

type Screen = ReturnType<typeof render>

export abstract class PageObject {
  protected readonly toScreen = within

  protected readonly clear = userEvent.clear
  protected readonly click = userEvent.click
  protected readonly copy = userEvent.copy
  protected readonly cut = userEvent.cut
  protected readonly dblClick = userEvent.dblClick
  protected readonly deselectOptions = userEvent.deselectOptions
  protected readonly hover = userEvent.hover
  protected readonly keyboard = userEvent.keyboard
  protected readonly paste = userEvent.paste
  protected readonly pointer = userEvent.pointer
  protected readonly selectOptions = userEvent.selectOptions
  protected readonly setup = userEvent.setup
  protected readonly tripleClick = userEvent.tripleClick
  protected readonly type = userEvent.type
  protected readonly unhover = userEvent.unhover
  protected readonly upload = userEvent.upload
  protected readonly tab = userEvent.tab

  protected debug() {
    this.screen.debug()
  }

  constructor(protected readonly screen: Screen) {}
}
