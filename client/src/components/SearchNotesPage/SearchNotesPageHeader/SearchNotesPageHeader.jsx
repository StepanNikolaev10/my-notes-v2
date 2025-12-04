import styles from './SearchNotesPageHeader.module.scss';

const SearchNotesPageHeader = () => {
  return (
    <header className={styles.searchNotesPageHeader}>
      <button className={styles.backBtn}></button>
      <input className={styles.searchInput} type="text" placeholder='Search notes'/>
    </header>
  )
}
export default SearchNotesPageHeader