/**
 * YearPane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Icon from '../../icon';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';

import { allowMultiple } from '../../../constants';
import styles from '../DatePicker.css';

@CSSModules(styles, { allowMultiple })
class YearPane extends PureComponent {

  static displayName = 'YearPane'

  static defaultProps = {
    className: '',
    date: moment(),
    showDecadePane() {},
    showMonthPane() {},
    changeYear() {},
    manipulateDate() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    className: PropTypes.string,
    date: momentPropTypes.momentObj,
    showDecadePane: PropTypes.func,
    showMonthPane: PropTypes.func,
    changeYear: PropTypes.func,
    manipulateDate: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = this.getYearRange(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.date.isSame(nextProps.date)) {
      this.setState(this.getYearRange(nextProps));
    }
  }

  onChangeYear(year) {
    this.props.changeYear(year);
    this.props.showMonthPane();
  }

  onJumpDecade(backward) {
    const { currentYear, startYear, endYear } = this.state;
    const newState = {};
    if (backward) {
      assign(newState, {
        currentYear: currentYear - 10,
        startYear: startYear - 10,
        endYear: endYear - 10,
      });
    } else {
      assign(newState, {
        currentYear: currentYear + 10,
        startYear: startYear + 10,
        endYear: endYear + 10,
      });
    }
    this.setState(newState);
  }

  getYearRange(props) {
    const currentYear = props.date.get('year');
    const startYear = (Math.floor(currentYear / 10) * 10) - 1;
    const endYear = startYear + 11;
    return {
      currentYear,
      startYear,
      endYear,
    };
  }

  handleSubtractDecade = () => {
    this.props.manipulateDate('subtract', 10, 'Y');
  }
  handleAddDecade = () => {
    this.props.manipulateDate('add', 10, 'Y');
  }

  renderYears() {
    const { currentYear, startYear, endYear } = this.state;
    let i = startYear;
    const years = [];
    for (i; i <= endYear; i += 1) {
      const yearProps = {
        styleName: classnames('datePicker__yearGrid', {
          'datePicker__yearGrid--active': currentYear === i,
          'datePicker__yearGrid--jump': startYear === i || endYear === i,
        }),
        key: i,
      };
      if (i === startYear || i === endYear) {
        assign(yearProps, {
          onClick: this.onJumpDecade.bind(this, i === startYear),
        });
      } else {
        assign(yearProps, {
          onClick: this.onChangeYear.bind(this, i),
        });
      }
      years.push(
        <button {...yearProps}>{i}</button>,
      );
    }
    return (
      <div styleName="datePicker__yearBody">{years}</div>
    );
  }

  renderYearHead() {
    const { showDecadePane } = this.props;
    const { currentYear, startYear, endYear } = this.state;
    const decade = [startYear + 1, endYear - 1];
    return (
      <div styleName="datePicker__yearPaneHead">
        <button styleName="datePicker__headControlBtn" onClick={this.handleSubtractDecade}>
          <Icon name="arrow-left" size={14} />
        </button>
        <button styleName="datePicker__headJumpBtn" onClick={showDecadePane.bind(this, currentYear)}>{decade.join('-')}</button>
        <button styleName="datePicker__headControlBtn" onClick={this.handleAddDecade}>
          <Icon name="arrow-right" size={14} />
        </button>
      </div>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div styleName="datePicker__picker datePicker__yearPane" className={className}>
        { this.renderYearHead() }
        { this.renderYears() }
      </div>
    );
  }
}

export default YearPane;
