import Alert from '../Alert';
import Button from 'quark-ui/button';
import { Component } from 'react';

export default class AlertDemo extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	}

	openAlert(){
		alert(1111111);
	}

	/*render() {
		return (
		  <div>
		    <Button onClick={this.openAlert}>alert</Button>
		  </div>
		);
	}*/

	render() {
	    const infoProps = {
	      type: 'info',
	      closable: false,
	      onClose() { console.log('info') },
	    };
	    const errorProps = {
	      type: 'error',
	      closable: true,
	      onClose() { console.log('error') },
	    }
	    return (
	      <div style = {{width:400}}>
	        <Alert {...infoProps}></Alert>
	        <Alert {...errorProps}></Alert>
	      </div>
	    );
	  }

}
