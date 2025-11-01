import styles from './TaskListPage.module.scss';
import { useState } from 'react';
import TaskListDisplay from '/src/components/Containers/TaskListDisplay/TaskListDisplay';
import ActionsPanel from '../../components/Containers/ActionsPanel/ActionsPanel';
import { v4 as uuidv4 } from 'uuid';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {id: uuidv4(), index: 1, text: 'Покушать'},
    {id: uuidv4(), index: 2, text: 'Погулять'}
  ])

  const addTask = () => {
    const newTask = {id: uuidv4(), index: tasks.length+1, text: ''};
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  const updateTaskText = (index, newText) => {
    setTasks(prev =>
      prev.map(t => (t.index === index ? { ...t, text: newText } : t))
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
  );
  
}
export default TaskListPage