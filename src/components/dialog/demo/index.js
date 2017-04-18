import '../Dialog.less';
import Dialog from '../Dialog';
import { Component } from 'react';

export default class DialogDemo extends Component {
  render() {
    return (
      <div>
        dialog
        <Dialog title={'title'} visible>
          <p>first dialog</p>
        </Dialog>
      </div>
    );
  }
}
