---
author:
  name: yan
  homepage: https://github.com/olivianate/
---

## Notification

Notification Component.

### Props
|name|type|default|description|
|---|---|---|---|
|message|string||通知提醒标题，必选|
|description|string||通知提醒内容，必选|
|duration|number|4.5|默认 4.5 秒后自动关闭，配置为 0 则不自动关闭|
|icon|ReactNode||自定义图标|
|btn|ReactNode||自定义关闭按钮|
|placement|string|topRight|弹出位置，可选 topLeft topRight bottomLeft bottomRight|
### Api