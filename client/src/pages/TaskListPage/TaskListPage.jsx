import styles from './TaskListPage.module.scss';
import { useState, useEffect } from 'react';
import TaskListDisplay from '/src/components/TaskListPage/Containers/TaskListDisplay/TaskListDisplay';
import ActionsPanel from '../../components/TaskListPage/Containers/ActionsPanel/ActionsPanel';
import { v4 as uuidv4 } from 'uuid';
import ModalContainer from '../../components/TaskListPage/Containers/ModalContainer/ModalContainer';
import TaskAddModal from '../../components/TaskListPage/Containers/TaskAddModal/TaskAddModal';

const TaskListPage = () => {
  const [tasks, setTasks] = useState(() => {
    // ленивая подрузка, что бы данные получались единожды при первом рендере компонента
    // ЕСЛИ ПЕРЕДАВАТЬ В USESTATE ФУНКЦИЮ - ОНА БУДЕТ ВЫПОЛНЕНА 1 РАЗ ПРИ ПЕРВОМ РЕНДЕРЕ, ЧТО БЫ ПОЛУЧИТЬ ЗНАЧЕНИЕ СОСТОЯНИЯ
    const saved = localStorage.getItem('taskListData');
    return saved ? JSON.parse(saved) : [];
  });

  // хук обновляет localStorage если состояние tasks изменилось.
  useEffect(() => {
    localStorage.setItem('taskListData', JSON.stringify(tasks)); 
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
      <ModalContainer>
        <TaskAddModal/>
      </ModalContainer>
      <ActionsPanel
        onAddBtn={addTask}
      />
    </div>
  );
  
}
export default TaskListPage