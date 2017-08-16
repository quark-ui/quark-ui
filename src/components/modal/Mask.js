/**
 * Mask Component
 * @author ryan.bian
 */
import PropTypes from 'prop-types';
import styles from './Modal.css';

const Mask = ({ visible, children }) => (
  <div className={styles[`mask${visible ? '--visible' : ''}`]}>
    {children}
  </div>
);

Mask.defaultProps = {
  visible: false,
};
Mask.propTypes = {
  visible: PropTypes.bool,
};

export default Mask;
