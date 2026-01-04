import AuthFormCard from '../AuthFormCard/AuthFormCard';
import styles from './AuthPageMain.module.scss';
import type { AuthPageVariants } from '../../../types/AuthPageTypes';

const AuthPageMain: React.FC<AuthPageVariants> = ({ pageVariant }) => {
    return (
      <main className={styles.authPageMain}>
        <AuthFormCard pageVariant={pageVariant}/>
      </main>
    )
}

export default AuthPageMain;