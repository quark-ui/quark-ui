/**
 * Tabs Component
 * @author yan
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Panel = ({
  className,
  children,
}) => (
  <div className={styles[className]}>
    {children}
  </div>
);

Panel.defaultProps = {
  className: '',
};
Panel.propTypes = {
  className: PropTypes.string,
};

export default Panel;
