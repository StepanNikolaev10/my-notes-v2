import styles from './NotesPage.module.scss';
import { useMemo, useState } from 'react';
import NotesPageMain from '../../components/NotesPage/NotesPageMain/NotesPageMain';
import MainHeader from '../../components/Shared/MainHeader/MainHeader';
import useNotesStore from '../../store/useNotesStore';
import AddNoteModal from '../../components/NotesPage/AddNoteModal/AddNoteModal';
import EditNoteColorModal from '../../components/Shared/EditNoteColorModal/EditNoteColorModal';
import SelectSortModal from '../../components/NotesPage/SelectSortModal/SelectSortModal';
import { NOTES_SORT_METHODS } from '../../constants/notesSortMethods';
import type { ModalContentVariants } from '../../types/ui';
import Sidebar from '../../components/Shared/Sidebar/Sidebar';

const NotesPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [openedModal, setOpenedModal] = useState<ModalContentVariants | null>(null);
  const [selectedSort, setSelectedSort] = useState(NOTES_SORT_METHODS.CUSTOM.value);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  
  const openModal = (variant: any) => {
    setOpenedModal(variant)
  }

  const sortNotes = (sort: any) => { // ANY ЗАМЕНИТЬ НА ТИП
    setSelectedSort(sort)
  }

  const toggleSidebar = () => {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  }

  return (
    <div className={styles.notesPage}>
      <MainHeader
        onOpenModal={openModal} 
        onToggleSidebar={toggleSidebar}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      />
      <NotesPageMain
        notes={sortedNotes}
        onOpenModal={openModal} 
      />
      {openedModal === 'NOTE_ADDING' && (
        <AddNoteModal
          onClose={() => setOpenedModal(null)}
        />
      )}
      {openedModal === 'NOTE_COLOR_EDITING' && (
        <EditNoteColorModal
          onClose={() => setOpenedModal(null)}
        />
      )}
      {openedModal === 'SORT_SELECTING' && (
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