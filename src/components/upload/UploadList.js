/**
 * UploadList Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import Animate from 'rc-animate';
import Icon from '../icon/Icon';
import { allowMultiple } from '../../constants';
// import Tooltip from '../tooltip';
import Progress from '../progress/Progress';
import classNames from 'classnames';
// import { UploadListProps } from './interface';
import styles from './Upload.css';


@CSSModules(styles, { allowMultiple })
export default class UploadList extends PureComponent {

  static displayName = 'UploadList'

  static defaultProps = {
    listType: 'text',  // or picture
    progressAttr: {
      strokeWidth: 2,
      showInfo: false,
    },
    prefixCls: 'upload',
    showRemoveIcon: true,
    showPreviewIcon: true,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

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
    return onPreview(file);
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

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { prefixCls, items = [], listType, showPreviewIcon, showRemoveIcon, locale } = this.props;
    const list = items.map((file) => {
      let progress;
      let icon = <Icon type={file.status === 'uploading' ? 'loading' : 'paper-clip'} />;

      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
          if (listType === 'picture-card') {
            icon = <div className={`${prefixCls}-list-item-uploading-text`}>{locale.uploading}</div>;
          } else {
            icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type="picture" />;
          }
        } else {
          icon = (
            <a
              className={`${prefixCls}-list-item-thumbnail`}
              onClick={e => this.handlePreview(file, e)}
              href={file.url || file.thumbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={file.thumbUrl || file.url} alt={file.name} />
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
          <div className={`${prefixCls}-list-item-progress`} key="progress">
            {loadingProgress}
          </div>
        );
      }
      const infoUploadingClass = classNames({
        [`${prefixCls}-list-item`]: true,
        [`${prefixCls}-list-item-${file.status}`]: true,
      });
      const preview = file.url ? (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          styleName={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
          title={file.name}
        >
          {file.name}
        </a>
      ) : (
        <span
          styleName={`${prefixCls}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
          title={file.name}
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
          <Icon type="eye-o" />
        </a>
      ) : null;
      const removeIcon = showRemoveIcon ? (
        <Icon type="delete" title={locale.removeFile} onClick={() => this.handleClose(file)} />
      ) : null;
      const removeIconCross = showRemoveIcon ? (
        <Icon type="cross" title={locale.removeFile} onClick={() => this.handleClose(file)} />
      ) : null;
      const actions = (listType === 'picture-card' && file.status !== 'uploading')
        ? <span className={`${prefixCls}-list-item-actions`}>{previewIcon}{removeIcon}</span>
        : removeIconCross;

      const message = file.response || (file.error && file.error.statusText) || locale.uploadError;
      const iconAndPreview = (file.status === 'error')
        ? <Tooltip title={message}>{icon}{preview}</Tooltip>
        : <span>{icon}{preview}</span>;

      return (
        <div className={infoUploadingClass} key={file.uid}>
          <div className={`${prefixCls}-list-item-info`}>
            {iconAndPreview}
          </div>
          {actions}
          <Animate transitionName="fade" component="">
            {progress}
          </Animate>
        </div>
      );
    });
    const listClassNames = classNames({
      [`${prefixCls}-list`]: true,
      [`${prefixCls}-list-${listType}`]: true,
    });
    const animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
    return (
      <Animate
        transitionName={`${prefixCls}-${animationDirection}`}
        component="div"
        className={listClassNames}
      >
        {list}
      </Animate>
    );
  }

}
