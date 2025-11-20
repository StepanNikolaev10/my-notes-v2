import AppName from '/src/components/Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';
import UserMenu from './UserMenu/UserMenu';

const DefaultContent = () => {
  return (
    <div className={styles.defaultContent}>
      <AppName/>
      <input className={styles.searchTaskInput} type="text"/>
      <UserMenu/>
    </div>
  )
}
export default DefaultContent;