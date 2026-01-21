import { useNavigate } from 'react-router-dom';
import styles from './SearchNotesBox.module.scss';
import SortIcon from '/src/assets/icons/sort-icon.svg?react';
import useModalStore from '../../../../../store/useModalStore';

const SearchNotesBox = () => {
  const openModal = useModalStore(state => state.openModal);
  const router = useNavigate();

  const handleOpenSortModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openModal('SORT_SELECTING')
  } 

  return (
    <div className={styles.searchNotesBox} onClick={() => router('/search')}>
      <div className={styles.searchBoxText}>Search notes</div>
      <div className={styles.sortBtns}>
        <button className={styles.openSortModalBtn} onClick={(e) => handleOpenSortModal(e)}>
          <SortIcon 
            style={{
              width: '20px', 
              height: '20px',
              fill: 'rgb(218, 218, 218)'
            }}
          />
        </button>
      </div>
    </div>
  )
}
export default SearchNotesBox;