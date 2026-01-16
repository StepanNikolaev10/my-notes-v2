import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  )
}
export default PageWrapper;