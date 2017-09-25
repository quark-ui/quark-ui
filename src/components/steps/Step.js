/**
 * Step Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import styles from './Steps.css';

class Step extends PureComponent {

  static displayName = 'Step'

  static defaultProps = {
    status: '',
    title: '',
    description: '',
    stepNumber: '',
    itemWidth: 0,
    adjustMarginRight: 0,
    isFinishIcon: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    stepNumber: PropTypes.string,
    itemWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    adjustMarginRight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    isFinishIcon: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      status = 'wait',
      description,
      title,
      stepNumber,
      itemWidth,
      adjustMarginRight,
      isFinishIcon,
      ...restProps
    } = this.props;

    let iconNode;

    if (status === 'finish' && isFinishIcon) {
      iconNode = <span className={styles['steps--icon']}>{<Icon name="check" size={14} />}</span>;
    } else {
      iconNode = <span className={styles['steps--icon']}>{stepNumber}</span>;
    }

    const classString = classnames({
      [styles['steps--item']]: true,
      [styles[`steps--item__${status}`]]: true,
    });

    return (
      <div
        {...restProps}
        className={classString}
        style={{ width: itemWidth, marginRight: adjustMarginRight }}
      >
        <div className={styles['steps--tail']}><i /></div>
        <div className={styles['steps--step']}>
          <div className={styles['steps--head']}>
            <div className={styles['steps--headinner']}>{iconNode}</div>
          </div>
          <div className={styles['steps--main']}>
            <div className={styles['steps--title']}>{title}</div>
            {description ? <div className={styles['steps--description']}>{description}</div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Step;
