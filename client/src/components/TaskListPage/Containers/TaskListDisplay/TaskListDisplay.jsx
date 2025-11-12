import TaskItem from "/src/components/TaskListPage/Containers/TaskItem/TaskItem";
import styles from "./TaskListDisplay.module.scss";

const TaskListDisplay = ({ tasks, onTextChange, onToggleTaskCheckbox, onEditTask, editableTasks }) => {
  return (
    <div className={styles.taskListDisplay}>
      {tasks.map(task => {
        const isEdit = editableTasks.some(editable => editable.id === task.id);

        return (
          <TaskItem
            key={task.id}
            id={task.id}
            index={task.index}
            text={task.text}
            isCompleted={task.isCompleted}
            onTextChange={onTextChange}
            onToggleTaskCheckbox={onToggleTaskCheckbox}
            onEditTask={onEditTask}
            isEdit={isEdit}
          />
        );
      })}
    </div>
  );
};

export default TaskListDisplay;
