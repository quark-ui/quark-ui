/**
 * DatePane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import classnames from 'classnames';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import injectSheet from 'react-jss';
import styles from '../style';
import Icon from '../../icon';

@injectSheet(styles)
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
    const { classes } = this.props;
    const weekdays = moment.weekdaysMin();
    return (
      <div className={classes.datePicker_weekTitle}>
        {
          weekdays.map(w => (
            <div className={classes.datePicker__weekTitleGrid} key={w}>{w}</div>
          ))
        }
      </div>
    );
  }

  renderPaneHead() {
    const { classes, date, showYearPane, showMonthPane } = this.props;
    return (
      <div className={classes.datePicker__datePaneHead}>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleSubtractYear}>
          <Icon name="double-arrow-left" size={14} />
        </button>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleSubtractMonth}>
          <Icon name="arrow-left" size={14} />
        </button>
        <div className={classes.datePicker__headJump}>
          <button className={classes.datePicker__headJumpBtn} onClick={showMonthPane}>{date.format('MMM')}</button>
          <button className={classes.datePicker__headJumpBtn} onClick={showYearPane}>{date.format('YYYY')}</button>
        </div>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleAddMonth}>
          <Icon name="arrow-right" size={14} />
        </button>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleAddYear}>
          <Icon name="double-arrow-right" size={14} />
        </button>
      </div>
    );
  }

  renderWeekDays() {
    const { classes, date, disabledDate, inRange, alwaysShowEqualWeeks } = this.props;
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
          className: classnames(classes.datePicker__dayGrid, classes['datePicker__dayGrid--lastMonth']),
          onClick: this.handleClickDate.bind(this, moveYear, month - 1, dateNum),
        });
      } else if (i >= lastDayIndex) {
        // next month
        dateNum = moveDate.date();
        assign(gridProps, {
          className: classnames(classes.datePicker__dayGrid, classes['datePicker__dayGrid--nextMonth']),
          onClick: this.handleClickDate.bind(this, moveYear, month + 1, dateNum),
        });
      } else {
        // this month
        dateNum = i + 1;
        const disabled = disabledDate && disabledDate(moveDate);
        assign(gridProps, {
          className: classnames(
            classes.datePicker__dayGrid,
            classes['datePicker__dayGrid--curMonth'],
            {
              [classes['datePicker__dayGrid--active']]: dateNum === curDate && !disabled,
              [classes['datePicker__dayGrid--disabled']]: disabled,
              [classes['datePicker__dayGrid--range']]: inRange && inRange(moveDate),
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
        <div key={r} className={classes.datePicker__weekRow}>{w}</div>
      ))
    );
  }

  render() {
    const { className, classes } = this.props;
    return (
      <div className={classnames(className, classes.datePicker__picker, classes.datePicker__datePane)}>
        {this.renderPaneHead()}
        {this.renderWeekTitle()}
        {this.renderWeekDays()}
      </div>
    );
  }
}

export default DatePane;
