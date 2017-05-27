/**
 * Checkbox Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Checkbox.css';

@CSSModules(styles, { allowMultiple })
class Checkbox extends PureComponent {

  static displayName = 'Checkbox'

  static defaultProps = {
    type:'checkbox',
    defaultChecked:false,
    onChange(){},
    onFocus() {},
    onBlur() {},
    onClick(){},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
  }

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };


  constructor(props) {
    super(props);

    const checked = 'checked' in props ?props.checked:props.defaultChecked;

    this.state = {
      checked,
    };
  }


  componentWillReceiveProps(nextProps){
    if('checked' in nextProps){
      this.setState({
        checked:nextProps.checked,
      });
    }
  }

  handleChange = (e)=>{
    
    const {props} = this;
    if(props.disabled){
      return;
    }
    if(!('checked' in props)){
      this.setState({
        checked:e.target.checked,
      })
    }
    props.onChange({
      target:{
        ...props,
        checked:e.target.checked,
      },
      stopPropagation(){
        e.stopPropagation();
      },
      preventDefault(){
        e.preventDefault();
      }
    });
  };

  render() {
    const {context,props} = this;
    const {children,name,type,disabled,readOnly,onClick,onFocus,onBlur,...otherProps} = props;
    let checkboxProps = {...otherProps};
    // let {checked} = this.state;
    const {checkboxGroup} = context;
    if(checkboxGroup){
      checkboxProps.onChange =()=>checkboxGroup.toggleOption({label:children,value:props.value});
      // checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !==-1;
      checkboxProps.disabled = 'disabled' in props ? props.disabled:checkboxGroup.disabled;
    }
    return (
      <label>
        <span styleName={'checkbox'}>
          <input 
          name={name}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          // checked={!!checked}
          onClick={onClick}
          onFocus = {onFocus}
          onBlur = {onBlur}
          onChange = {this.handleChange}
          {...checkboxProps}
          />
          <span styleName={'checkbox--inner'}></span>
        </span>
        {children !== undefined ? <span>{children}</span> : null}
      </label>
      
    );
  }
}

export default Checkbox;
