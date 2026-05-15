import { Link } from 'react-router-dom';
import styles from './LandingContent.module.scss';

const LandingContent = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>Stay organized with My Notes</h1>
        <p className={styles.subtitle}>
          Keep track of your tasks and ideas in one place
        </p>
        <Link to={'/sign-up'} className={styles.button}>
          Get started
        </Link>
      </div>
    </>
  );
};

export default LandingContent;
