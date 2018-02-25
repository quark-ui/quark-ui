/**
 * DecadePane Component
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

// import styles from '../DatePicker.css';

@injectSheet(styles)
class DecadePane extends PureComponent {
  static displayName = 'DecadePane'

  static defaultProps = {
    className: '',
    date: moment(),
    decadeYear: undefined,
    changeYear() {},
    showYearPane() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    className: PropTypes.string,
    date: momentPropTypes.momentObj,
    decadeYear: PropTypes.number,
    changeYear: PropTypes.func,
    showYearPane: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = this.getDecadeRange(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getDecadeRange(nextProps));
  }

  
  onChangeDecade(startYear) {
    this.props.changeYear(startYear);
    this.props.showYearPane();
  }
  
  onJumpCentury(backward) {
    const { startYear, endYear, decadeYear } = this.state;
    const newState = {};
    if (backward) {
      assign(newState, {
        startYear: startYear - 100,
        endYear: endYear - 100,
        decadeYear: decadeYear - 100,
      });
    } else {
      assign(newState, {
        startYear: startYear + 100,
        endYear: endYear + 100,
        decadeYear: decadeYear + 100,
      });
    }
    this.setState(newState);
  }

  getDecadeRange(props) {
    const { decadeYear } = props;
    const startYear = Math.floor(decadeYear / 100) * 100;
    const endYear = startYear + 99;
    return {
      startYear,
      endYear,
      decadeYear,
    };
  }

  handleSubtractCentury = () => {
    this.onJumpCentury(true);
  }
  handleAddCentury = () => {
    this.onJumpCentury(false);
  }

  renderDecadeHead() {
    const { decadeYear } = this.state;
    const from = Math.floor(decadeYear / 10) * 10;
    const currentDecade = [from, from + 9];
    return (
      <div className={this.props.classes.datePicker__decadePaneHead}>
        <button className={this.props.classes.datePicker__headControlBtn} onClick={this.handleSubtractCentury}>
          <Icon name="arrow-left" size={14} />
        </button>
        <span className={this.props.classes['datePicker__decadePane--current']}>{currentDecade.join('-')}</span>
        <button className={this.props.classes.datePicker__headControlBtn} onClick={this.handleAddCentury}>
          <Icon name="arrow-right" size={14} />
        </button>
      </div>
    );
  }

  renderDecades() {
    const decades = [];
    const { classes } = this.props;
    const { startYear, endYear, decadeYear } = this.state;
    let i = startYear - 10;
    for (; i <= endYear + 1; i += 10) {
      const decadeProps = {
        key: i,
        className: classnames(classes.datePicker__decadeGrid, {
          [classes['datePicker__decadeGrid--jump']]: i === startYear - 10 || i === endYear + 1,
          [classes['datePicker__decadeGrid--active']]: decadeYear >= i && decadeYear <= i + 9,
        }),
      };
      if (i === startYear - 10 || i === endYear + 1) {
        assign(decadeProps, {
          onClick: this.onJumpCentury.bind(this, i === startYear - 10),
        });
      } else {
        assign(decadeProps, {
          onClick: this.onChangeDecade.bind(this, i),
        });
      }
      decades.push(
        <button {...decadeProps}>{[i, i + 9].join('-')}</button>,
      );
    }
    return <div className={classes.datePicker__decadeBody}>{decades}</div>;
  }

  render() {
    const { className, classes } = this.props;
    return (
      <div className={classnames(className, classes.datePicker__picker, classes.datePicker__decadePane)}>
        { this.renderDecadeHead() }
        { this.renderDecades() }
      </div>
    );
  }
}

export default DecadePane;
