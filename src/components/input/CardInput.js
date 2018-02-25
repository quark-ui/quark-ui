/**
 * Input Component
 * @author yan
 */
import React, { PureComponent } from 'react';
import InputMask from 'inputmask-core';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
// import styles from './Input.css';

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
  let start;
  let end;
  let rangeEl;
  let clone;

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

const styles = theme => ({
  base: {
    width: '100%',
    margin: 0,
    height: 28,
    cursor: 'text',
    fontSize: 14,
    lineHeight: 1.5,
    color: theme['text-color'],
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: `1px solid ${theme['border-color']}`,
    borderRadius: 4,
    transition: 'all .3s',
    boxSizing: 'border-box',
    '&:focus, &:hover': {
      borderColor: theme['brand-primary-light'],
    },
    '&::-moz-placeholder': {
      color: '#bcbcbc',
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: '#bcbcbc',
    },
    '&::-webkit-input-placeholder': {
      color: '#bcbcbc',
    },
  },
  input__disabled: {
    composes: ['$base', '$disabled'],
  },
  input__large: {
    composes: ['$base', '$large'],
  },
  input__normal: {
    composes: ['$base', '$normal'],
  },
  input__small: {
    composes: ['$base', '$small'],
  },
  disabled: {
    background: '#f5f5f5',
    borderColor: theme['border-color'],
    color: '#999',
    cursor: 'not-allowed',
  },
  normal: {
    padding: '6px 7px',
    height: 34,
  },
  large: {
    padding: '6px 7px',
    height: 40,
  },
  small: {
    padding: '1px 7px',
    height: 26,
  },
});

@injectSheet(styles)
class CardInput extends PureComponent {
  static displayName = 'CardInput';

  static defaultProps = {
    size: 'normal',
    disabled: false,
    mask: '1111-1111-1111-1111',
    value: '',
  };

  static propTypes = {
    size: PropTypes.oneOf(['normal', 'large', 'small']),
    disabled: PropTypes.bool,
    mask: PropTypes.string.isRequired,
    formatCharacters: PropTypes.object,
    placeholderChar: PropTypes.string,
    onChange: PropTypes.func
  };

  componentWillMount() {
    const options = {
      pattern: this.props.mask,
      value: this.props.value,
      formatCharacters: this.props.formatCharacters
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
    e.preventDefault();
    this.mask.selection = getSelection(this.input);
    if (this.mask.paste(e.clipboardData.getData('Text'))) {
      e.target.value = this.mask.getValue();
      setSelection(this.input, this.mask.selection);
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
    const ref = r => (this.input = r);
    const maxLength = this.mask.pattern.length;
    const value = this.getDisplayValue();
    const eventHandlers = this.getEventHandlers();
    const {
      disabled,
      size = maxLength,
      placeholder = this.mask.emptyValue,
    } = this.props;

    const { classes, placeholderChar, formatCharacters, ...cleanedProps } = this.props;
    const inputProps = {
      ...cleanedProps,
      ...eventHandlers,
      ref,
      maxLength,
      value,
      size,
      placeholder,
      className: classnames(
        classes[`${disabled ? 'input__disabled' : ''}`],
        classes[`input__${size}`],
      ),
    };

    return <input {...inputProps} />;
  }
}
export default CardInput;
