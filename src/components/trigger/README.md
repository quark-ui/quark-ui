---
author:
  name: ryan.bian
  homepage: https://github.com/macisi/
  email: macisi528@gmail.com
---

## Trigger

触发器。

### Props
|name|type|default|description|
|---|---|---|---|
|action| `hover` or `click`|`hover`|触发类型|
|placement|`array`||弹出层定位|
|offset|`array`|[0, 0]|定位偏移|
|popup|`string` or `react.element`|弹出层内容|
|popupVisible|bool|undefined|控制弹出层visible|
|mouseEnterDelay|number|0|鼠标进入延时|
|mouseLeaveDelay|number|100|鼠标移出延时|
|onPopupVisibleChange|`function`|弹出层visible变化时触发|