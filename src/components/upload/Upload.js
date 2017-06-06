/**
 * Upload Component
 * @author heifade
 */
import assign from 'object-assign';
import React from 'react';
import RcUpload from 'rc-upload';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import { fileToObject, genPercentAdd, getFileItem, removeFileItem } from './utils';
// import Dragger from './Dragger';
import UploadList from './UploadList';
// import { UploadProps, UploadLocale } from './interface';
// import classNames from 'classnames';
import styles from './Upload.css';

const defaultLocale = {
  uploading: '文件上传中',
  removeFile: '删除文件',
  uploadError: '上传错误',
  previewFile: '预览文件',
};

@CSSModules(styles, { allowMultiple })
class Upload extends React.Component {

  static displayName = 'Upload'

  static defaultProps = {
    name: 'file',
    defaultFileList: null,
    // fileList: null,
    action: '',
    data: {},
    headers: null,
    showUploadList: true,
    multiple: false,
    accept: '',
    beforeUpload: null,
    customRequest: null,
    onChange: null,
    listType: 'text', // or picture-card
    onPreview: null,
    onRemove: null,
    disabled: false,
    withCredentials: false,

    prefixCls: 'upload',
    // type: 'select',
    className: '',
    // supportServerRender: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    name: PropTypes.string,
    defaultFileList: PropTypes.arrayOf(PropTypes.object),
    fileList: PropTypes.arrayOf(PropTypes.object),
    action: PropTypes.string,
    data: PropTypes.object || PropTypes.func,
    headers: PropTypes.object,
    showUploadList: PropTypes.bool || PropTypes.object,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    beforeUpload: PropTypes.func,
    customRequest: PropTypes.func,
    onChange: PropTypes.func,
    listType: PropTypes.oneOf('text', 'picture-card'),
    onPreview: PropTypes.func,
    onRemove: PropTypes.func,
    disabled: PropTypes.bool,
    withCredentials: PropTypes.bool,

    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    // supportServerRender: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      fileList: this.props.fileList || this.props.defaultFileList || [],
      dragState: 'drop',
    };
  }

  // getLocale() {
  //   let locale = {};
  //   if (this.context.antLocale && this.context.antLocale.Upload) {
  //     locale = this.context.antLocale.Upload;
  //   }
  //   return assign({}, defaultLocale, locale, this.props.locale);
  // }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }
  }
  onChange = (info) => {
    if (!('fileList' in this.props)) {
      this.setState({ fileList: info.fileList });
    }

    const { onChange } = this.props;

    if (onChange) {
      onChange(info);
    }
  }
  onStart = (file) => {
    let targetItem;
    let nextFileList = this.state.fileList.concat();
    if (file.length > 0) {
      targetItem = file.map((f) => {
        const fileObject = fileToObject(f);
        fileObject.status = 'uploading';
        return fileObject;
      });
      nextFileList = nextFileList.concat(targetItem);
    } else {
      targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      nextFileList.push(targetItem);
    }
    this.onChange({
      file: targetItem,
      fileList: nextFileList,
    });

    // fix ie progress
    if (!window.FormData) {
      this.autoUpdateProgress(0, targetItem);
    }
  }
  // 上传出错时
  onError = (error, response, file) => {
    this.clearProgressTimer();
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }
  onFileDrop = (e) => {
    this.setState({
      dragState: e.type,
    });
  }

  onSuccess = (response, file) => {
    this.clearProgressTimer();
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) { /* do nothing */
    }
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);

    // removed
    if (!targetItem) {
      return;
    }
    targetItem.status = 'done';
    targetItem.response = response;

    this.onChange({
      file: { ...targetItem },
      fileList,
    });
  }

  onProgress = (e, file) => {
    const fileList = this.state.fileList;
    const targetItem = getFileItem(file, fileList);

    // removed
    if (!targetItem) {
      return;
    }
    targetItem.percent = e.percent;

    this.onChange({
      event: e,
      file: { ...targetItem },
      fileList: this.state.fileList,
    });
  }

  autoUpdateProgress(_, file) {
    const getPercent = genPercentAdd();
    let curPercent = 0;
    this.clearProgressTimer();
    this.progressTimer = setInterval(() => {
      curPercent = getPercent(curPercent);
      this.onProgress({
        percent: curPercent,
      }, file);
    }, 200);
  }

  handleManualRemove = (file) => {
    this.refs.upload.abort(file);
    file.status = 'removed'; // eslint-disable-line
    this.handleRemove(file);
  }

  handleRemove(file) {
    const { onRemove } = this.props;

    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove)
      .then(ret => {
        // Prevent removing file
        if (ret === false) {
          return;
        }

        const removedFileList = removeFileItem(file, this.state.fileList);
        if (removedFileList) {
          this.onChange({
            file,
            fileList: removedFileList,
          });
        }
      });
  }

  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }

  render() {
    const {
      prefixCls = '', showUploadList, listType, onPreview,
      // type, 
      disabled,
      children,
      className,
    } = this.props;

    const rcUploadProps = assign({}, {
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
    }, this.props);

    delete rcUploadProps.className;


    const { showRemoveIcon, showPreviewIcon } = showUploadList;
    const uploadList = showUploadList ? (
      <UploadList
        listType={listType}
        items={this.state.fileList}
        onPreview={onPreview}
        onRemove={this.handleManualRemove}
        showRemoveIcon={showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        // locale={this.getLocale()}
        locale={defaultLocale}
        disabled={disabled}
      />
    ) : null;

    /* if (type === 'drag') {
      const dragCls = classNames(prefixCls, {
        [`${prefixCls}-drag`]: true,
        [`${prefixCls}-drag-uploading`]: this.state.fileList.some(file => {
          return file.status === 'uploading';
        }),
        [`${prefixCls}-drag-hover`]: this.state.dragState === 'dragover',
        [`${prefixCls}-disabled`]: disabled,
      });
      return (
        <span className={className}>
          <div
            className={dragCls}
            onDrop={this.onFileDrop}
            onDragOver={this.onFileDrop}
            onDragLeave={this.onFileDrop}
          >
            <RcUpload {...rcUploadProps} ref="upload" className={`${prefixCls}-btn`}>
              <div className={`${prefixCls}-drag-container`}>
                {children}
              </div>
            </RcUpload>
          </div>
          {uploadList}
        </span>
      );
    } */

    // const uploadButtonCls = classNames(prefixCls, {
    //   [`${prefixCls}-select`]: true,
    //   [`${prefixCls}-select-${listType}`]: true,
    //   [`${prefixCls}-disabled`]: disabled,
    // });

    const uploadButton = (
      <div styleName={`${prefixCls} ${prefixCls}-select ${prefixCls}-select-${listType}`} style={{ display: children ? '' : 'none' }}>
        <RcUpload {...rcUploadProps} ref="upload" />
      </div>
    );

    if (listType === 'picture-card') {
      return (
        <div className={className}>
          {uploadList}
          {uploadButton}
          <div style={{ clear: 'both' }} />
        </div>
      );
    }
    return (
      <div className={className}>
        {uploadButton}
        {uploadList}
      </div>
    );
  }
}

export default Upload;
