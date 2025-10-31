import { useState } from "react";
import TaskItem from "/src/components/Containers/TaskItem/TaskItem";
import styles from "./TaskListDisplay.module.scss";

const TaskListDisplay = ({ tasks, onTextChange }) => {
  return (
    <div className={styles.taskListDisplay}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          onTextChange={onTextChange}
        />
      ))}
    </div>
  );
};

export default TaskListDisplay;