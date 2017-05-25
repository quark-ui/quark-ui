import assign from 'lodash/assign';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import Colr from 'colr';
import Trigger from 'quark-ui/trigger';
import Button from 'quark-ui/button';

import { allowMultiple } from '../../src/constants';
import DefaultTheme from '../../src/styles/theme';

import styles from './ThemePicker.css';

const AvailableColors = {
  Blue: { h: 206, s: 74, v: 88 },
  Orange: { h: 28, s: 79, v: 100 },
};

function hsv(...args) {
  if (args.length === 1) {
    return `rgb(${Colr.fromHsvObject(args[0]).toRgbArray().join(', ')})`;
  }
  return `rgb(${Colr.fromHsvArray(args).toRgbArray().join(', ')})`;
}

@CSSModules(styles, { allowMultiple })
export default class ThemePicker extends Component {
  constructor(props) {
    super(props);
    this.applyTheme();
  }
  applyTheme(theme) {
    const variables = {};
    if (theme) {
      const brandColor = AvailableColors[theme];
      assign(variables, {
        'brand-primary': hsv(brandColor),
        'brand-primary-light': hsv(assign({}, brandColor, {
          s: brandColor.s - 17,
          v: brandColor.v + 3,
        })),
        'brand-primary-dark': hsv(assign({}, brandColor, {
          s: brandColor.s + 20,
          v: brandColor.v - 5,
        })),
      });
    } else {
      assign(variables, DefaultTheme);
    }
    Object.keys(variables).forEach((variableName) => {
      document.documentElement.style.setProperty(`--${variableName}`, variables[variableName]);
    });
  }
  handleChangeTheme(theme) {
    this.applyTheme(theme);
  }
  renderPalette() {
    return (
      <div className={styles.ThemePicker__palette}>
        {
          Object.keys(AvailableColors).map((theme) => {
            const style = {
              backgroundColor: hsv(AvailableColors[theme]),
            };
            return (
              <span
                style={style}
                key={theme}
                className={styles.ThemePicker__colorGrid}
                onClick={this.handleChangeTheme.bind(this, theme)}
              ></span>
            );
          })
        }
      </div>
    );
  }
  render() {
    const triggerProps = {
      action: 'click',
      popup: this.renderPalette(),
      placement: ['tr', 'br'],
      offset: [0, 5],
      mouseLeaveDelay: 100,
    };
    return (
      <div styleName="ThemePicker">
        <Trigger {...triggerProps}>
          <Button type="secondary" size="normal">主题</Button>
        </Trigger>
      </div>
    );
  }
}
