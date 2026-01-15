import styles from './TrashPageMain.module.scss';
import type { Note } from '../../../types/entities';
import NotesList from '../../Shared/NotesList/NotesList';

interface TrashPageMainProps {
  notes: Note[];
}

const TrashPageMain = ({ notes }: TrashPageMainProps) => {
  return (
    <main className={styles.trashPageMain}>
      {notes.length > 0
        ? <NotesList notes={notes}/>
        : <div className={styles.noNotesMessage}>No notes in trash</div>
      }

    </main>
  )
}
export default TrashPageMain;