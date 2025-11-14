import EditTaskBtn from '../../UI/EditTaskBtn/EditTaskBtn.jsx';
import TaskCheckbox from '../../UI/TaskCheckbox/TaskCheckbox.jsx';
import TaskInput from '../../UI/TaskInput/TaskInput.jsx';
import styles from './TaskItem.module.scss';

const TaskItem = ({ id, index, text, isCompleted, onTextChange, onToggleTaskCheckbox, onEditTask, isEdit, taskStyles }) => {

  const rootStyles = [styles.taskItem]

  if(isEdit) {
    rootStyles.push(styles.editable);
  }

  return (
    <div className={rootStyles.join(' ')} style={{backgroundColor: taskStyles.color}}>
      <div className={styles.taskContent}>
        <div className={styles.taskId}>{index}.</div>
        <TaskInput
          value={text}
          onChange={(e) => onTextChange(index, e.target.value)}
          isBold={taskStyles.isBold}
          isCursive={taskStyles.isCursive}
        />
        <TaskCheckbox
          isCompleted={isCompleted}
          onClick={() => onToggleTaskCheckbox(id)}
        />
        <EditTaskBtn
          onClick={() => onEditTask(id)}
        />
      </div>
    </div>
  );
};

export default TaskItem