import styles from './TaskListPage.module.scss';
import { useState } from 'react';
import TaskListDisplay from '/src/components/Containers/TaskListDisplay/TaskListDisplay';
import ActionsPanel from '../../components/Containers/ActionsPanel/ActionsPanel';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Покушать'},
    {id: 2, text: 'Погулять'}
  ])

  const addTask = () => {
    const newTask = { id: tasks.length+1, text: ''};
    setTasks(prevTasks => [...prevTasks, newTask]); 
    console.log('works')
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
      <ActionsPanel
        onAddBtn={addTask}
      />
    </div>
  )
}
export default TaskListPage