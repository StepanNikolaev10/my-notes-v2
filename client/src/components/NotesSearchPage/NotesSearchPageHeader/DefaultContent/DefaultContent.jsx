import styles from './DefaultContent.module.scss';
import { Link } from 'react-router-dom';
const DefaultContent = ({ searchQuery, onSetSearchQuery }) => {
  return (
    <div className={styles.defaultContent}>
      <Link className={styles.backBtn} to={'/'}>Back</Link>
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