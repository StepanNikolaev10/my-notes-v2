import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import styles from './LandingPage.module.scss'; 
import LandingPageMain from '../../components/LandingPage/LandingPageMain/LandingPageMain';
import type { NotAuthPageVariants } from '../../types/ui';

interface LandingPageProps {
  pageVariant: NotAuthPageVariants
}

const LandingPage = ({ pageVariant }: LandingPageProps) => {
  return (
    <div className={styles.landingPage}>
      <NotAuthPagesHeader pageVariant={pageVariant}/>
      <LandingPageMain/>
    </div>
  );
};

export default LandingPage;