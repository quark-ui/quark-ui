import Tooltip from '../Tooltip';
import Button from '../../button/Button';
import { Component } from 'react';

export default class TooltipDemo extends Component {

  render() {
  	const ele = (<div>aaaaaaaaaaa</div>);
  	const el2 = (<Button type="secondary">left</Button>);
    return (
      <div>
      	<Tooltip  content="lefttip" toolElement={el2} placement="left" />
        <Tooltip  content="lefttip" toolElement={ele} placement="left" />
        <Tooltip  content="righttip" toolElement="righttip" placement="right" />
        <Tooltip  content="toptip" toolElement="toptip" placement="top" />
        <Tooltip content="bottomtip" toolElement="bottomtip" placement = "bottom" />
      </div>
    );
  }
}
