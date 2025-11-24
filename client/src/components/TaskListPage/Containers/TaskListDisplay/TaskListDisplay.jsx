import TaskItem from "/src/components/TaskListPage/Containers/TaskItem/TaskItem";
import styles from "./TaskListDisplay.module.scss";

const TaskListDisplay = ({ tasks, onTextChange, onToggleTaskCheckbox, onEditTask, editableTasks }) => {
  return (
    <div className={styles.taskListDisplay}>
      {tasks.length > 0 ? (
        tasks.map(task => {
          const isEdit = editableTasks.some(editable => editable.id === task.id);
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              index={task.index}
              content={task.content}
              isCompleted={task.isCompleted}
              onTextChange={onTextChange}
              onToggleTaskCheckbox={onToggleTaskCheckbox}
              onEditTask={onEditTask}
              isEdit={isEdit}
              taskStyles={task.taskStyles}
            />
          );
        })
      ) : (
        <div className={styles.emptyListText}>Your task list is empty</div>
      )}
    </div>
  );
};

export default TaskListDisplay;
