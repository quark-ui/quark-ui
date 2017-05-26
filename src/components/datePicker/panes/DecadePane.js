/**
 * DecadePane Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import Icon from 'quark-ui/icon';

import { allowMultiple } from '../../../constants';
import styles from '../DatePicker.css';

@CSSModules(styles, { allowMultiple })
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
      <div styleName="datePicker__decadePaneHead">
        <button styleName="datePicker__headControlBtn" onClick={this.handleSubtractCentury}>
          <Icon name="arrow-left" size={14} />
        </button>
        <span styleName="datePicker__decadePane--current">{currentDecade.join('-')}</span>
        <button styleName="datePicker__headControlBtn" onClick={this.handleAddCentury}>
          <Icon name="arrow-right" size={14} />
        </button>
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
    return <div styleName="datePicker__decadeBody">{decades}</div>;
  }

  render() {
    const { className } = this.props;
    return (
      <div styleName="datePicker__picker datePicker__decadePane" className={className}>
        { this.renderDecadeHead() }
        { this.renderDecades() }
      </div>
    );
  }
}

export default DecadePane;
