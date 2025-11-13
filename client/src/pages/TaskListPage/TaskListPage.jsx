import styles from './TaskListPage.module.scss';
import { useState, useEffect } from 'react';
import TaskListDisplay from '/src/components/TaskListPage/Containers/TaskListDisplay/TaskListDisplay';
import ActionsPanel from '../../components/TaskListPage/Containers/ActionsPanel/ActionsPanel';
import { v4 as uuidv4 } from 'uuid';
import ModalContainer from '../../components/TaskListPage/Containers/ModalContainer/ModalContainer';
import AuthorizedHeader from '../../components/Shared/Containers/AuthorizedHeader/AuthorizedHeader';

const TaskListPage = () => {
  const [tasks, setTasks] = useState(() => {
    // ленивая подрузка, что бы данные получались единожды при первом рендере компонента
    // ЕСЛИ ПЕРЕДАВАТЬ В USESTATE ФУНКЦИЮ - ОНА БУДЕТ ВЫПОЛНЕНА 1 РАЗ ПРИ ПЕРВОМ РЕНДЕРЕ, ЧТО БЫ ПОЛУЧИТЬ ЗНАЧЕНИЕ СОСТОЯНИЯ
    const saved = localStorage.getItem('taskListData');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeModal, setActiveModal] = useState(null);
  const [editableTasks, setEditableTasks] = useState([]);
  
  // хук обновляет localStorage если состояние tasks изменилось.
  useEffect(() => {
    localStorage.setItem('taskListData', JSON.stringify(tasks)); 
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: uuidv4(),
      index: tasks.length+1,
      text: text,
      taskStyles: {
        isBold: false,
        isCursive: false,
        markColor: null
      }
    }
    setTasks(prevTasks => [...prevTasks, newTask]); 
    setActiveModal(null);
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

  const openModal = (type) => {
    setActiveModal(type); 
  }

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);

    if (taskToEdit) {
      setEditableTasks(prevEditableTasks => {
        const isAlreadyAdded = prevEditableTasks.some(task => task.id === id);
        if (isAlreadyAdded) {
          return prevEditableTasks.filter(task => task.id !== id);
        }
        return [...prevEditableTasks, taskToEdit];
      });
    }
  }

  const deleteTasks = () => {
    const idsToDelete = editableTasks.map(task => task.id);
    setTasks(prevTasks => {
      const remainingTasks = prevTasks.filter(task => !idsToDelete.includes(task.id));
      return remainingTasks.map((task, index) => ({
        ...task,
        index: index + 1, 
      }));
    });
    setEditableTasks([]);
  }

  const clearTaskList = () => {
    setTasks([]);
    setEditableTasks([]);
  }

  const toggleTextBold = () => {
    const idsToToggle = editableTasks.map(task => task.id);
    setTasks(prev => {
      return prev.map(task => {
        if(idsToToggle.includes(task.id)) {
          return { 
            ...task, 
            taskStyles: { ...task.taskStyles, isBold: !task.taskStyles.isBold } 
          };
        }
        return task;
      });
    });

  }

  return (
    <div className={styles.TaskListPage}>
      <AuthorizedHeader
        editableTasks={editableTasks}
        onDeleteTask={deleteTasks}
        onStopEditing={() => setEditableTasks([])}
        onToggleTextBold={toggleTextBold}
      />
      <TaskListDisplay
        tasks={tasks}
        onTextChange={updateTaskText}
        onToggleTaskCheckbox={toggleTaskCheckbox}
        onEditTask={editTask}
        editableTasks={editableTasks}
      />
      <ModalContainer
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
        onAddTask={addTask}
      />
      <ActionsPanel
        onOpenModal={openModal}
        onClearTaskList={clearTaskList}
        tasksCount={tasks.length}
      />
    </div>
  );
  
}

export default TaskListPage