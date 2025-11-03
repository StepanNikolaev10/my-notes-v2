import styles from './TaskListPage.module.scss';
import { useState, useEffect } from 'react';
import TaskListDisplay from '/src/components/Containers/TaskListDisplay/TaskListDisplay';
import ActionsPanel from '../../components/Containers/ActionsPanel/ActionsPanel';
import { v4 as uuidv4 } from 'uuid';

const TaskListPage = () => {
    const [tasks, setTasks] = useState(() => {
      // ленивая загрузка
        const storedTasks = localStorage.getItem('taskListData');
        if (storedTasks) {
            try {
                return JSON.parse(storedTasks); 
            } catch (error) {
                console.error("Ошибка парсинга данных при инициализации:", error);
            }
        }
        return []; 
    });

  useEffect(() => {
      const storedTasks = localStorage.getItem('taskListData');
      if (storedTasks) {
          try {
              const parsedTasks = JSON.parse(storedTasks);
              setTasks(parsedTasks);
          } catch (error) {
              console.error("Ошибка парсинга данных:", error);
              setTasks([]); 
          }
      }
  }, []); 

  useEffect(() => {
      try {
          const serializedTasks = JSON.stringify(tasks);
          localStorage.setItem('taskListData', serializedTasks);
      } catch (error) {
          console.error("Ошибка сохранения данных:", error);
      }
  }, [tasks]);

  const addTask = () => {
    const newTask = {id: uuidv4(), index: tasks.length+1, text: ''};
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  const updateTaskText = (index, newText) => {
    setTasks(prev =>
      prev.map(t => (t.index === index ? { ...t, text: newText } : t))
    );
  };

  const toggleTaskCheckbox = (id) => {
    console.log(tasks)
    setTasks(prev => 
      prev.map(task => (task.id === id ? {...task,  isCompleted: !task.isCompleted }: task) )
    )
  }

  return (
    <div className={styles.TaskListPage}>
      <TaskListDisplay
        tasks={tasks}
        onTextChange={updateTaskText}
        onToggleTaskCheckbox={toggleTaskCheckbox}
      />
      <ActionsPanel
        onAddBtn={addTask}
      />
    </div>
  );
  
}
export default TaskListPage