---
author:
  name: yan
  homepage: https://github.com/october-yan/
---

## InputNumber

通过鼠标或键盘，输入范围内的数值

### Props
|name|type|default|description|
|---|---|---|---|
|min|number||最小值|
|max|number||最大值|
|value|number||当前值|
|step|number,string|1|每次改变步数，可以为小数|
|defaultValue|number||初始值|
|onChange|Function(value)||变化回调|
|disabled|boolean|false|禁用|
|formatter|function(value)||指定输入框展示值的格式|
|parser|function( string): number||指定从 formatter 里转换回数字的方式，和 formatter 搭配使用|
|style|CSSProperties||||

### Api