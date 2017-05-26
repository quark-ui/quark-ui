import Input from '../Input';
import Search from '../Search';
import { Component } from 'react';

export default class InputDemo extends Component {

  	render() {
	    return (
	    	<div>
	    		<span>搜索框</span>
	    		<br/>
	    		<Search size="large" placeholder="input text" style={{ width: 240 }}></Search>
	    		<br/>
	    		<Search placeholder="input text" style={{ width: 240 }}></Search>
	    		<br/>
	    		<Search size="small" placeholder="input text" style={{ width: 240 }} defaultValue="12345465"></Search>
	    		<br/>
	    		<span>基本</span>
	    		<br/>
	    		<Input placeholder="input text" />
				<Input placeholder="input text" value="12345465" />
	    		<br/>
	    		<span>尺寸</span>
	    		<br/>
	    		<Input size="large" placeholder="input text" />
	    		<Input size="normal" placeholder="input text" />
	    		<Input size="small" placeholder="input text" />
	    		<br/>
	    		<span>禁用</span>
	    		<br/>
	    		<Input placeholder="input text" disabled />
	    		<br/>
	    		<Input type="textarea" placeholder="input text" autosize />
	    		<br/>
	    		<span>多行输入</span>
	    		<br/>
	    		<Input type="textarea" placeholder="input text" rows={6} />
	    		<br/>

	    	</div>
	    );
  	}
}
