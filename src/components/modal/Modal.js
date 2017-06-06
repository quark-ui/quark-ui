/**
 * Modal Component
 * @author ryan.bian
 */
import ReactDOM from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Button from 'quark-ui/button';
import { allowMultiple } from '../../constants';
import styles from './Modal.css';
import renderTo from '../../enhancer/render-to';
import Mask from './Mask';
import Icon from '../icon';

const renderNoticeModal = (type, config = {
  title: '',
  content: '',
  closable: false
}) => {
  const wrapNode = document.createElement('div');
  const colorArr = {'info' : '#3b98e0', 'success' : '#73da7d' , 
                    'error' : '#e6445e', 'warning' : '#ffd31a'}
  document.body.appendChild(wrapNode);
  const modalProps = {
    title: (<p><Icon name={type} size={26} color={colorArr[type]} />
            <span>{config.title || type}</span>
            { config.closable ?
            <a
              styleName="modal__closable"
              href="javascript:void(0)"
              onClick={(e) => {
                ReactDOM.unmountComponentAtNode(wrapNode);
                document.body.removeChild(wrapNode);
              }}
            ><Icon name="close" size={14} color="#a6a6a6"/></a>
            : null
          }
            </p>),
    visible: true,
    closable: false,
    footer: (
      <Button
        key="confirm"
        type="primary"
        onClick={() => {
          ReactDOM.unmountComponentAtNode(wrapNode);
          document.body.removeChild(wrapNode);
        }}
      >我知道了</Button>
    ),
  };
  ReactDOM.render(
    <Modal {...modalProps}>
      
      {config.content}
    </Modal>
  , wrapNode);
};

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
    afterClose() {}
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
    children: PropTypes.isRequired

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
            ><Icon name="close" size={14} color="#a6a6a6"/></a>
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
        取消
      </Button>,
      <Button
        key="confirm"
        type="primary"
        onClick={this.handleOk}
      >
        确定
      </Button>,
    ];
    return footer === undefined ? (
      <div styleName="modal__footer">{defaultFooter}</div>
    ) : <div styleName="modal__footer">{footer}</div>;
  }

  render() {
    const { visible, width, children} = this.props;
    const modalProps = {
      style: {
        width,
      },
      styleName: `modal${visible ? '--visible' : ''}`

    };{
      return (
        <Mask visible={visible}>
          <div {...modalProps}>
            { this.renderHeader() }
            <div styleName="modal__content">{children}</div>
            { this.renderFooter() }
          </div>
        </Mask>
      );
    }
  }
}

export default Modal;
