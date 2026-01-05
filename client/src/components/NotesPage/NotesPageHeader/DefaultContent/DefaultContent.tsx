import AppName from '../../../Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';
import UserMenu from './UserMenu/UserMenu';
import SearchNotesBox from './SearchNotesBox/SearchNotesBox';

interface DefaultContentProps {
  onOpenModal: (modalType: string) => void;
}

const DefaultContent = ({ onOpenModal }: DefaultContentProps) => {
  return (
    <div className={styles.defaultContent}>
      <AppName/>
      <SearchNotesBox onOpenModal={onOpenModal}/>
      <UserMenu/>
    </div>
  )
}
export default DefaultContent;