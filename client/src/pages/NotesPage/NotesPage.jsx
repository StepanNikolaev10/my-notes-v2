import styles from './NotesPage.module.scss';
import { useState } from 'react';
import NotesPageMain from '/src/components/NotesPage/NotesPageMain/NotesPageMain';
import NotesPageHeader from '../../components/NotesPage/NotesPageHeader/NotesPageHeader';
import useNotesStore from '../../store/useNotesStore';
import AddNoteModal from '../../components/NotesPage/AddNoteModal/AddNoteModal';
import { MODAL_CONTENT_VARIANTS } from '../../constants/modalContentVariants';
import EditNoteColorModal from '../../components/Shared/EditNoteColorModal/EditNoteColorModal';
import SelectSortModal from '../../components/NotesPage/SelectSortModal/SelectSortModal';

const NotesPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [openedModal, setOpenedModal] = useState(null);

  const openModal = (type) => {
    setOpenedModal(type)
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
      {openedModal === MODAL_CONTENT_VARIANTS.NOTE_ADDING && (
        <AddNoteModal
          onClose={() => setOpenedModal(null)}
        />
      )}
      {openedModal === MODAL_CONTENT_VARIANTS.NOTE_COLOR_EDITING && (
        <EditNoteColorModal
          onClose={() => setOpenedModal(null)}
        />
      )}
      {openedModal === MODAL_CONTENT_VARIANTS.SORT_SELECTING && (
        <SelectSortModal
          onClose={() => setOpenedModal(null)}
        />
      )}
    </div>
  );
  
}

export default NotesPage;