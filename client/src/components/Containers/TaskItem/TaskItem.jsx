import { useState } from 'react'
import TaskInput from '../../UI/TaskInput/TaskInput.jsx'
import styles from './TaskItem.module.scss'

const TaskItem = ({ id, text, onTextChange }) => {
  return (
    <div className={styles.TaskItem}>
      <div className={styles.taskContent}>
        <div className={styles.taskId}>{id}</div>
        <TaskInput
          value={text}
          onChange={(e) => onTextChange(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default TaskItem