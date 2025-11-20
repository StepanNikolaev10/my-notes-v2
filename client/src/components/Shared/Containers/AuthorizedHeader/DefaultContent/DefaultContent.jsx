import AppName from '/src/components/Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';

const DefaultContent = () => {
  return (
    <div className={styles.defaultContent}>
      <AppName/>
      <input className={styles.searchTaskInput} type="text"/>
      <button className={styles.userNameBtn}>username</button>
    </div>
  )
}
export default DefaultContent;