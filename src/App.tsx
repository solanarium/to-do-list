import { type FC, useEffect } from 'react'

import { Container } from './components/Container'
import { Header } from './components/Header'
import { List } from './components/List'
import { Loader } from './components/Loader'
import { getTasksThunk } from './redux/slices/toDoSlice'
import { useDispatch, useSelector } from './redux/store'

const App: FC = () => {
  const isLoading = useSelector((state) => state.tasks.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksThunk())
  }, [dispatch])

  return (
    <Container>
      <Header />
      {isLoading ? <Loader /> : <List />}
      {/* <List /> */}
    </Container>
  )
}

export default App
