import TaskItem from "/src/components/TaskListPage/Containers/TaskItem/TaskItem";
import styles from "./TaskListDisplay.module.scss";

const TaskListDisplay = ({ tasks, onTextChange, onToggleTaskCheckbox, onEditTask }) => {
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
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskListDisplay;