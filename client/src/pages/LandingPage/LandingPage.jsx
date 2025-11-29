import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageMain from '../../components/LandingPage/LandingPageMain/LandingPageMain';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <NotAuthPagesHeader/>
      <LandingPageMain/>
    </div>
  );
};

export default LandingPage;