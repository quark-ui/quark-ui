/**
 * Progress Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import Icon from '../icon/Icon';
import styles from './Progress.css';

// const statusColorMap = {
//   normal: '#108ee9',
//   exception: '#ff5500',
//   success: '#87d068',
// };

@CSSModules(styles, { allowMultiple })
class Progress extends PureComponent {

  static displayName = 'Progress'

  static Line;
  static Circle;

  static defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    strokeWidth: 10,
    width: 0,
    // trailColor: '#f3f3f3',
    status: 'normal',
    format: null,
    gapDegree: 0,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    // trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const prefixCls = 'progress';
    let styleName = `${prefixCls}--line`;

    const props = this.props;
    const {
      className, percent = 0, status, format, // trailColor,
      type, strokeWidth, width, showInfo, gapDegree, gapPosition, ...restProps
    } = props;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : (status || 'normal');
    let progressInfo;
    let progress;
    const textFormatter = format || (percentNumber => `${percentNumber}%`);

    if (showInfo) {
      let text;
      // const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
      if (progressStatus === 'exception') {
        text = format ? textFormatter(percent) : <Icon size={14} name={'error'} color='red' />;
      } else if (progressStatus === 'success') {
        text = format ? textFormatter(percent) : <Icon size={14} name={'success'} color='green' />;
      } else {
        text = textFormatter(percent);
      }
      progressInfo = <span styleName={`${prefixCls}--text`}>{text}</span>;
    }

    if (type === 'line') {
      styleName = `${prefixCls}--line`;
      const percentStyle = {
        width: `${percent}%`,
        height: strokeWidth || 10,
      };
      progress = (
        <div>
          <div styleName={`${prefixCls}--outer`}>
            <div styleName={`${prefixCls}--inner`}>
              <div styleName={`${prefixCls}--bg`} style={percentStyle} />
            </div>
          </div>
          {progressInfo}
        </div>
      );
    } else if (type === 'circle' || type === 'dashboard') {
      /* const circleSize = width || 132;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.16 + 6,
      };
      const circleWidth = strokeWidth || 6;
      const gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
      const gapDeg = gapDegree || type === 'dashboard' && 75;
      progress = (
        <div className={`${prefixCls}-inner`} style={circleStyle}>
          <Circle
            percent={percent}
            strokeWidth={circleWidth}
            trailWidth={circleWidth}
            strokeColor={statusColorMap[progressStatus]}
            trailColor={trailColor}
            prefixCls={prefixCls}
            gapDegree={gapDeg}
            gapPosition={gapPos}
          />
          {progressInfo}
        </div>
      );*/
    }

    // const classString = classNames(prefixCls, {
    //   [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: true,
    //   [`${prefixCls}-status-${progressStatus}`]: true,
    //   [`${prefixCls}-show-info`]: showInfo,
    // }, className);


    let styleNameStr = `${prefixCls} ${styleName}`;

    if (showInfo) {
      styleNameStr = styleNameStr.concat(` ${`${prefixCls}--show-info`}`);
    }

    styleNameStr = styleNameStr.concat(` ${`${prefixCls}--status-${progressStatus}`}`);


    return (
      <div {...restProps} styleName={styleNameStr}>
        {progress}
      </div>
    );
  }
}

export default Progress;
