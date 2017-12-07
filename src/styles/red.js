const assign = require('lodash/assign');
const { staticVariables, hsv, getBrandColors } = require('./util');

const BRAND_COLOR = {
  h: 359,
  s: 86,
  v: 76,
};

const BrandColors = getBrandColors(BRAND_COLOR);

module.exports = assign({
  /* 品牌色 */
  'brand-primary': hsv(BRAND_COLOR),
  /* 品牌色——浅 */
  'brand-primary-light': hsv(BrandColors.BRAND_COLOR_LIGHT),
  /* 品牌色——浅2 */
  'brand-primary-lighter': hsv(BrandColors.BRAND_COLOR_LIGHTER),
  /* 品牌色——浅3 */
  'brand-primary-lightest': hsv(BrandColors.BRAND_COLOR_LIGHTEST),
  /* 品牌色——深 */
  'brand-primary-dark': hsv(BrandColors.BRAND_COLOR_DARK),
}, staticVariables);
