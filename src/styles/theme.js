const assign = require('lodash/assign');
const Colr = require('colr');

const BRAND_COLOR = {
  h: 206,
  s: 74,
  v: 88,
};
const BRAND_COLOR_LIGHT = assign({}, BRAND_COLOR, {
  s: BRAND_COLOR.s - 17,
  v: BRAND_COLOR.v + 3,
});
const BRAND_COLOR_LIGHTER = assign({}, BRAND_COLOR, {
  s: BRAND_COLOR.s - 30,
  v: BRAND_COLOR.v + 5,
});
const BRAND_COLOR_LIGHTEST = assign({}, BRAND_COLOR, {
  s: BRAND_COLOR.s - 50,
  v: BRAND_COLOR.v + 6,
});
const BRAND_COLOR_DARK = assign({}, BRAND_COLOR, {
  s: BRAND_COLOR.s + 20,
  v: BRAND_COLOR.v - 5,
});

function hsv(...args) {
  if (args.length === 1) {
    return `rgb(${Colr.fromHsvObject(args[0]).toRgbArray().join(', ')})`;
  }
  return `rgb(${Colr.fromHsvArray(args).toRgbArray().join(', ')})`;
}

module.exports = {
  /* 品牌色 */
  'brand-primary': hsv(BRAND_COLOR),
  /* 品牌色——浅 */
  'brand-primary-light': hsv(BRAND_COLOR_LIGHT),
  /* 品牌色——浅2 */
  'brand-primary-lighter': hsv(BRAND_COLOR_LIGHTER),
  /* 品牌色——浅3 */
  'brand-primary-lightest': hsv(BRAND_COLOR_LIGHTEST),
  /* 品牌色——深 */
  'brand-primary-dark': hsv(BRAND_COLOR_DARK),

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
  'link-color': hsv(206, 74, 88),

  /* 警告 */
  'warn-color': hsv(45, 89, 100),
  /* 失败 */
  'fail-color': hsv(6, 86, 100),
  /* 成功 */
  'success-color': hsv(89, 94, 75),
};
