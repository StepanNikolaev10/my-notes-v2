import styles from './SubmitFormBtn.module.scss';

const SubmitFormBtn = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.submitFormBtn} type="submit">{children}</button>;
};
export default SubmitFormBtn;
