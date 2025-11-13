import styles from './TaskInput.module.scss';

const TaskInput = ({isBold, isCursive, ...props}) => {
  const rootStyles = [styles.TaskInput];

  if(isBold) {
    rootStyles.push(styles.isBold)
  }

  if (isCursive) {
    rootStyles.push(styles.isCursive)
  }

  return (
    <input className={rootStyles.join(' ')} {...props}/>
  )
}
export default TaskInput;