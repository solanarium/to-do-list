import type { FC } from 'react'

import { Container } from './components/Container'
import { Header } from './components/Header'
import { List } from './components/List'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  )
}

export default App
