## Modal

Modal Component.

### Props
|name|type|default|description|
|---|---|---|---|
|title|string|--|对话框标题
|closable|boolean|true|是否显示关闭按钮
|width|number|520|对话框宽度
|visible|boolean|false|对话框是否显示
|footer|element|--|对话框底部按钮
|onOk|func|--|确认按钮触发事件
|onCancel|func|--|取消按钮触发事件
|afterClose|func|--|对话框关闭后事件

### Api
#### Modal.method()
- 包括：
- Modal.info
- Modal.success
- Modal.error
- Modal.warning
- 以上均为一个函数，参数为object，具体属性如下:

|name|type|default|description|
|---|---|---|---|
|title|string|info/success/eror/warning|对话框标题
|content|string|--|对话框内容
|closable|boolean|false|是否显示关闭按钮