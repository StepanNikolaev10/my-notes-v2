import AuthFormCard from '../AuthFormCard/AuthFormCard';
import styles from './AuthPageMain.module.scss';
import type { NotAuthPageVariants } from '../../../types/sharedProps';

interface AuthPageMainProps {
  pageVariant: NotAuthPageVariants
}

const AuthPageMain = ({ pageVariant }: AuthPageMainProps) => {
    return (
      <main className={styles.authPageMain}>
        <AuthFormCard pageVariant={pageVariant}/>
      </main>
    )
}

export default AuthPageMain;