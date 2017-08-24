/**
 * Modal Component
 * @author ryan.bian
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Modal.css';
import renderTo from '../../enhancer/render-to';
import Button from '../button';
import Mask from './Mask';
import Icon from '../icon';
import Animation from '../animation';
import renderNoticeModal from './noticeModal';

@renderTo()
@CSSModules(styles, { allowMultiple })
class Modal extends Component {
  static displayName = 'Modal'

  static defaultProps = {
    title: '',
    closable: true,
    width: 520,
    visible: false,
    footer: undefined,
    onOk() {},
    onCancel() {},
    afterClose() {},
  }
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    closable: PropTypes.bool,
    width: PropTypes.number,
    visible: PropTypes.bool,
    footer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    afterClose: PropTypes.func,

  }

  static info(config) {
    renderNoticeModal('info', config);
  }
  static success(config) {
    renderNoticeModal('success', config);
  }
  static error(config) {
    renderNoticeModal('error', config);
  }
  static warning(config) {
    renderNoticeModal('warning', config);
  }
  constructor(props) {
    super(props);
    this.state = {
      maskVisible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible && this.props.visible) {
      this.props.afterClose();
    }
    if (nextProps.visible && !this.props.visible) {
      this.setState({
        maskVisible: true,
      });
    }
  }

  handleOk = (e) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    }
  }

  handleCancel = (e) => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(e);
    }
  }

  renderHeader() {
    const { title, closable } = this.props;
    const hasHeader = title || closable;
    if (hasHeader) {
      return (
        <div styleName="modal__header">
          {title}
          { closable ?
            <a
              styleName="modal__closable"
              href=""
              onClick={(e) => {
                e.preventDefault();
                this.handleCancel(e);
              }}
            ><Icon name="close" size={18} /></a>
            : null
          }
        </div>
      );
    }
    return null;
  }

  renderFooter() {
    const { footer } = this.props;
    const defaultFooter = [
      <Button
        key="cancel"
        type="secondary"
        onClick={this.handleCancel}
      >
        取&emsp;消
      </Button>,
      <Button
        key="confirm"
        type="primary"
        onClick={this.handleOk}
      >
        确&emsp;定
      </Button>,
    ];
    return footer === undefined ? (
      <div styleName="modal__footer">{defaultFooter}</div>
    ) : <div styleName="modal__footer">{footer}</div>;
  }

  render() {
    const { width, visible, children } = this.props;
    const { maskVisible } = this.state;
    const modalProps = {
      style: {
        width,
      },
      styleName: classnames('modal', {
        'modal--visible': visible,
      }),
    };
    return (
      <Mask visible={maskVisible}>
        <Animation
          in={visible}
          motion={'flipX'}
          style={{
            height: '100%',
          }}
          onExited={() => {
            this.setState({
              maskVisible: false,
            });
          }}
        >
          <div {...modalProps}>
            { this.renderHeader() }
            <div styleName="modal__content">{children}</div>
            { this.renderFooter() }
          </div>
        </Animation>
      </Mask>
    );
  }
}

export default Modal;
