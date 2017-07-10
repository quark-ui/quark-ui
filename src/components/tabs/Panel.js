/**
 * Tabs Component
 * @author yan
 */
import { PureComponent, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Panel extends PureComponent {

  static displayName = 'Panel'

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div styleName={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}
