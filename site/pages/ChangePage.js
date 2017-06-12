import marked from 'meta-marked';
import classnames from 'classnames';
import styles from '../Site.css';
import componentStyles from '../partials/Component.css';

import CHANGES from '!raw-loader!../../CHANGE.md';

import Layout from '../layouts/Layout';

const ChangePage = () => (
  <Layout {...this.props}>
    <main className={styles.main}>
      <article
        className={classnames(
          styles.ChangePage,
          componentStyles.Component__doc,
        )}
        dangerouslySetInnerHTML={{ __html: marked(CHANGES).html }}
      />
    </main>
  </Layout>
);

export default ChangePage;
