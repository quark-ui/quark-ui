import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';

export const defaultProps = {
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  format: 'YYYY-MM-DD',
  onChange() {},
  fieldSize: 'normal',
  fieldWidth: null,
};

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
export const propTypes = {
  value: PropTypes.oneOfType([
    momentPropTypes.momentObj,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    momentPropTypes.momentObj,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func,
  fieldSize: PropTypes.oneOf([
    'normal',
    'large',
    'small',
  ]),
  fieldWidth: PropTypes.number,
};
