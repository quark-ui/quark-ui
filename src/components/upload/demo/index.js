import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import { allowMultiple } from '../../../constants';
import Upload from '../Upload';
import Icon from '../../icon/Icon';
import Button from '../../button/Button';
import message from '../../message/index';
import styles from './index.css';

@CSSModules(styles, { allowMultiple })
class UploadDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const props = {
      name: 'file',
      action: 'https://jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      multiple: true,
      disabled: false,
      onResponse(response) {
        response = { result: 'success', msg: '上传成功！' };
        if (response.result === 'success') {
          return {
            success: true,
            message: '上传成功',
          };
        }

        return {
          success: false,
          message: response.msg,
        };
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          // console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 文件上传失败！`);
        }
      },
    };

    return (
      <div className="markdown-block">
        1、经典款式，用户点击按钮弹出文件选择框。
        <Upload {...props}>
          <Button size="small" type="secondary" disabled={props.disabled}>
            <Icon size={12} name="upload" /> 上传文件
          </Button>
        </Upload>
      </div>
    );
  }
}

@CSSModules(styles, { allowMultiple })
class UploadDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const props = {
      name: 'file',
      action: 'https://jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      multiple: true,
      disabled: false,
      onResponse(response) {
        response = { result: 'success', msg: '上传成功！' };
        if (response.result === 'success') {
          return {
            success: true,
            message: '上传成功',
          };
        }

        return {
          success: false,
          message: response.msg,
        };
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          // console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 文件上传失败！`);
        }
      },
      defaultFileList: [{
        uid: 1,
        name: '图片1.png',
        status: 'done',
        url: 'https://www.ehuodi.com/module/index/img/index2/line2_bg.png',
      }, {
        uid: 2,
        name: '图片2.png',
        status: 'done',
        url: 'https://www.ehuodi.com/module/index/img/index2/line2_bg.png',
      }, {
        uid: 3,
        name: '图片3.png',
        status: 'error',
        response: '上传失败，图片太大',
      }],
    };


    return (
      <div className="markdown-block">
        2、已上传文件的列表<br />
        使用 defaultFileList 设置已上传的内容。
        <Upload {...props}>
          <Button size="small" type="secondary" disabled={props.disabled}>
            <Icon size={12} name="upload" /> 上传文件
          </Button>
        </Upload>
      </div>
    );
  }
}

@CSSModules(styles, { allowMultiple })
class UploadDemo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://www.ehuodi.com/module/index/img/index2/line2_bg.png',
      }],
    };
  }

  render() {
    const I = this;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      disabled: false,
      onResponse(response) {
        response = { result: 'success', msg: '上传成功！' };
        if (response.result === 'success') {
          return {
            success: true,
            message: '上传成功',
          };
        }

        return {
          success: false,
          message: response.msg,
        };
      },
      onChange(info) {
        let fileList = info.fileList;

        // 最多只留1个文件，前面的将会被替换
        fileList = fileList.slice(-1);

        // 读取上传后的文件链接
        fileList = fileList.map((file) => {
          if (file.response) {
            file.url = file.response.url;
          }
          return file;
        });

        // // 过滤上传成功的文件
        // fileList = fileList.filter((file) => {
        //   if (file.response) {
        //     return file.status === 'done';
        //   }
        //   return true;
        // });

        I.setState({ fileList });
      },
    };
    return (
      <div className="markdown-block">
        3、使用 fileList 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况：<br />
        1) 上传列表数量的限制。<br />
        2) 读取远程路径并显示链接。<br />
        3) 按照服务器返回信息筛选成功上传的文件。<br />
        <Upload {...props} fileList={this.state.fileList}>
          <Button size="small" type="secondary" disabled={props.disabled}>
            <Icon size={12} name="upload" /> 上传文件
          </Button>
        </Upload>
      </div>
    );
  }
}

@CSSModules(styles, { allowMultiple })
class UploadDemo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
  }

  handleChange = (info) => {
    this.setState({ fileList: info.fileList });
  }
  beforeUpload(file) {
    const isJPG = file.type === 'image/png';
    if (!isJPG) {
      message.error('请上传.png文件!');
    }
    const isLt2M = file.size < 1024 * 1000;
    if (!isLt2M) {
      message.error('图片不能超过1000KB!');
    }
    return isJPG && isLt2M;
  }
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      disabled: false,
      listType: 'picture-card',
      fileList: this.state.fileList,
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      beforeUpload: this.beforeUpload,
      onResponse(response) {
        response = { result: 'success', msg: '上传成功！' };
        if (response.result === 'success') {
          return {
            success: true,
            message: '上传成功',
          };
        }

        return {
          success: false,
          message: response.msg,
        };
      },
    };

    const uploadButton = (
      <div styleName="upload-btn">
        <Icon name="plus" size={25} />
        <div styleName="upload-text">上传</div>
      </div>
    );
    return (
      <div className="markdown-block">
        4、显示上传缩略图
        点击上传图片，并使用 beforeUpload 限制用户上传的图片格式和大小。
        <Upload {...props}>
          {this.state.fileList.length >= 3 ? null : uploadButton}
        </Upload>
      </div>
    );
  }
}

export default class UploadDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <UploadDemo1 />
        <br /><br />
        <UploadDemo2 />
        <br /><br />
        <UploadDemo3 />
        <br /><br />
        <UploadDemo4 />
      </div>
    );
  }
}
