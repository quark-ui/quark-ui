import classnames from 'classnames';
import styles from '../Site.css';
import componentStyles from '../partials/Component.css';

import Layout from '../layouts/Layout';

const DocPage = ({ html }) => (
  <Layout {...this.props}>
    <main className={styles.main}>
      <article
        className={classnames(
          styles.DocPage,
          'markdown-block',
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  </Layout>
);

export default DocPage;
