import AppName from '../../../Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';
import UserMenu from './UserMenu/UserMenu';
import SearchNotesBox from './SearchNotesBox/SearchNotesBox';
import BurgerBtn from './BurgerBtn/BurgerBtn';

interface DefaultContentProps {
  onOpenModal: (modalType: string) => void;
  onToggleSidebar: () => void;
}

const DefaultContent = ({ onOpenModal, onToggleSidebar }: DefaultContentProps) => {
  return (
    <div className={styles.defaultContent}>
      <div className={styles.startContainer}>
        <BurgerBtn onClick={onToggleSidebar}/>
        <AppName/>
      </div>
      <div className={styles.centerContainer}>
      <SearchNotesBox onOpenModal={onOpenModal}/>
      </div>

      <div className={styles.endContainer}>
        <UserMenu/>
      </div>
    </div>
  )
}
export default DefaultContent;