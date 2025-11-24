import EditTaskBtn from '../../UI/EditTaskBtn/EditTaskBtn.jsx';
import TaskCheckbox from '../../UI/TaskCheckbox/TaskCheckbox.jsx';
import TaskInput from '../../UI/TaskInput/TaskInput.jsx';
import styles from './TaskItem.module.scss';
import { useNavigate } from 'react-router-dom';

const TaskItem = ({ id, content, onEditTask, isEdit, taskStyles }) => {
  const router = useNavigate();

  const rootStyles = [styles.taskItem]

  if(isEdit) {
    rootStyles.push(styles.editable);
  }

  return (
    <div 
      className={rootStyles.join(' ')} 
      style={{
        backgroundColor: taskStyles.color,
        border: taskStyles.color && !isEdit && 'none'
      }}
      onClick={() => router(`/notes/${id}`)}
    >
      <div className={styles.taskContent}>
        <div 
          className={styles.title}
          style={{
            marginBottom: content.title && content.mainText && '10px'
          }}
        >
          {content.title}
        </div>
        <div className={styles.mainText}>{content.mainText}</div>
      </div>
      <EditTaskBtn
        onClick={() => onEditTask(id)}
      />
    </div>
  );
};

export default TaskItem