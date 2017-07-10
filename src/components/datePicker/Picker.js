/**
 * Picker Component
 * @author ryan.bian
 */
import { createElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import assign from 'object-assign';
import partialRight from 'lodash/partialRight';
import Trigger from '../trigger';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';
import DatePane from './panes/DatePane';
import MonthPane from './panes/MonthPane';
import YearPane from './panes/YearPane';
import DecadePane from './panes/DecadePane';

@CSSModules(styles, { allowMultiple })
class Picker extends PureComponent {

  static displayName = 'Picker'

  static defaultProps = {
    date: moment(),
    rangeDate: [moment(), moment()],
    type: 'date',
    changeDate() {},
    disabledDate() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    date: momentPropTypes.momentObj,
    rangeDate: PropTypes.arrayOf(momentPropTypes.momentObj),
    /**
     * 'date' for datePicker
     * 'month' for monthPicker
     * 'range' for rangePicker
     */
    type: PropTypes.oneOf(['date', 'month', 'range']),
    changeDate: PropTypes.func,
    disabledDate: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = assign({
      currentPane: props.type,
      currentRangePane: ['date', 'date'],
      decadeYear: undefined,
      decadeYears: [undefined, undefined],
    }, this.getDateFromProps(props));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getDateFromProps(nextProps));
  }

  onSetDecade = (decadeYear, e, nativeEvent, position) => {
    if (this.props.type === 'range') {
      const currentRangePane = [...this.state.currentRangePane];
      const decadeYears = [...this.state.decadeYears];
      currentRangePane[position] = 'decade';
      decadeYears[position] = decadeYear;
      this.setState({
        currentRangePane,
        decadeYears,
      });
    } else {
      this.setState({
        currentPane: 'decade',
        decadeYear,
      });
    }
  }

  onSetYear = (...args) => {
    if (this.props.type === 'range') {
      const currentRangePane = [...this.state.currentRangePane];
      currentRangePane[args[args.length - 1]] = 'year';
      this.setState({
        currentRangePane,
      });
    } else {
      this.setState({
        currentPane: 'year',
      });
    }
  }

  onSetMonth = (...args) => {
    if (this.props.type === 'range') {
      const currentRangePane = [...this.state.currentRangePane];
      currentRangePane[args[args.length - 1]] = 'month';
      this.setState({
        currentRangePane,
      });
    } else {
      this.setState({
        currentPane: 'month',
      });
    }
  }

  onSetDate = (...args) => {
    let currentRangePane;
    switch (this.props.type) {
      case 'range':
        currentRangePane = [...this.state.currentRangePane];
        currentRangePane[args[args.length - 1]] = 'date';
        this.setState({
          currentRangePane,
        });
        break;
      case 'month':
        break;
      case 'date':
      default:
        this.setState({
          currentPane: 'date',
        });
        break;
    }
  }

  getDateFromProps(props) {
    if (props.type === 'range') {
      return {
        date: null,
        rangeDate: props.rangeDate.map(date => moment(date)),
      };
    }
    return {
      date: moment(props.date),
      rangeDate: null,
    };
  }

  changeDate = (year, month, date, position) => {
    const d = {
      year,
      month,
      date,
    };
    if (this.props.type === 'range') {
      this.props.changeDate(d, position);
    } else {
      this.props.changeDate(d);
    }
  }

  changeMonth = (month, position) => {
    switch (this.props.type) {
      case 'range':
        this.props.changeDate({
          month,
        }, position);
        break;
      case 'month':
        this.props.changeDate({
          month,
        });
        break;
      case 'date':
      default:
        this.state.date.set('month', month);
        break;
    }
  }

  changeYear = (year, position) => {
    if (this.props.type === 'range') {
      this.state.rangeDate[position].set('year', year);
    } else {
      this.state.date.set('year', year);
    }
  }

  manipulateDate = (action, value, type, position) => {
    if (this.props.type === 'range') {
      const rangeDate = [...this.state.rangeDate];
      rangeDate[position] = moment(rangeDate[position])[action](value, type);
      this.setState({
        rangeDate,
      });
    } else {
      this.setState({
        date: moment(this.state.date)[action](value, type),
      });
    }
  }

  renderPane(date, currentPane, decadeYear, position, className = '') {
    const { type, rangeDate } = this.props;
    const paneProps = {
      date,
      manipulateDate: partialRight(this.manipulateDate, position),
    };
    let pane;
    let disabledDate;
    switch (currentPane) {
      case 'date':
      default:
        if (type === 'range') {
          disabledDate = current => (position === 1 ?
            current.isBefore(rangeDate[0])
            : current.isAfter(rangeDate[1]));
          assign(paneProps, {
            inRange: current => current.isBetween(rangeDate[0], rangeDate[1]),
            alwaysShowEqualWeeks: true,
          });
        } else {
          disabledDate = this.props.disabledDate;
        }
        assign(paneProps, {
          changeDate: partialRight(this.changeDate, position),
          showYearPane: partialRight(this.onSetYear, position),
          showMonthPane: partialRight(this.onSetMonth, position),
          disabledDate,
          className,
        });
        pane = DatePane;
        break;
      case 'month':
        assign(paneProps, {
          changeMonth: partialRight(this.changeMonth, position),
          showYearPane: partialRight(this.onSetYear, position),
          showDatePane: partialRight(this.onSetDate, position),
        });
        pane = MonthPane;
        break;
      case 'year':
        assign(paneProps, {
          changeYear: partialRight(this.changeYear, position),
          showMonthPane: partialRight(this.onSetMonth, position),
          showDecadePane: partialRight(this.onSetDecade, position),
        });
        pane = YearPane;
        break;
      case 'decade':
        assign(paneProps, {
          changeYear: partialRight(this.changeYear, position),
          showYearPane: partialRight(this.onSetYear, position),
          decadeYear,
        });
        pane = DecadePane;
        break;
    }
    return createElement(pane, paneProps);
  }

  render() {
    const { children, type } = this.props;
    const { date, rangeDate, decadeYear, decadeYears, currentPane, currentRangePane } = this.state;
    let popup;
    if (type === 'range') {
      popup = (
        <div className={styles.rangePicker}>
          {this.renderPane(rangeDate[0], currentRangePane[0], decadeYears[0], 0, styles['picker--start'])}
          {this.renderPane(rangeDate[1], currentRangePane[1], decadeYears[1], 1, styles['picker--end'])}
        </div>
      );
    } else {
      popup = this.renderPane(date, currentPane, decadeYear);
    }
    return (
      <Trigger
        popup={popup}
        action={'click'}
      >
        {children}
      </Trigger>
    );
  }
}

export default Picker;
