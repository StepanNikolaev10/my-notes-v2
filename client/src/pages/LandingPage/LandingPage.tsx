import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageMain from '../../components/LandingPage/LandingPageMain/LandingPageMain';
import type NotAuthPagesVariants from '../../types/NotAuthPagesVariants';

const LandingPage:React.FC<NotAuthPagesVariants> = ({ pageVariant }) => {

  return (
    <div className={styles.landingPage}>
      <NotAuthPagesHeader pageVariant={pageVariant}/>
      <LandingPageMain/>
    </div>
  );
};

export default LandingPage;