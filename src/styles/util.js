const assign = require('lodash/assign');
const Colr = require('colr');

function hsv(...args) {
  if (args.length === 1) {
    return `rgb(${Colr.fromHsvObject(args[0]).toRgbArray().join(', ')})`;
  }
  return `rgb(${Colr.fromHsvArray(args).toRgbArray().join(', ')})`;
}

function getBrandColors(brandColor) {
  return {
    BRAND_COLOR_LIGHT: assign({}, brandColor, {
      s: brandColor.s - 17,
      v: brandColor.v + 3,
    }),
    BRAND_COLOR_LIGHTER: assign({}, brandColor, {
      s: brandColor.s - 30,
      v: brandColor.v + 5,
    }),
    BRAND_COLOR_LIGHTEST: assign({}, brandColor, {
      s: brandColor.s - 50,
      v: 100,
    }),
    BRAND_COLOR_DARK: assign({}, brandColor, {
      s: brandColor.s + 20,
      v: brandColor.v - 5,
    }),
  };
}

exports.staticVariables = {
  /* 边框色 */
  'border-color': '#e6e6e6',

  /* 中性色 */
  'neutral-color': '#fff',

  /* 标题 主要文字 */
  'text-color-dark': '#333',
  /* 正文 说明 */
  'text-color': '#666',
  /* 辅助 次级文字 */
  'text-color-light': '#999',

  /* 链接色 */
  'link-color': '#3b98e0',

  /* 警告 */
  'warn-color': '#ffc71b',
  /* 失败 */
  'fail-color': '#fe3824',
  /* 成功 */
  'success-color': '#6ac00b',
};

exports.hsv = hsv;
exports.getBrandColors = getBrandColors;
