import { useState } from "react";
import TaskItem from "/src/components/Containers/TaskItem/TaskItem";
import styles from "./TaskListDisplay.module.scss";

const TaskListDisplay = ({ tasks, onTextChange, onToggleTaskCheckbox }) => {
  return (
    <div className={styles.taskListDisplay}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          index={task.index}
          text={task.text}
          isCompleted={task.isCompleted}
          onTextChange={onTextChange}
          onToggleTaskCheckbox={onToggleTaskCheckbox}
        />
      ))}
    </div>
  );
};

export default TaskListDisplay;