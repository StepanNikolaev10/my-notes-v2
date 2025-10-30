import styles from './TaskListPage.module.scss';
import { useState } from 'react';
import TaskListDisplay from '/src/components/Containers/TaskListDisplay/TaskListDisplay';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Покушать'},
    {id: 2, text: 'Погулять'}
  ])

  const addTask = (newText) => {
    const newTask = { id: tasks.length+1, text: newText};
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  const updateTaskText = (id, newText) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  return (
    <div className={styles.TaskListPage}>
      <TaskListDisplay
        tasks={tasks}
        onTextChange={updateTaskText}
      />
    </div>
  )
}
export default TaskListPage