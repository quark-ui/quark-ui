---
author:
  name: heifade
  homepage: https://github.com/heifade/
  email: heifade@126.com
---

## Button

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### Props
|name|type|default|description|
|---|---|---|---|
|placeholder|String|'请选择'|选择框默认文字|
|type|String|dropdown|单选(dropdown),搜索(combobox)|
|style|Object|{width: 200}|{width: 100},目录支持宽度|
|disabled|bool|false|是否禁用|
|value|String|''|选中的值，与子控件Option的value对应|
|onSearch|function(value)|null|当type为combobox有效，搜索文本框内容改变时回调，用于过滤数据|
|onChange|function({value,text})|null|选中项改变时回调|
|onCancelChange|function()|null|当type为combobox有效，搜索文本框内容取消改变时回调|

### Api