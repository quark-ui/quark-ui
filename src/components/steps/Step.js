/**
 * Step Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Icon from '../icon';
import { allowMultiple } from '../../constants';
import styles from './Steps.css';

function isString(str) {
  return typeof str === 'string';
}

@CSSModules(styles, { allowMultiple })
class Step extends PureComponent {

  static displayName = 'Step'

  static defaultProps = {}

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    status:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    stepNumber:PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {status='wait',icon,description,title,stepNumber,itemWidth,adjustMarginRight,...restProps} = this.props;

    let iconNode;

    if(status==='finish'){
      iconNode = <span styleName={'steps--icon'}>{<Icon name="check" size={14}></Icon>}</span>
    }else{
      iconNode = <span styleName={'steps--icon'}>{stepNumber}</span>
    }

    const classString = classnames({
      ['steps--item']:true,
      [`steps--item__${status}`]:true,
    });

    return (
      <div {...restProps} styleName={classString} style={{ width: itemWidth, marginRight: adjustMarginRight }}>
        <div styleName={'steps--tail'}><i></i></div>
        <div styleName={'steps--step'}>
          <div styleName={'steps--head'}>
            <div styleName={'steps--headinner'}>{iconNode}</div>
          </div>
          <div styleName={'steps--main'}>
            <div styleName={'steps--title'}>{title}</div>
            {description?<div styleName={'steps--description'}>{description}</div>:null}
          </div>
        </div>
      </div>
    );
  }
}

export default Step;
