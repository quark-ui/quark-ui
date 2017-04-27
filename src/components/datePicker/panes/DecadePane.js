/**
 * DecadePane Component
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
class DecadePane extends PureComponent {

  static displayName = 'DecadePane'

  static defaultProps = {
    date: moment(),
    decadeYear: undefined,
    changeYear() {},
    showYearPane() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
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
      <div>
        <button onClick={this.handleSubtractCentury}>&#9664;</button>
        <span>{currentDecade.join('-')}</span>
        <button onClick={this.handleAddCentury}>&#9654;</button>
      </div>
    );
  }

  renderDecades() {
    const decades = [];
    const { startYear, endYear, decadeYear } = this.state;
    let i = startYear - 10;
    for (; i <= endYear + 1; i += 10) {
      const decadeProps = {
        key: i,
        styleName: classnames('datePicker__decadeGrid', {
          'datePicker__decadeGrid--jump': i === startYear - 10 || i === endYear + 1,
          'datePicker__decadeGrid--active': decadeYear >= i && decadeYear <= i + 9,
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
        <button {...decadeProps}>{[i, i + 9].join('-')}</button>
      );
    }
    return <div>{decades}</div>;
  }

  render() {
    return (
      <div styleName="datePicker__picker datePicker__decadePane">
        { this.renderDecadeHead() }
        { this.renderDecades() }
      </div>
    );
  }
}

export default DecadePane;
