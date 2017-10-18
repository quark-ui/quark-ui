/**
 * UploadList Component
 * @author heifade
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Animate from 'rc-animate';
import Icon from '../icon/Icon';
// import Tooltip from '../tooltip';
import Progress from '../progress/Progress';
// import { UploadListProps } from './interface';
import styles from './Upload.css';

const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

export default class UploadList extends React.Component {
  static displayName = 'UploadList'

  static defaultProps = {
    listType: 'text', // or picture-card
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
      size: 'mini',
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
    progressAttr: PropTypes.shape({
      strokeWidth: PropTypes.number,
      showInfo: PropTypes.bool,
      size: PropTypes.string,
    }),
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

  renderListItem(file) {
    const {
      showPreviewIcon,
      showRemoveIcon,
      locale,
      disabled,
      listType,
      prefixCls,
    } = this.props;
    let progress;
    let icon = <Icon size={12} className={styles.status} name={file.status === 'uploading' ? 'attachment' : 'attachment'} />;

    if (listType === 'picture' || listType === 'picture-card') {
      if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
        if (listType === 'picture-card') {
          icon = <div className={styles['uploading-text']}>{locale.uploading}</div>;
        } else {
          icon = <Icon className={`${prefixCls}-list-item-thumbnail`} type="picture" />;
        }
      } else {
        icon = (
          <a
            className={styles[`${prefixCls}-list-item-thumbnail`]}
            onClick={e => this.handlePreview(file, e)}
            href={file.url || file.thumbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={file.thumbUrl || file.url} alt={file.name} styleName="imgshow" /> */}
            <div className={styles.imgshow} style={{ backgroundImage: `url(${file.thumbUrl || file.url})` }} />
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
        <div className={styles[`${prefixCls}-list-item-progress`]} key="progress">
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
        className={styles[`${prefixCls}-list-item-name`]}
        onClick={e => this.handlePreview(file, e)}
        // title={file.name}
        title={message}
      >
        {file.name}
      </a>
    ) : (
      <span
        className={styles[`${prefixCls}-list-item-name`]}
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
        <Icon name="visible" size={20} className={styles.eye} />
      </a>
    ) : null;
    // picture-card 删除按钮
    const removeIcon = showRemoveIcon && !disabled ? (
      <button
        className={styles['btn-remove']}
        title={locale.removeFile}
        onClick={() => this.handleClose(file)}
      >
        <Icon name="recycle" size={20} className={styles.remove} />
      </button>
    ) : null;
    // text 删除按钮
    const removeIconCross = showRemoveIcon && !disabled ? (
      <button
        className={styles['btn-remove']}
        title={locale.removeFile}
        onClick={() => this.handleClose(file)}
      >
        <Icon name="close" size={10} className={styles.remove} />
      </button>
    ) : null;
    const actions = (listType === 'picture-card' && file.status !== 'uploading')
      ? <span className={styles[`${prefixCls}-list-item-actions`]}>{previewIcon}{removeIcon}</span>
      : removeIconCross;

    const iconAndPreview = (file.status === 'error')
      ? <span>{icon}{preview}</span>
      : <span>{icon}{preview}</span>;

    return (
      <div
        className={classnames(styles[`${prefixCls}-list-item`], styles[`${prefixCls}-list-item-${file.status}`])}
        key={file.uid}
      >
        <div className={styles[`${prefixCls}-list-item-info`]}>
          {iconAndPreview}
        </div>
        {actions}
        {progress}
      </div>
    );
  }

  render() {
    const {
      prefixCls,
      items = [],
      listType,
    } = this.props;

    return (
      <div
        className={classnames(styles[`${prefixCls}-list`], styles[`${prefixCls}-list-${listType}`])}
      >
        { items.map(file => this.renderListItem(file)) }
      </div>
    );
  }
}
