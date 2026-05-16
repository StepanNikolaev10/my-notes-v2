import styles from './AuthFormCard.module.scss';

const AuthFormCard = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.authFormCard}>{children}</div>;
};
export default AuthFormCard;
