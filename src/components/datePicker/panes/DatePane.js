/**
 * DatePane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import Icon from '../../icon';
import { allowMultiple } from '../../../constants';
import styles from '../DatePicker.css';

@CSSModules(styles, { allowMultiple })
class DatePane extends PureComponent {

  static displayName = 'DatePane'

  static defaultProps = {
    className: '',
    date: moment(),
    showYearPane() {},
    showMonthPane() {},
    changeDate() {},
    manipulateDate() {},
    disabledDate() {},
    inRange: undefined,
    alwaysShowEqualWeeks: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    className: PropTypes.string,
    date: momentPropTypes.momentObj,
    showYearPane: PropTypes.func,
    showMonthPane: PropTypes.func,
    changeDate: PropTypes.func,
    manipulateDate: PropTypes.func,
    disabledDate: PropTypes.func,
    inRange: PropTypes.func,
    alwaysShowEqualWeeks: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClickDate(nextYear, nextMonth, nextDate) {
    this.props.changeDate(nextYear, nextMonth, nextDate);
  }
  handleSubtractYear = () => {
    this.props.manipulateDate('subtract', 1, 'Y');
  }
  handleSubtractMonth = () => {
    this.props.manipulateDate('subtract', 1, 'M');
  }
  handleAddYear = () => {
    this.props.manipulateDate('add', 1, 'Y');
  }
  handleAddMonth = () => {
    this.props.manipulateDate('add', 1, 'M');
  }

  renderWeekTitle() {
    const weekdays = moment.weekdaysMin();
    return (
      <div styleName="datePicker_weekTitle">
        {
          weekdays.map(w => (
            <div styleName="datePicker__weekTitleGrid" key={w}>{w}</div>
          ))
        }
      </div>
    );
  }

  renderPaneHead() {
    const { date, showYearPane, showMonthPane } = this.props;
    return (
      <div styleName="datePicker__datePaneHead">
        <button styleName="datePicker__headControlBtn" onClick={this.handleSubtractYear}>
          <Icon name="double-arrow-left" size={14} />
        </button>
        <button styleName="datePicker__headControlBtn" onClick={this.handleSubtractMonth}>
          <Icon name="arrow-left" size={14} />
        </button>
        <div styleName="datePicker__headJump">
          <button styleName="datePicker__headJumpBtn" onClick={showMonthPane}>{date.format('MMM')}</button>
          <button styleName="datePicker__headJumpBtn" onClick={showYearPane}>{date.format('YYYY')}</button>
        </div>
        <button styleName="datePicker__headControlBtn" onClick={this.handleAddMonth}>
          <Icon name="arrow-right" size={14} />
        </button>
        <button styleName="datePicker__headControlBtn" onClick={this.handleAddYear}>
          <Icon name="double-arrow-right" size={14} />
        </button>
      </div>
    );
  }

  renderWeekDays() {
    const { date, disabledDate, inRange, alwaysShowEqualWeeks } = this.props;
    const curDate = date.date();
    const firstDayOfMonth = moment(date).startOf('month');
    const lastDayOfMonth = moment(date).endOf('month');
    const start = firstDayOfMonth.weekday();
    const moveDate = moment(firstDayOfMonth).subtract(start, 'd');
    const lastDayIndex = lastDayOfMonth.date();
    const month = date.month();
    const weeks = [];
    let i = -start;
    let week = [];
    while (true) {
      const gridProps = {
        key: i,
      };
      let dateNum;
      const moveYear = date.year();
      if (i < 0) {
        // last month
        dateNum = moveDate.date();
        assign(gridProps, {
          styleName: 'datePicker__dayGrid datePicker__dayGrid--lastMonth',
          onClick: this.handleClickDate.bind(this, moveYear, month - 1, dateNum),
        });
      } else if (i >= lastDayIndex) {
        // next month
        dateNum = moveDate.date();
        assign(gridProps, {
          styleName: 'datePicker__dayGrid datePicker__dayGrid--nextMonth',
          onClick: this.handleClickDate.bind(this, moveYear, month + 1, dateNum),
        });
      } else {
        // this month
        dateNum = i + 1;
        const disabled = disabledDate && disabledDate(moveDate);
        assign(gridProps, {
          styleName: classnames(
            'datePicker__dayGrid',
            'datePicker__dayGrid--curMonth',
            {
              'datePicker__dayGrid--active': dateNum === curDate && !disabled,
              'datePicker__dayGrid--disabled': disabled,
              'datePicker__dayGrid--range': inRange && inRange(moveDate),
            },
          ),
          onClick: disabled ? null : this.handleClickDate.bind(this, moveYear, month, dateNum),
        });
      }
      week.push(<button {...gridProps}>{dateNum}</button>);
      if (week.length === 7) {
        weeks.push(week);
        if (i + 1 >= lastDayIndex) {
          if (!alwaysShowEqualWeeks || weeks.length >= 6) {
            break;
          }
        }
        week = [];
      }
      moveDate.add(1, 'd');
      i += 1;
    }
    return (
      weeks.map((w, r) => (
        <div key={r} styleName="datePicker__weekRow">{w}</div>
      ))
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div styleName="datePicker__picker datePicker__datePane" className={className}>
        {this.renderPaneHead()}
        {this.renderWeekTitle()}
        {this.renderWeekDays()}
      </div>
    );
  }
}

export default DatePane;
