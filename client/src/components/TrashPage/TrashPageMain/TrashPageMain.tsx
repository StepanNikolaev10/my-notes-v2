import styles from './TrashPageMain.module.scss';
import NotesList from '../../Shared/NotesList/NotesList';
import useNotesStore from '../../../store/useNotesStore';

const TrashPageMain = () => {
  const trashedNotes = useNotesStore(state => state.trashedNotes);
  return (
    <main className={styles.main}>
      {trashedNotes.length > 0
        ? <NotesList notes={trashedNotes}/>
        : <div className={styles.noNotesMessage}>No notes in trash</div>
      }
    </main>
  )
}
export default TrashPageMain;