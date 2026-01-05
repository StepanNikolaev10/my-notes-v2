import AuthFormCard from '../AuthFormCard/AuthFormCard';
import styles from './AuthPageMain.module.scss';
import type NotAuthPagesVariants from '../../../types/NotAuthPagesVariants';

const AuthPageMain = ({ pageVariant }:NotAuthPagesVariants) => {
    return (
      <main className={styles.authPageMain}>
        <AuthFormCard pageVariant={pageVariant}/>
      </main>
    )
}

export default AuthPageMain;