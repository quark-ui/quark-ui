/**
 * MonthPane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import assign from 'object-assign';
import classnames from 'classnames';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import injectSheet from 'react-jss';
import styles from '../style';
import Icon from '../../icon';

@injectSheet(styles)
class MonthPane extends PureComponent {

  static displayName = 'MonthPane'

  static defaultProps = {
    className: '',
    date: moment(),
    showYearPane() {},
    showDatePane() {},
    changeMonth() {},
    manipulateDate() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    className: PropTypes.string,
    date: momentPropTypes.momentObj,
    showYearPane: PropTypes.func,
    showDatePane: PropTypes.func,
    changeMonth: PropTypes.func,
    manipulateDate: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChangeMonth(month) {
    this.props.changeMonth(month);
    this.props.showDatePane();
  }

  handleSubtractYear = () => {
    this.props.manipulateDate('subtract', 1, 'Y');
  }
  handleAddYear = () => {
    this.props.manipulateDate('add', 1, 'Y');
  }

  renderMonthHead() {
    const { classes, date, showYearPane } = this.props;
    return (
      <div className={classes.datePicker__monthPaneHead}>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleSubtractYear}>
          <Icon name="arrow-left" size={14} />
        </button>
        <button className={classes.datePicker__headJumpBtn} onClick={showYearPane}>{date.format('YYYY')}</button>
        <button className={classes.datePicker__headControlBtn} onClick={this.handleAddYear}>
          <Icon name="arrow-right" size={14} />
        </button>
      </div>
    );
  }

  renderMonths() {
    const { classes } = this.props;
    const months = moment.monthsShort();
    const curMonth = this.props.date.format('MMM');
    return (
      <div className={classes.datePicker__monthBody}>
        {
          months.map((month) => {
            const monthProps = {
              key: month,
              onClick: this.onChangeMonth.bind(this, month),
              className: classnames(classes.datePicker__monthGrid, {
                [classes['datePicker__monthGrid--active']]: month === curMonth,
              }),
            };
            return <button {...monthProps} >{month}</button>;
          })
        }
      </div>
    );
  }

  render() {
    const { className, classes } = this.props;
    return (
      <div className={`${classes.datePicker__picker} ${classes.datePicker__monthPane} ${className}`}>
        { this.renderMonthHead() }
        { this.renderMonths() }
      </div>
    );
  }
}

export default MonthPane;
