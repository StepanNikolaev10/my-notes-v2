import styles from './NotesSearchPageMain.module.scss';
import SearchedNoteItem from '../SearchedNoteItem/SearchedNoteItem';

interface NotesSearchPageMainProps {
  searchedNotes: any,
  searchQuery: string
}

const NotesSearchPageMain = ({ searchedNotes, searchQuery }:NotesSearchPageMainProps) => {
  return (
    <main className={styles.notesSearchPageMain}>
      <div className={styles.searchedNotes}>
        {searchedNotes.length > 0 
        ? 
          (
            searchedNotes.map((item: any)=> {
              return (
                <SearchedNoteItem
                  key={item.id}
                  searchedNote={item}
                  searchQuery={searchQuery}
                />
              );
            })
          ) 
        : 
          (
            <div className={styles.emptyNotesText}>No notes found</div>
          )
        }
      </div>
    </main>
  )
}
export default NotesSearchPageMain;