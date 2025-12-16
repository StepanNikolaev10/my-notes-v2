import Header from '../../Shared/UI/Header/Header';
import styles from './NotePageHeader.module.scss';
import { useNavigate } from 'react-router-dom';

const NotePageHeader = ({ onSaveNote }) => {
  const router = useNavigate();

  const saveNote = async () => {
    await onSaveNote();
    router('/');
  }

  return (
    <Header>
      <button className={styles.backBtn} onClick={() => router('/')}>Back</button>
      <button className={styles.saveBtn} onClick={saveNote}>Save</button>
    </Header>
  )
}
export default NotePageHeader