import Sidebar from '../../components/Shared/Sidebar/Sidebar';
import TrashPageHeader from '../../components/TrashPage/TrashPageHeader/TrashPageHeader';
import styles from './TrashPage.module.scss';

const TrashPage = () => {
  return (
    <div className={styles.trashPage}>
      <TrashPageHeader/>
      <Sidebar/>
    </div>
  )
}
export default TrashPage;