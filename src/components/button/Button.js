/**
 * Button Component
 * @author ryan.bian
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
// import styles from './Button.css';

const styles = theme => ({
  base: {
    borderStyle: 'solid',
    borderWidth: 1,
    outline: '0 none',
    cursor: 'pointer',
  },
  small: {
    padding: '0 8px',
    height: 26,
    borderRadius: 3,
    fontSize: 14,
    lineHeight: '24px',
  },
  normal: {
    padding: '0 12px',
    height: 34,
    borderRadius: 3,
    fontSize: 14,
    lineHeight: '32px',
  },
  large: {
    padding: '0 14px',
    height: 40,
    borderRadius: 3,
    fontSize: 16,
    lineHeight: '38px',
  },
  primary: {
    backgroundColor: theme['brand-primary'],
    borderColor: theme['brand-primary'],
    color: theme['neutral-color'],
    '&:hover': {
      backgroundColor: theme['brand-primary-light'],
      borderColor: theme['brand-primary-light'],
    },
    '&:active': {
      backgroundColor: theme['brand-primary-dark'],
      borderColor: theme['brand-primary-dark'],
    },
  },
  secondary: {
    backgroundColor: theme['neutral-color'],
    borderColor: theme['brand-primary'],
    color: theme['brand-primary'],
    '&:hover': {
      borderColor: theme['brand-primary-light'],
      color: theme['brand-primary-light'],
    },
    '&:active': {
      borderColor: theme['brand-primary-dark'],
      color: theme['brand-primary-dark'],
    },
  },
  dashed: {
    backgroundColor: theme['neutral-color'],
    borderColor: theme['brand-primary'],
    borderStyle: 'dashed',
    color: theme['brand-primary'],
    '&:hover': {
      borderColor: theme['brand-primary-light'],
      color: theme['brand-primary-light'],
    },
    '&:active': {
      borderColor: theme['brand-primary-dark'],
      color: theme['brand-primary-dark'],
    },
  },
  danger: {
    backgroundColor: theme['neutral-color'],
    borderColor: theme.borderColor,
    color: theme['fail-color'],
    '&:hover': {
      backgroundColor: theme['fail-color'],
      borderColor: theme['fail-color'],
      color: theme['neutral-color'],
    },
    '&:active': {
      backgroundColor: '#bd3a2c',
      borderColor: '#bd3a2c',
      color: theme['neutral-color'],
    },
  },
  disabled: {
    background: '#f5f5f5',
    borderColor: theme['border-color'],
    color: '#999',
    cursor: 'not-allowed',
  },
  'button--primary': {
    composes: ['$base', '$primary'],
  },
  'button--secondary': {
    composes: ['$base', '$secondary'],
  },
  'button--dashed': {
    composes: ['$base', '$dashed'],
  },
  'button--danger': {
    composes: ['$base', '$danger'],
  },
  'button--disabled': {
    composes: ['$base', '$disabled'],
  },
  'button--large': {
    composes: ['$large'],
  },
  'button--normal': {
    composes: ['$normal'],
  },
  'button--small': {
    composes: ['$small'],
  },
});

@injectSheet(styles)
class Button extends PureComponent {
  static displayName = 'Button'

  static defaultProps = {
    type: 'primary',
    size: 'normal',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'dashed',
      'danger',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
  }

  render() {
    const {
      classes, children, type, size, disabled, ...otherProps 
    } = this.props;
    const btnProps = {
      ...otherProps,
      className: classnames(
        classes[`button--${disabled ? 'disabled' : type}`],
        classes[`button--${size}`],
      ),
    };
    return (
      <button {...btnProps}>{children}</button>
    );
  }
}

export default Button;
