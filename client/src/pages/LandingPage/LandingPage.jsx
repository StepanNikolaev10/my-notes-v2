import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageDisplay from '../../components/LandingPage/Containers/LandingPageDisplay/LandingPageDisplay';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <NotAuthorizedHeader/>
      <LandingPageDisplay/>
    </div>
  );
};

export default LandingPage;