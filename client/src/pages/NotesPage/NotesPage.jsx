import styles from './NotesPage.module.scss';
import { useState } from 'react';
import NotesPageMain from '/src/components/NotesPage/NotesPageMain/NotesPageMain';
import Modal from '../../components/Shared/Modal/Modal';
import NotesPageHeader from '../../components/NotesPage/NotesPageHeader/NotesPageHeader';
import useNotesStore from '../../store/useNotesStore';

const NotesPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type); 
  }

  return (
    <div className={styles.notesPage}>
      <NotesPageHeader
        onOpenModal={openModal} 
      />
      <NotesPageMain
        notes={notes}
        onOpenModal={openModal}
      />
      <Modal
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
  
}

export default NotesPage;