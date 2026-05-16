import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
  return (
    <FormCard>
      <form className={styles.signInForm}>
        <FormInput name="email" type="email" placeholder="Email address" />
        <FormInput name="password" type="password" placeholder="Password" />
        <SubmitFormBtn>Sign In</SubmitFormBtn>
      </form>
    </FormCard>
  );
};
export default SignInForm;
