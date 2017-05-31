## CSS 处理方式

QuarkUI 库选择使用 [css-modules](https://github.com/css-modules/css-modules) 作为 CSS 组织方案，有以下考虑：
- 避免组件之间的命名冲突
- 避免全局污染
- 更简单的样式依赖管理，使用组件不需要额外引用 CSS 样式

### 使用文档

以下对 css-modules 在组件库中常用特性做说明，完整用法请查阅[官方文档](https://github.com/css-modules/css-modules)
语法本身，css-modules 和 CSS 非常类似，同时还引入了几个新特性：

#### 作用域(scope)

`:global(.className)`(全局) 和 `:local(.className)`(局部)
如果不加限定的类名写法，默认为局部作用域

#### composes
```css
.base {
  border-style: solid;
}
.button--primary {
  composes: base;
}
```

#### 变量
变量定义在 'src/styles/theme.css' 中

```css
@import "../src/styles/theme.css";

.primary {
  background: var(--brand-primary);
}
```

#### 命名方式——[BEM](http://getbem.com/introduction/)
类名遵循 `block--modifier__status` 的方式，如
```css
.button--primary__active {}
```

### 用例
在 js 中使用，通过 import 导入 css 文件，即可在 jsx 中使用对应的样式名。

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