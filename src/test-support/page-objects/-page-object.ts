import type { render } from '../test-utils'

type Screen = ReturnType<typeof render>

export abstract class PageObject {
  constructor(protected readonly screen: Screen) {}
}
