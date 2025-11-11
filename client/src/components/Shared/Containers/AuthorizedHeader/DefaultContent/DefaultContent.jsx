import AppName from '/src/components/Shared/UI/AppName/AppName';
import styles from './DefaultContent.module.scss';

const DefaultContent = () => {
  return (
    <div className={styles.defaultContent}>
      <div className={styles.colLeft}>
        <AppName/>
      </div>
      <div className={styles.colCenter}></div>
      <div className={styles.colRight}>
        
      </div>
    </div>
  )
}
export default DefaultContent;