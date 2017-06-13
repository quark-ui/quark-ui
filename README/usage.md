## Quick Start

### 方式一

直接在页面中引入 cdn 上的 universal 包，这个时候需注意全局 windows 对象中需包含 `React` 和 `ReactDOM`

```html
<script src="https://unpkg.com/quark-ui"></script>
``` 


### 方式二

1. 使用 npm 安装到项目依赖中。

```sh
npm i -S quark-ui
```

2. 推荐使用 `webpack` 作为依赖解析环境，配合 esmodule 语法加载对应组件，按需加载组件，避免整包引入。

```js
import 'quark-ui/lib/button.css';
import Button from 'quark-ui/lib/button';

ReactDOM.render(<Button>按钮</Button>, document.getElementById('App'));
``` 

3. 主题选择

QuarkUI 支持多主体，目前自带 `蓝色` 和 `橙色` 两套主题色，可在引入 css 时选择。
后续也考虑支持更多的主题色，包括完全自定义方案，以满足不同设计风格需求。

```js
// 默认蓝色主题
import 'quark-ui/lib/button.css';
// 橙色主题
import 'quark-ui/lib/button.orange.css';
```