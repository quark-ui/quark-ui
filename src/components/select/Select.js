/**
 * Select Component
 * @author heifade
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import Trigger from '../trigger/Trigger';
import classnames from 'classnames';
import styles from './Select.css';

export default class Select extends PureComponent {
  static displayName = 'Select';

  static defaultProps = {
    placeholder: '请选择',
    type: '',
    style: { width: 200 },
    disabled: false,
  };

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.any,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '11',
      text: '11-v'
    };
  }

  static childContextTypes = {
    childContext: PropTypes.any,
  };

  getChildContext = () => ({
    childContext: {
      setValue: this.setValue,
    },
  });

  setValue = (value, text) => {
    this.setState({
      value,
      text,
    });
  };

  remove = (e) => {
    if (e) {
      e.stopPropagation();
    }
    this.setState({
      value: '',
      text: '',
    });
  }

  render() {
    const { children, disabled } = this.props;
    const { width } = this.props.style;

    if (disabled) {
      return (
        <div className={styles.select} >
          <div className={classnames(styles.selection, styles.disabled)} style={{ width }}>
            {this.state.text}
            <Icon
              name="arrow-down"
              size={12}
              className={styles.selectionicon}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.select} >
        <Trigger
          action={'click'}
          popup={
            <div className={styles.dropdown} style={{ width }}>
              <ul>
                {children}
              </ul>
            </div>
          }
          placement={['tl', 'bl']}
          mouseLeaveDelay={100}
        >
          <div className={styles.selection} style={{ width }}>
            {this.state.text || <span className={styles.placeholder}>{this.props.placeholder}</span>}
            <Icon
              name={'arrow-down'}
              size={12}
              className={styles.selectionicon}
            />
            {
              this.state.value ? (
                <Icon
                  name="close"
                  size={12}
                  className={styles.selectionicon}
                  onClick={this.remove}
                />
              ) : ''
            }
          </div>
        </Trigger>
      </div>
    );
  }
}
