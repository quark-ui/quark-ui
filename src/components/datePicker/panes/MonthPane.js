/**
 * MonthPane Component
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
class MonthPane extends PureComponent {

  static displayName = 'MonthPane'

  static defaultProps = {
    date: moment(),
    showYearPane() {},
    showDatePane() {},
    changeMonth() {},
    manipulateDate() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
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
    const { date, showYearPane } = this.props;
    return (
      <div styleName="datePicker__monthPaneHead">
        <button onClick={this.handleSubtractYear}>&#9664;</button>
        <button onClick={showYearPane}>{date.format('YYYY')}</button>
        <button onClick={this.handleAddYear}>&#9654;</button>
      </div>
    );
  }

  renderMonths() {
    const months = moment.monthsShort();
    const curMonth = this.props.date.format('MMM');
    return (
      <div>
        {
          months.map((month) => {
            const monthProps = {
              key: month,
              onClick: this.onChangeMonth.bind(this, month),
              styleName: classnames('datePicker__monthGrid', {
                'datePicker__monthGrid--active': month === curMonth,
              }),
            };
            return <button {...monthProps} >{month}</button>;
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div styleName="datePicker__picker datePicker__monthPane">
        { this.renderMonthHead() }
        { this.renderMonths() }
      </div>
    );
  }
}

export default MonthPane;
