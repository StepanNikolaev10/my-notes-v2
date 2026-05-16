import styles from './LandingPage.module.scss';
import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import LandingContent from '../LandingContent/LandingContent';

const LandingPage = () => {
  return (
    <>
      <NotAuthPagesHeader />
      <main className={styles.main}>
        <LandingContent />
      </main>
    </>
  );
};

export default LandingPage;
