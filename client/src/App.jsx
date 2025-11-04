import '../src/styles/App.scss'
import TaskListPage from './pages/TaskListPage/TaskListPage.jsx'
import Header from './components/Shared/Containers/Header/Header.jsx'

function App() {
  return (
    <div className='App'>
      <Header/>
      <TaskListPage/>
    </div>
  )
}

export default App
