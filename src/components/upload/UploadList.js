/**
 * UploadList Component
 * @author heifade
 */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Animate from 'rc-animate';
import Icon from '../icon/Icon';
import { allowMultiple } from '../../constants';
// import Tooltip from '../tooltip';
import Progress from '../progress/Progress';
// import classNames from 'classnames';
// import { UploadListProps } from './interface';
import styles from './Upload.css';

const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

@CSSModules(styles, { allowMultiple })
export default class UploadList extends React.Component {

  static displayName = 'UploadList'

  static defaultProps = {
    listType: 'text',  // or picture-card
    items: [],
    onRemove: null,
    onPreview: null,
    prefixCls: 'upload',
    showRemoveIcon: true,
    showPreviewIcon: true,
    disabled: false,
    progressAttr: {
      strokeWidth: 2,
      showInfo: false,
    },
    locale: { },
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    listType: PropTypes.oneOf('text', 'picture-card'),
    items: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func,
    onPreview: PropTypes.func,
    prefixCls: PropTypes.string,
    showPreviewIcon: PropTypes.bool,
    showRemoveIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    progressAttr: PropTypes.object,
    locale: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {
    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    (this.props.items || []).forEach((file) => {
      if (typeof document === 'undefined' ||
        typeof window === 'undefined' ||
        !window.FileReader || !window.File ||
        !(file.originFileObj instanceof File) ||
        file.thumbUrl !== undefined) {
        return;
      }
      /*eslint-disable */
      file.thumbUrl = '';
      /*eslint-enable */
      previewFile(file.originFileObj, (previewDataUrl) => {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /*eslint-enable */
        this.forceUpdate();
      });
    });
  }

  // 删除
  handleClose = (file) => {
    const onRemove = this.props.onRemove;
    if (onRemove) {
      onRemove(file);
    }
  }

  handlePreview = (file, e) => {
    const { onPreview } = this.props;
    if (!onPreview) {
      return;
    }
    e.preventDefault();
    onPreview(file);
  }

  render() {
    const { prefixCls,
      items = [],
      listType,
      showPreviewIcon,
      showRemoveIcon,
      locale,
      disabled,
    } = this.props;
    const list = items.map((file) => {
      let progress;
      let icon = <Icon size={12} styleName={'status'} name={file.status === 'uploading' ? 'setting' : 'paper'} />;

      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
          if (listType === 'picture-card') {
            icon = <div styleName={'uploading-text'}>{locale.uploading}</div>;
          } else {
            icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type="picture" />;
          }
        } else {
          icon = (
            <a
              styleName={`${prefixCls}-list-item-thumbnail`}
              onClick={e => this.handlePreview(file, e)}
              href={file.url || file.thumbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={file.thumbUrl || file.url} alt={file.name} styleName="imgshow" />
            </a>
          );
        }
      }

      if (file.status === 'uploading') {
        // show loading icon if upload progress listener is disabled
        const loadingProgress = ('percent' in file) ? (
          <Progress type="line" {...this.props.progressAttr} percent={file.percent} />
        ) : null;

        progress = (
          <div styleName={`${prefixCls}-list-item-progress`} key="progress">
            {loadingProgress}
          </div>
        );
      }
      // const message = file.response || (file.error && file.error.statusText) || locale.uploadError;
      const message = file.status === 'error' ? file.response || locale.uploadError : file.response;

      // console.log(file);

      const preview = file.url ? (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          styleName={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
          // title={file.name}
          title={message}
        >
          {file.name}
        </a>
      ) : (
        <span
          styleName={`${prefixCls}-list-item-name`}
          // title={file.name}
          title={message}
        >
          {file.name}
        </span>
      );
      const style = (file.url || file.thumbUrl) ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5,
      };
      const previewIcon = showPreviewIcon ? (
        <a
          href={file.url || file.thumbUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          onClick={e => this.handlePreview(file, e)}
          title={locale.previewFile}
        >
          <Icon name="error" size={20} styleName={'eye'} />
        </a>
      ) : null;
      // picture-card 删除按钮
      const removeIcon = showRemoveIcon && !disabled ? (
        <a
          href='javascript:void(0)'
          title={locale.removeFile}
          onClick={() => this.handleClose(file)}
        >
          <Icon name="error" size={20} styleName={'remove'} />
        </a>
      ) : null;
      // text 删除按钮
      const removeIconCross = showRemoveIcon && !disabled ? (
        <a
          href='javascript:void(0)'
          title={locale.removeFile}
          onClick={() => this.handleClose(file)}
        >
          <Icon name="close" size={10} styleName={'remove'} />
        </a>
      ) : null;
      const actions = (listType === 'picture-card' && file.status !== 'uploading')
        ? <span styleName={`${prefixCls}-list-item-actions`}>{previewIcon}{removeIcon}</span>
        : removeIconCross;


      const iconAndPreview = (file.status === 'error')
        ? <span>{icon}{preview}</span>
        : <span>{icon}{preview}</span>;


      // const infoUploadingClass = classNames({
      //   [`${prefixCls}-list-item`]: true,
      //   [`${prefixCls}-list-item-${file.status}`]: true,
      // });

      return (
        <div styleName={`${prefixCls}-list-item ${prefixCls}-list-item-${file.status}`} key={file.uid}>
          <div styleName={`${prefixCls}-list-item-info`}>
            {iconAndPreview}
          </div>
          {actions}
          <Animate transitionName="fade" component="">
            {progress}
          </Animate>
        </div>
      );
    });
    // const listClassNames = classNames({
    //   [`${prefixCls}-list`]: true,
    //   [`${prefixCls}-list-${listType}`]: true,
    // });
    const animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
    return (
      <Animate
        transitionName={`${prefixCls}-${animationDirection}`}
        component="div"
        styleName={`${prefixCls}-list ${prefixCls}-list-${listType}`}
      >
        {list}
      </Animate>
    );
  }

}
