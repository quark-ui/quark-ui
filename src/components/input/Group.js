/**
 * Input Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
// import styles from './Input.css';

const styles = theme => ({
  input__group: {
    position: 'relative',
    display: 'table',
    borderCollapse: 'separate',
    borderSpacing: 0,
    width: '100%',
    '& > input': {
      display: 'inline-block',
      float: 'left',
      flex: '0 0 auto',
      margin: 0,
      padding: 0,
    },
  },
});

@injectSheet(styles)
export default class Group extends PureComponent {
  static displayName = 'Group';

  static defaultProps = {
    size: 'normal',
  };

  static propTypes = {
    style: PropTypes.CSSProperties,
    size: PropTypes.oneOf(['normal', 'large', 'small']),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    const { classes, size, ...otherProps } = props;
    const btnProps = {
      ...otherProps,
      className: classes.input__group,
    };

    return <div {...btnProps}>{props.children}</div>;
  }
}
