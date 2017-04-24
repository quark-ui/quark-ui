/**
 * Mask Component
 * @author ryan.bian
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Modal.css';

@CSSModules(styles, { allowMultiple })
export default class Mask extends Component {

  static displayName = 'Modal'

  static defaultProps = {
    visible: false,
  }
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    visible: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, children } = this.props;
    console.log(visible)
    const maskProps = {
      styleName: `mask${visible ? '--visible' : ''}`,
    };

    return (
      <div {...maskProps}>
        {children}
      </div>
    );
  }
}
