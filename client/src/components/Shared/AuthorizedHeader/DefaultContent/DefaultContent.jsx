import AppName from '/src/components/Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';
import UserMenu from './UserMenu/UserMenu';
import SearchNotesBox from './SearchNotesBox/SearchNotesBox';

const DefaultContent = () => {
  return (
    <div className={styles.defaultContent}>
      <AppName/>
      <SearchNotesBox/>
      <UserMenu/>
    </div>
  )
}
export default DefaultContent;