import Sidebar from '../../components/Shared/Sidebar/Sidebar';
import TrashPageHeader from '../../components/TrashPage/TrashPageHeader/TrashPageHeader';
import TrashPageMain from '../../components/TrashPage/TrashPageMain/TrashPageMain';
import useNotesStore from '../../store/useNotesStore';
import styles from './TrashPage.module.scss';

const TrashPage = () => {
  const trashedNotes = useNotesStore(state => state.trashedNotes);

  return (
    <div className={styles.trashPage}>
      <TrashPageHeader/>
      <Sidebar/>
      <TrashPageMain notes={trashedNotes}/>
    </div>
  )
}
export default TrashPage;