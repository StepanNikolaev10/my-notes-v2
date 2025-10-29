import styles from './Input.module.scss'

const Input = (props) => {
  return (
    <input className={styles.Input} {...props}></input>
  )
}
export default Input