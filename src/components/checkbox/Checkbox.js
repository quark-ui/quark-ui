/**
 * Checkbox Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import shallowEqual from 'shallowequal';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Checkbox.css';

@CSSModules(styles, { allowMultiple })
class Checkbox extends PureComponent {

  static displayName = 'Checkbox'

  static defaultProps = {
    prefixCls:'checkbox',
    type:'checkbox',
    defaultChecked:false,
    onChange(){},
    onFocus() {},
    onBlur() {},
    onClick(){},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls: PropTypes.string,
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };


  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup);
  }

  handleChange = (e) => {
    debugger
    const { props } = this;
    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
    });
  };

  render() {
    const {context,props} = this;
    const {children,name,type,disabled,readOnly,onClick,onFocus,onBlur,prefixCls ,...otherProps} = props;
    let checkboxProps = { ...otherProps };
    let {checked} = this.state;
    const {checkboxGroup} = context;
    if(checkboxGroup){
      checkboxProps.onChange =()=>checkboxGroup.toggleOption({label:children,value:props.value});
      checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !==-1;
      checkboxProps.disabled = 'disabled' in props ? props.disabled:checkboxGroup.disabled;
    }

    const classString = classNames(prefixCls,{
      [`${prefixCls}__checked`]:checked,
      [`${prefixCls}__disabled`]:disabled,
    });
    const wrapperString = classNames({
      [`${prefixCls}--wrapper`]:true
    });
    const innerString = classNames({
      [`${prefixCls}--inner`]:true
    });
    return (
      <label styleName={wrapperString}>
        <span styleName={classString}>
          <input 
          name={name}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          // checked={!!checked}
            onChange={()=>{console.log(1)}}
            {...checkboxProps}
          />
          <span styleName={innerString} />
        </span>
        {children !== undefined ? <span>{children}</span> : null}
      </label>

    );
  }
}

export default Checkbox;
