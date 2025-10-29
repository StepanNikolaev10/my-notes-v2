import Task from "/src/components/UI/Task/Task";

const TaskListDisplay = ({tasks}) => {
  return (
    <div>
      {tasks.map((task) => {
        return ( 
          <Task
            key={task.id} 
            text={task.text}
            id={task.id}
          />
        );
      })}
    </div>
  )
}
export default TaskListDisplay;