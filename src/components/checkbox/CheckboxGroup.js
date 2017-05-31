/**
 * Checkbox Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import shallowEqual from 'shallowequal';
import { allowMultiple } from '../../constants';
import Checkbox from './Checkbox'
import styles from './Checkbox.css';

@CSSModules(styles, { allowMultiple })
class CheckboxGroup extends PureComponent {

  static displayName = 'CheckboxGroup'

  static defaultProps = {
    type:'checkbox',
    defaultValue:[],
    optoins:[],
    onChange(){},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func,
  }

  static childContextTypes = {
    checkboxGroup: PropTypes.any,
  };

  constructor(props) {
    super(props);

    const value = 'value' in props ?props.value:props.defaultValue;

    this.state = {
      value,
    };
    
  }

  componentWillReceiveProps(nextProps){
    if('value' in nextProps){
      this.setState({
        value:nextProps.value||[],
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }

  getChildContext=()=> {
    return {
      checkboxGroup: {
        toggleOption: this.toggleOption,
        value: this.state.value,
        disabled: this.props.disabled,
      },
    };
  }

  getOptions=()=>{
    const {options}= this.props;
    return options.map((option)=>{
      if(typeof option=='string'){
        return {
          label:option,
          value:option,
        }
      }
      return option;
    });
  }

  toggleOption=(option)=>{
    const optionIndex = this.state.value.indexOf(option.value);
    let value = [...this.state.value];

    if(optionIndex===-1){
      value.push(option.value);
    }else{
      value.splice(optionIndex,1);
    }

    if(!('value' in this.props)){
      this.setState({value});
    }

    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

 

  render() {
    const {props,state}=this;
    let {options,children} = props;
    if(options&&options.length>0){
      children = this.getOptions().map(option=>(
        <Checkbox
          key={option.value}
          disabled={'disabled' in option?option.disabled:props.disabled}
          value={option.value}
          checked ={state.value.indexOf(option.value)!==-1}
          onChange={()=>{this.toggleOption(option)}}
        >
        {option.label}
        </Checkbox>
      ));
    }


    return (
      <div styleName={'checkbox--group'}>
        {children}
      </div>
    );
  }
}

export default CheckboxGroup;
