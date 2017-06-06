## Tabs

Tabs Component.

### Props
|name|type|default|description|
|---|---|---|---|
|defaultActiveKey|String|第一个面板|初始化选中面板的 key，如果没有设置 activeKey|
|onChange|Function|无|切换面板的回调|
|type|String|'line'|页签的基本样式，可选 line、card 类型|
|size|String|'default'|大小，提供 default 和 small 两种大小，仅当 type="line" 时生效。|
|tabPosition|String||页签位置，可选值有 vertical|

### Tabs.TabPane
|name|type|default|description|
|---|---|---|---|
|key|String|无|对应 activeKey|
|tab|string,ReactNode|无|选项卡头显示文字|

### Api