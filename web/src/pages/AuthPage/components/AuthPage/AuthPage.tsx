import NotAuthPagesHeader from '../../../../components/NotAuthPagesHeader/NotAuthPagesHeader';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';

const AuthPage = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod: 'sign-in' | 'sign-up';
}) => {
  return (
    <>
      <NotAuthPagesHeader selectedAuthMethod={selectedAuthMethod} />
      <main className={styles.main}>
        {selectedAuthMethod === 'sign-in' ? <SignInForm /> : <SignUpForm />}
      </main>
    </>
  );
};
export default AuthPage;
