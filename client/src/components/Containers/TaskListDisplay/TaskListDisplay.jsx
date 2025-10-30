import { useState } from "react";
import TaskItem from "/src/components/Containers/TaskItem/TaskItem";

const TaskListDisplay = ({ tasks, onTextChange }) => {
  return (
    <div>
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