/**
 * Modal Component
 * @author ryan.bian
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Modal.css';
import renderTo from '../../utils/render-to';
import Button from '../button/';
import Mask from './Mask';

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

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.visible && prevProps.visible) {
      this.props.afterClose();
    }
  }

  handleOk(e) {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    }
  }

  handleCancel(e) {
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
            >X</a>
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
        size="small"
        onClick={this.handleCancel}
      >
        取消
      </Button>,
      <Button
        key="confirm"
        type="primary"
        size="small"
        onClick={this.handleOk}
      >
        确定
      </Button>,
    ];
    return footer === undefined ? (
      <div styleName="modal__footer">{defaultFooter}</div>
    ) : null;
  }

  render() {
    const { visible, width, children } = this.props;
    const modalProps = {
      style: {
        width,
      },
      styleName: `modal${visible ? '--visible' : ''}`,
    };

    return (
      <Mask visible={visible}>
        <div {...modalProps}>
          { this.renderHeader() }
          {children}
          { this.renderFooter() }
        </div>
      </Mask>
    );
  }
}

export default Modal;
