import { useNavigate } from 'react-router-dom';
import styles from './SearchNotesBox.module.scss';
import SortIcon from '/src/assets/icons/sort-icon.svg?react';

const SearchNotesBox = () => {
  const router = useNavigate();

  return (
    <div className={styles.searchNotesBox} onClick={() => router('/search')}>
      <div className={styles.searchBoxText}>Search notes</div>
      <div className={styles.sortBtns}>
        <button className={styles.toggleNoteViewBtn} onClick={(e) => e.stopPropagation()}></button>
        <button className={styles.openSortModalBtn} onClick={(e) => e.stopPropagation()}>
          <SortIcon 
            style={{
              width: '20px', 
              height: '20px',
            }}
          />
        </button>
      </div>
    </div>
  )
}
export default SearchNotesBox