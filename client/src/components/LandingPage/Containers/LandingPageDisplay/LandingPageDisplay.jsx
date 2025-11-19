import styles from './LandingPageDisplay.module.scss';
import { Link } from 'react-router-dom';
const LandingPageDisplay = () => {
  return (
    <div className={styles.landingPageDisplay}>
      <div className={styles.content}>
        <h1>Stay organized with My Notes</h1>
        <p className={styles.subtitle}>
          Keep track of your tasks and ideas in one place
        </p>
        <Link to={'/sign-up'} className={styles.button}>
          Get started
        </Link>
      </div>
    </div>
  )
}
export default LandingPageDisplay;