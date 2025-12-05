import NotesSearchPageHeader from '../../components/NotesSearchPage/NotesSearchPageHeader/NotesSearchPageHeader';
import NotesSearchPageMain from '../../components/NotesSearchPage/NotesSearchPageMain/NotesSearchPageMain';
import styles from './NotesSearchPage.module.scss';
import { useState, useMemo } from 'react';
import useNotesStore from '../../store/useNotesStore'
import Modal from '../../components/Shared/Modal/Modal';
import useDebounce from '../../hooks/useDebounce';

const NotesSearchPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const searchedNotes = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return notes.filter(item => {
      const title = item.content?.title?.toLowerCase() || '';
      const text = item.content?.mainText?.toLowerCase() || '';
      return title.includes(normalizedQuery) || text.includes(normalizedQuery);
    });
  }, [debouncedSearchQuery, notes])

  const openModal = (type) => {
    setActiveModal(type); 
  }

  return (
    <div className={styles.notesSearchPage}>
      <NotesSearchPageHeader
        onSetSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onOpenModal={openModal}
      />
      <NotesSearchPageMain
        searchedNotes={searchedNotes}
        searchQuery={searchQuery}
      />
      <Modal
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  )
}
export default NotesSearchPage;