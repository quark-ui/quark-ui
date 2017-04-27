/**
 * DatePane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import { allowMultiple } from '../../../constants';
import styles from '../DatePicker.css';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';

@CSSModules(styles, { allowMultiple })
class DatePane extends PureComponent {

  static displayName = 'DatePane'

  static defaultProps = {
    date: moment(),
    showYearPane() {},
    showMonthPane() {},
    changeDate() {},
    manipulateDate() {},
    disabledDate() {},
    inRange: undefined,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    date: momentPropTypes.momentObj,
    showYearPane: PropTypes.func,
    showMonthPane: PropTypes.func,
    changeDate: PropTypes.func,
    manipulateDate: PropTypes.func,
    disabledDate: PropTypes.func,
    inRange: PropTypes.func,
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
        <button onClick={this.handleSubtractYear}>&#9664;</button>
        <button onClick={this.handleSubtractMonth}>&#9664;</button>
        <button onClick={showMonthPane}>{date.format('MMM')}</button>
        <button onClick={showYearPane}>{date.format('YYYY')}</button>
        <button onClick={this.handleAddMonth}>&#9654;</button>
        <button onClick={this.handleAddYear}>&#9654;</button>
      </div>
    );
  }

  renderWeekDays() {
    const { date, disabledDate, inRange } = this.props;
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
              'datePicker__dayGrid--active': dateNum === curDate,
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
        week = [];
        if (i > lastDayIndex) break;
      }
      moveDate.add(1, 'd');
      i += 1;
    }
    return (
      weeks.map((w, k) => (
        <div key={k} styleName="datePicker__weekRow">{w}</div>
      ))
    );
  }

  render() {
    return (
      <div styleName="datePicker__picker datePicker__datePane">
        {this.renderPaneHead()}
        {this.renderWeekTitle()}
        {this.renderWeekDays()}
      </div>
    );
  }
}

export default DatePane;
