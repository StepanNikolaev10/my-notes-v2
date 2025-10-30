import styles from './TaskListPage.module.scss'
import TaskListForm from '/src/components/Containers/TaskListForm/TaskListForm'
import { useState } from 'react'
import TaskListDisplay from '/src/components/Containers/TaskListDisplay/TaskListDisplay'

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Покушать'},
    {id: 2, text: 'Погулять'}
  ])

  const addTask = (newText) => {
    const newTask = { id: tasks.length+1, text: newText};
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  return (
    <div className={styles.TaskListPage}>
      <TaskListForm 
        addTask={addTask}
      />
      <TaskListDisplay
        tasks={tasks}
      />
    </div>
  )
}
export default TaskListPage