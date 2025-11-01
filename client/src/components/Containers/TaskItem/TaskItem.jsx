import EditTaskBtn from '../../UI/EditTaskBtn/EditTaskBtn.jsx';
import TaskCheckbox from '../../UI/TaskCheckbox/TaskCheckbox.jsx';
import TaskInput from '../../UI/TaskInput/TaskInput.jsx';
import styles from './TaskItem.module.scss';

const TaskItem = ({ index, text, onTextChange }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskContent}>
        <div className={styles.taskId}>{index}.</div>
        <TaskInput
          value={text}
          onChange={(e) => onTextChange(index, e.target.value)}
        />
        <TaskCheckbox/>
        <EditTaskBtn/>
      </div>
    </div>
  );
};

export default TaskItem