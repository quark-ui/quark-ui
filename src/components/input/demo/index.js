import Input from '../Input';
import { Component } from 'react';

export default class InputDemo extends Component {

  	render() {
	    return (
	    	<div>
	    		<span>基本</span>
	    		<br/>
	    		<Input placeholder="base" />
	    		<br/>
	    		<span>尺寸</span>
	    		<br/>
	    		<Input size="large" placeholder="large" />
	    		<Input size="normal" placeholder="normal" />
	    		<Input size="small" placeholder="small" />
	    		<br/>
	    		<span>禁用</span>
	    		<br/>
	    		<Input disabled placeholder="disabled" />
	    		<br/>
	    		<Input type="textarea" placeholder="textarea" disabled />
	    		<br/>
	    		<span>多行输入</span>
	    		<br/>
	    		<Input type="textarea" placeholder="textarea" />
	    		<br/>
	    		<span>搜索框</span>
	    		<br/>
	    	</div>
	    );
  	}
}
