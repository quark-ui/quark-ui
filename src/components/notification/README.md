---
author:
  name: yan
  homepage: https://github.com/olivianate/
---

## Notification

全局展示通知提醒信息.

### 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：
较为复杂的通知内容。
带有交互的通知，给出用户下一步的行动点。
系统主动推送。


### Props
|name|type|default|description|
|---|---|---|---|
|message|string||通知提醒标题，必选|
|description|string||通知提醒内容，必选|
|duration|number|4.5|默认 4.5 秒后自动关闭，配置为 0 则不自动关闭|
|icon|ReactNode||自定义图标|
|btn|ReactNode||自定义关闭按钮|
|placement|string|topRight|弹出位置，可选 topLeft topRight bottomLeft bottomRight|


#### notification.config(options)
|name|type|default|description|
|---|---|---|---|
|placement|string|topRight|弹出位置，可选 topLeft topRight bottomLeft bottomRight|
|top|number|24|消息从顶部弹出时，距离顶部的位置，单位像素|
|bottom|number|24|消息从底部弹出时，距离底部的位置，单位像素|
|duration|number|4.5|默认自动关闭延时，单位秒|


### Api