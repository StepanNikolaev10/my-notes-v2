import NotAuthorizedHeader from '../../components/Shared/NotAuthorizedHeader/NotAuthorizedHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageMain from '../../components/LandingPage/LandingPageMain/LandingPageMain';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <NotAuthorizedHeader/>
      <LandingPageMain/>
    </div>
  );
};

export default LandingPage;