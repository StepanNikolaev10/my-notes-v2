import styles from './TaskInput.module.scss';

const TaskInput = ({isBold, ...props}) => {

  const rootStyles = [styles.TaskInput];

  if(isBold) {
    rootStyles.push(styles.isBold)
  }

  return (
    <input className={rootStyles.join(' ')} {...props}/>
  )
}
export default TaskInput;