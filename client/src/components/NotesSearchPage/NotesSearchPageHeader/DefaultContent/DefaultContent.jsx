import styles from './DefaultContent.module.scss';

const DefaultContent = ({ searchQuery, onSetSearchQuery }) => {
  return (
    <div className={styles.defaultContent}>
      <button className={styles.backBtn}></button>
      <input 
        value={searchQuery}
        onChange={(e) => onSetSearchQuery(e.target.value)}
        className={styles.searchInput}
        type="text" 
        placeholder='Search notes' 
        autoFocus
      />
    </div>
  )
}
export default DefaultContent;