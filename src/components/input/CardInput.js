/**
 * Input Component
 * @author yan
 */
import { PureComponent } from 'react';
import InputMask from 'inputmask-core';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Input.css';

const KEYCODE_Z = 90;
const KEYCODE_Y = 89;

function isUndo(e) {
  return (
    (e.ctrlKey || e.metaKey) &&
    e.keyCode === (e.shiftKey ? KEYCODE_Y : KEYCODE_Z)
  );
}

function isRedo(e) {
  return (
    (e.ctrlKey || e.metaKey) &&
    e.keyCode === (e.shiftKey ? KEYCODE_Z : KEYCODE_Y)
  );
}
function getSelection(el) {
  let start,
    end,
    rangeEl,
    clone;

  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    try {
      el.focus();
      rangeEl = el.createTextRange();
      clone = rangeEl.duplicate();

      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);

      start = clone.text.length;
      end = start + rangeEl.text.length;
    } catch (e) {
      /* not focused or not visible */
    }
  }

  return { start, end };
}

function setSelection(el, selection) {
  let rangeEl;

  try {
    if (el.selectionStart !== undefined) {
      el.focus();
      el.setSelectionRange(selection.start, selection.end);
    } else {
      el.focus();
      rangeEl = el.createTextRange();
      rangeEl.collapse(true);
      rangeEl.moveStart('character', selection.start);
      rangeEl.moveEnd('character', selection.end - selection.start);
      rangeEl.select();
    }
  } catch (e) {
    /* not focused or not visible */
  }
}

@CSSModules(styles, { allowMultiple })
class CardInput extends PureComponent {
  static displayName = 'CardInput';

  static defaultProps = {
    size: 'normal',
    disabled: false,
    value: '',
    onChange() {},
  };

  static propTypes = {
    size: PropTypes.oneOf(['normal', 'large', 'small']),
    disabled: PropTypes.bool,
    mask: PropTypes.string.isRequired,
    formatCharacters: PropTypes.object,
    placeholderChar: PropTypes.string,
    onChange: PropTypes.func,
  };

  componentWillMount() {
    const options = {
      pattern: this.props.mask,
      value: this.props.value,
      formatCharacters: this.props.formatCharacters,
    };
    if (this.props.placeholderChar) {
      options.placeholderChar = this.props.placeholderChar;
    }
    this.mask = new InputMask(options);
  }

  onChange = (e) => {
    const maskValue = this.mask.getValue();
    if (e.target.value !== maskValue) {
      // Cut or delete operations will have shortened the value
      if (e.target.value.length < maskValue.length) {
        const sizeDiff = maskValue.length - e.target.value.length;
        this.mask.selection = getSelection(this.input);
        this.mask.selection.end = this.mask.selection.start + sizeDiff;
        this.mask.backspace();
      }
      const value = this.getDisplayValue();
      e.target.value = value;
      if (value) {
        setSelection(this.input, this.mask.selection);
      }
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  onKeyPress = (e) => {
    // console.log('onKeyPress', JSON.stringify(getSelection(this.input)), e.key, e.target.value)

    // Ignore modified key presses
    // Ignore enter key to allow form submission
    if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
      return;
    }

    e.preventDefault();
    this.mask.selection = getSelection(this.input);

    if (this.mask.input(e.key || e.data)) {
      e.target.value = this.mask.getValue();
      // this._updateInputSelection()

      setSelection(this.input, this.mask.selection);

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  onKeyDown = (e) => {
    // console.log('onKeyDown', JSON.stringify(getSelection(this.input)), e.key, e.target.value)
    if (isUndo(e)) {
      e.preventDefault();
      if (this.mask.undo()) {
        e.target.value = this.getDisplayValue();
        setSelection(this.input, this.mask.selection);
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    } else if (isRedo(e)) {
      e.preventDefault();
      if (this.mask.redo()) {
        e.target.value = this.getDisplayValue();
        setSelection(this.input, this.mask.selection);
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      this.mask.selection = getSelection(this.input);
      if (this.mask.backspace()) {
        const value = this.getDisplayValue();

        e.target.value = value;
        if (value) {
          setSelection(this.input, this.mask.selection);
        }
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
    }
  };

  onPaste = (e) => {
    // console.log('onPaste', JSON.stringify(getSelection(this.input)), e.clipboardData.getData('Text'), e.target.value)
    e.preventDefault();
    this.mask.selection = getSelection(this.input);
    // getData value needed for IE also works in FF & Chrome
    if (this.mask.paste(e.clipboardData.getData('Text'))) {
      e.target.value = this.mask.getValue();
      // Timeout needed for IE
      setSelection(this.input, this.mask.selection);
      // setTimeout(function(){setSelection(this.input, this.mask.selection)}, 0)
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  getDisplayValue = () => {
    const value = this.mask.getValue();
    return value === this.mask.emptyValue ? '' : value;
  };

  getEventHandlers = () => ({
    onChange: this.onChange,
    onKeyDown: this.onKeyDown,
    onPaste: this.onPaste,
    onKeyPress: this.onKeyPress,
  });

  render() {
    const ref = r => this.input = r;
    const maxLength = this.mask.pattern.length;
    const value = this.getDisplayValue();
    const eventHandlers = this.getEventHandlers();
    const {
      disabled,
      size = maxLength,
      placeholder = this.mask.emptyValue,
    } = this.props;

    const { placeholderChar, formatCharacters, ...cleanedProps } = this.props;
    const inputProps = {
      ...cleanedProps,
      ...eventHandlers,
      ref,
      maxLength,
      value,
      size,
      placeholder,
      styleName: `${disabled ? 'input__disabled' : ''} input__${size}`,
    };

    return <input {...inputProps} />;
  }
}
export default CardInput;
