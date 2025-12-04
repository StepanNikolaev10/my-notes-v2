import styles from './NotesPage.module.scss';
import { useState } from 'react';
import NotesPageMain from '/src/components/NotesPage/NotesPageMain/NotesPageMain';
import ModalContainer from '../../components/NotesPage/ModalContainer/ModalContainer';
import AuthorizedHeader from '../../components/Shared/AuthorizedHeader/AuthorizedHeader';
import useNotesStore from '../../store/useNotesStore';

const NotesPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type); 
  }

  return (
    <div className={styles.notesPage}>
      <AuthorizedHeader
        onOpenModal={openModal} 
      />
      <NotesPageMain
        notes={notes}
        onOpenModal={openModal}
      />
      <ModalContainer
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
  
}

export default NotesPage;