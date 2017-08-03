/**
 * Line Component
 * @author ryan.bian
 */
import classnames from 'classnames';
import { defaultProps, propTypes } from './propDefine';
import Icon from '../icon';
import styles from './Progress.css';

const Line = ({ percent, status, size, showInfo }) => {
  console.log(showInfo);


  const lineProps = {
    className: classnames(
      styles[`progress__${showInfo ? 'showinfo' : 'line'}`],
      styles[`progress__line--${size}Size`],
      styles[`progress__line--${status}`],
    ),
  };
  const innerProps = {
    className: styles['progress__lineInner'],
    style: {
      width: `${percent}%`,
    },
  };
  let indicator;
  if (showInfo) {
    switch (status) {
      case 'success':
        indicator = <Icon name="success" size={14} />;
        break;
      case 'exception':
        indicator = <Icon name="error" size={14} />;
        break;
      case 'pause':
        indicator = <Icon name="clock" size={14} />;
        break;
      default:
        indicator = `${percent}%`;
        break;
    }
  }
  return (
    <div {...lineProps}>
      <div className={styles.progress__lineOuter}>
        <div {...innerProps} />
      </div>
      {
        showInfo ?
          <span className={styles.progress__lineIndicator}>
            {indicator}
          </span>
        : null
      }
    </div>
  );
};

Line.defaultProps = defaultProps;

Line.propTypes = propTypes;

export default Line;
