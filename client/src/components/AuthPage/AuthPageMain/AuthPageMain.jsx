import AuthFormCard from '../AuthFormCard/AuthFormCard';
import styles from './AuthPageMain.module.scss';

const AuthPageMain = ({ pageVariant }) => {
    return (
      <main className={styles.authPageMain}>
        <AuthFormCard pageVariant={pageVariant}/>
      </main>
    )
}

export default AuthPageMain;