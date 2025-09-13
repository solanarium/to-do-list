import { type FC, useEffect } from 'react'

import styles from './App.module.css'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { List } from './components/List'
import { Loader } from './components/Loader'
import { NewTask } from './components/NewTask'
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
      {isLoading ? (
        <div className={styles.loading_container}>
          <Loader className={styles.loader_icon} />
        </div>
      ) : (
        <div>
          <List />
          <NewTask />
        </div>
      )}
    </Container>
  )
}

export default App
