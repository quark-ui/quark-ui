import Upload from '../Upload';
import { Component } from 'react';
import Icon from '../../icon/Icon';
import Button from '../../button/Button';
import message from '../../message/index';

export default class UploadDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file1State: {}
    };
  }


  render() {
    var _this = this;
    const props = {
      name: 'file',
      action: 'https://jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        console.log(info);
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`);          
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 文件上传失败！`);
        }
      },
    };

    


    return (
      <div>
        <Upload {...props}>
          <Button size="small" type="secondary">
            <Icon size={12} name="home" /> Click to Upload
          </Button>
        </Upload>
      </div>
    );
  }
}
