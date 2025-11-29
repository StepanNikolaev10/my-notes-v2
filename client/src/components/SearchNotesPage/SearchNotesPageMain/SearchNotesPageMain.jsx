import styles from './SearchNotesPageMain.module.scss';

const SearchNotesPageMain = () => {
  return (
    <div className={styles.searchNotesPageMain}>
      <div className={styles.searchVariants}>
        <div className={styles.searchByColor}>
          <div className={styles.searchVariantsTitle}></div>
          <div className={styles.colors}></div>
        </div>
      </div>
    </div>
  )
}
export default SearchNotesPageMain