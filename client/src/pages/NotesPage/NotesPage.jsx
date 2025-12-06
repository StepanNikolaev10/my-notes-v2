import styles from './NotesPage.module.scss';
import { useState } from 'react';
import NotesPageMain from '/src/components/NotesPage/NotesPageMain/NotesPageMain';
import NotesPageHeader from '../../components/NotesPage/NotesPageHeader/NotesPageHeader';
import useNotesStore from '../../store/useNotesStore';
import AddNoteModal from '../../components/NotesPage/AddNoteModal/AddNoteModal';
import { MODAL_CONTENT_VARIANTS } from '../../constants/modalContentVariants';
import EditNoteColorModal from '../../components/Shared/EditNoteColorModal/EditNoteColorModal';

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
      {
        activeModal === MODAL_CONTENT_VARIANTS.NOTE_ADDING
        ?
          (
            <AddNoteModal
              isOpen={activeModal}
              onClose={() => setActiveModal(null)}
            />
          )
        : 
          (
            <EditNoteColorModal
              isOpen={activeModal}
              onClose={() => setActiveModal(null)}
            />
          )
      }

    </div>
  );
  
}

export default NotesPage;