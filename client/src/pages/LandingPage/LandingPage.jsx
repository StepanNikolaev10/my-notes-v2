import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageMain from '../../components/LandingPage/Containers/LandingPageMain/LandingPageMain';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <NotAuthorizedHeader/>
      <LandingPageMain/>
    </div>
  );
};

export default LandingPage;