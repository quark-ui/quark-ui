/**
 * Steps Component
 * @author grootfish
 */
import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Steps.css';

@CSSModules(styles, { allowMultiple })
class Steps extends PureComponent {

  static displayName = 'Steps'

  static defaultProps = {
    direction: 'horizontal',
    current: 0,
    status: 'process',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    current: PropTypes.number,
    status: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      lastStepOffsetWidth: 0,
    };
  }

  componentDidMount() {
    this.calcStepOffsetWidth();
  }
  componentDidUpdate() {
    this.calcStepOffsetWidth();
  }
  componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
  }

  calcStepOffsetWidth = () => {
    if (this.domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        const lastStepOffsetWidth = (this.domNode.lastChild.offsetWidth || 0) + 1;

        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth
          || Math.abs(this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) { return; }
        this.setState({ lastStepOffsetWidth });
      });
    }
  }

  render() {
    const { children, direction, status, current, ...restProps } = this.props;
    const lastIndex = children.length - 1;
    const reLayouted = this.state.lastStepOffsetWidth > 0;
    const classString = classnames({
      steps: true,
      [`steps__${direction}`]: true,
    });
    return (
      <div styleName={classString} ref={node => (this.domNode = node)} {...restProps}>
        {
          Children.map(children, (ele, idx) => {
            const itemWidth = (direction === 'vertical' || idx === lastIndex || !reLayouted)
              ? null : `${100 / lastIndex}%`;
            const adjustMarginRight = (direction === 'vertical' || idx === lastIndex)
              ? null : -Math.round((this.state.lastStepOffsetWidth / lastIndex) + 1);
            const np = {
              stepNumber: (idx + 1).toString(),
              itemWidth,
              adjustMarginRight,
            };
            
            if (!ele.props.status) {
              if (idx === current) {
                np.status = status;
              } else if (idx < current) {
                np.status = 'finish';
              } else {
                np.status = 'wait';
              }
            }
            return cloneElement(ele, np);
          }, this)
        }
      </div>
    );
  }
}

export default Steps;
