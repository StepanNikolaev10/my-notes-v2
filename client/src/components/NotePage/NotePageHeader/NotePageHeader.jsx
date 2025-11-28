import styles from './NotePageHeader.module.scss';
import { useNavigate } from 'react-router-dom';

const NotePageHeader = ({ onSaveNote }) => {
  const router = useNavigate();

  const saveNote = async () => {
    await onSaveNote();
    router('/');
  }

  return (
    <div className={styles.notePageHeader}>
      <button className={styles.backBtn} onClick={() => router('/')}>Back</button>
      <button className={styles.saveBtn} onClick={saveNote}>Save</button>
    </div>
  )
}
export default NotePageHeader