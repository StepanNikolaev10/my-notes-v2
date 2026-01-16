import NotesSearchPageHeader from '../components/NotesSearchPage/NotesSearchPageHeader/NotesSearchPageHeader';
import NotesSearchPageMain from '../components/NotesSearchPage/NotesSearchPageMain/NotesSearchPageMain';
import { useState, useMemo } from 'react';
import useNotesStore from '../store/useNotesStore'
import EditNoteColorModal from '../components/Shared/EditNoteColorModal/EditNoteColorModal';
import useDebounce from '../hooks/useDebounce';
import PageWrapper from '../components/Shared/UI/PageWrapper/PageWrapper';

const NotesSearchPage = () => {
  const notes = useNotesStore(state => state.notes);

  const [searchQuery, setSearchQuery] = useState('');
  const [modalActivity, setModalActivity] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const searchedNotes = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return notes.filter((item: any) => {
      const title = item.content?.title?.toLowerCase() || '';
      const text = item.content?.mainText?.toLowerCase() || '';
      return title.includes(normalizedQuery) || text.includes(normalizedQuery);
    });
  }, [debouncedSearchQuery, notes])

  return (
    <PageWrapper>
      <NotesSearchPageHeader
        onSetSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onOpenModal={() => setModalActivity(true)}
      />
      <NotesSearchPageMain
        searchedNotes={searchedNotes}
        searchQuery={searchQuery}
      />
      {modalActivity && (
        <EditNoteColorModal
          onClose={() => setModalActivity(false)}
        />
      )}

    </PageWrapper>
  )
}
export default NotesSearchPage;