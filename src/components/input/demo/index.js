import Input from '../Input';
import Icon from '../../icon';
import Search from '../Search';
import CardInput from '../CardInput';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/demo.css';

@CSSModules(styles)
export default class InputDemo extends Component {

	onChangeCard = (e) => {
		console.log(e.target.value);
		const stateChange = {}
		stateChange[e.target.name] = e.target.value
		this.setState(stateChange)
	}

  	render() {
		const prefix = <Icon
			size={18}
			name={'account'}
		/>

	    return (
	    	<div>
				<section styleName="code__box">
					<div styleName="code__temp">
						<span>搜索框</span>
						<p>带有搜索按钮的输入框</p>
						<p>
							<Search size="large" placeholder="input search text" style={{ width: 240 }}></Search>
						</p>
						<p>
							<Search placeholder="input search text" style={{ width: 240 }}></Search>
						</p>
						<p>
							<Search size="small" placeholder="input search text" style={{ width: 240 }}></Search>
						</p>
					</div>
					<div styleName="code__temp">
						<span>基本</span>
						<p>数字输入框</p>
						<p>
							<Input placeholder="请输入" defaultValue="12345465" />
						</p>
					</div>
					<div styleName="code__temp">
						<span>图标</span>
						<p>数字输入框</p>
						<p>
							<Input placeholder="请输入" prefix={prefix} />
						</p>
					</div>
					<div styleName="code__temp">
						<span>尺寸</span>
						<p>数字输入框</p>
						<p>
							<Input size="large" placeholder="large size" />
						</p>
						<p>
	    					<Input size="normal" placeholder="normal size" />
						</p>
						<p>
							<Input size="small" placeholder="small size" />
						</p>
					</div>
					<div styleName="code__temp">
						<span>禁用</span>
						<p>输入框禁用</p>
						<p>
							<Input placeholder="input disabled" defaultValue="12345465" disabled />
						</p>
					</div>
					<div styleName="code__temp">
						<span>文本域</span>
						<p>用于多行输入</p>
						<p>
							<Input type="textarea" placeholder="请输入" autosize rows={1} />
						</p>
						<p>
							<Input type="textarea" placeholder="请输入" rows={6} />
						</p>
					</div>
					<div styleName="code__temp">
						<span>格式化</span>
						<p>针对16或多位格式化输入</p>
						<p>
							<CardInput
								size="large"
								mask="1111-11111111"
								placeholder="0571-81818181"
								value={'0571-81818181'}
								onChange={this.onChangeCard}
							/>
						</p>
						<p>
							<CardInput
								size="normal"
								mask="111111-111111-111111-111111"
								onChange={this.onChangeCard}
							/>
						</p>
					</div>
				</section>
	    	</div>
	    );
  	}
}
