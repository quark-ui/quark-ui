## CSS 处理方式

QuarkUI 库选择使用 [css-modules](https://github.com/css-modules/css-modules) 作为 CSS 组织方案，有以下考虑：
- 避免组件之间的命名冲突
- 避免全局污染
- 更简单的样式依赖管理，使用组件不需要额外饮用 CSS 样式

### 使用文档

css-modules 和 CSS 非常类似。
除了常规语法，还引入以下概念：

#### 作用域(scope)

`:global(.className)`(全局) 和 `:local(.className)`(局部)
默认的类名写法，也是局部作用域

#### 变量
使用 `postcss-modules-values` 提供处理变量能力，公共和主题相关 CSS 文件放在 `styles` 目录下

```css
@value theme: '../../styles/theme.css';
@value brand-primary, border-color from theme;

.primary {
  background: brand-primary;
  border-color: brand-primary;
}
```

#### 命名方式——[BEM](http://getbem.com/introduction/)
类名遵循 `block--modifier__status` 的方式，如
```css
.button--primary__active {}
```

### 用例

```js
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Button.css';

@CSSModules(styles, { allowMultiple })
class Button extends PureComponent {
  render() {
    return <button styleName="button"></button>
  }
}
```