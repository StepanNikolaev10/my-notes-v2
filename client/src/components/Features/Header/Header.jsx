import AppName from '../../UI/AppName/AppName';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.colLeft}>
        <AppName/>
      </div>
      <div className={styles.colCenter}></div>
      <div className={styles.colRight}>
        
      </div>
    </div>
  )
}
export default Header