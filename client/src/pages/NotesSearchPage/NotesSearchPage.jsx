import NotesSearchPageHeader from '../../components/NotesSearchPage/NotesSearchPageHeader/NotesSearchPageHeader';
import NotesSearchPageMain from '../../components/NotesSearchPage/NotesSearchPageMain/NotesSearchPageMain';
import styles from './NotesSearchPage.module.scss';
import { useState, useMemo } from 'react';
import useNotesStore from '../../store/useNotesStore'
import EditNoteColorModal from '../../components/Shared/EditNoteColorModal/EditNoteColorModal';
import useDebounce from '../../hooks/useDebounce';

const NotesSearchPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [searchQuery, setSearchQuery] = useState('');
  const [modalActivity, setModalActivity] = useState(false);

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

  return (
    <div className={styles.notesSearchPage}>
      <NotesSearchPageHeader
        onSetSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onOpenModal={() => setModalActivity(true)}
      />
      <NotesSearchPageMain
        searchedNotes={searchedNotes}
        searchQuery={searchQuery}
      />
      <EditNoteColorModal
        isOpen={modalActivity}
        onClose={() => setModalActivity(false)}
      />
    </div>
  )
}
export default NotesSearchPage;