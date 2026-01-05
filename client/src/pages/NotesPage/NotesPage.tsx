import styles from './NotesPage.module.scss';
import { useMemo, useState } from 'react';
import NotesPageMain from '../../components/NotesPage/NotesPageMain/NotesPageMain';
import NotesPageHeader from '../../components/NotesPage/NotesPageHeader/NotesPageHeader';
import useNotesStore from '../../store/useNotesStore';
import AddNoteModal from '../../components/NotesPage/AddNoteModal/AddNoteModal';
import { MODAL_CONTENT_VARIANTS } from '../../constants/modalContentVariants';
import EditNoteColorModal from '../../components/Shared/EditNoteColorModal/EditNoteColorModal';
import SelectSortModal from '../../components/NotesPage/SelectSortModal/SelectSortModal';
import { NOTES_SORT_METHODS } from '../../constants/notesSortMethods';

const NotesPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [openedModal, setOpenedModal] = useState(null);
  const [selectedSort, setSelectedSort] = useState(NOTES_SORT_METHODS.CUSTOM.value);
  console.log(selectedSort)

  const sortedNotes = useMemo(() => {
    if (selectedSort === NOTES_SORT_METHODS.CUSTOM.value) {
      return notes;
    }

    if (selectedSort === NOTES_SORT_METHODS.DATE_CREATED.value) {
      return [...notes].sort((a,b) => b.dateCreated - a.dateCreated);
    }

    if (selectedSort === NOTES_SORT_METHODS.DATE_MODIFIED.value) {
      return [...notes].sort((a,b) => b.dateModified - a.dateModified);
    }

    return notes;
  }, [selectedSort, notes]);
  
  const openModal = (type: any) => { // ANY ЗАМЕНИТЬ НА ТИП
    setOpenedModal(type)
  }

  const sortNotes = (sort: any) => { // ANY ЗАМЕНИТЬ НА ТИП
    setSelectedSort(sort)
  }

  return (
    <div className={styles.notesPage}>
      <NotesPageHeader
        onOpenModal={openModal} 
      />
      <NotesPageMain
        notes={sortedNotes}
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
          selectedSort={selectedSort}
          onSelectSort={sortNotes}
        />
      )}
    </div>
  );
  
}

export default NotesPage;