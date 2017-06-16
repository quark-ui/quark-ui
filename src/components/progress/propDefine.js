import PropTypes from 'prop-types';

export const defaultProps = {
  percent: 0,
  status: 'normal',
  size: 'normal',
  showInfo: true,
};

export const propTypes = {
  percent: PropTypes.number,
  status: PropTypes.oneOf([
    'normal',
    'exception',
    'pause',
    'success',
  ]),
  size: PropTypes.oneOf([
    'normal',
    'mini',
  ]),
  showInfo: PropTypes.bool,
};
