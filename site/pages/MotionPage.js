import Layout from '../layouts/Layout';
import styles from '../Site.css';

const MotionPage = props => (
  <Layout {...props}>
    <main className={styles.main}>
      <div className={styles.content}>
        xxx
      </div>
      <aside className={styles.aside}>
        xxx
      </aside>
    </main>
  </Layout>
);

export default MotionPage;
