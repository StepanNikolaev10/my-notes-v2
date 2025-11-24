import styles from './NoteInput.module.scss';

const NoteInput = ({isBold, isCursive, ...props}) => {
  const rootStyles = [styles.noteInput];

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
export default NoteInput;