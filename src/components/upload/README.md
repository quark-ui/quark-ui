---
author:
  name: heifade
  homepage: https://github.com/heifade/
---

## Upload

Upload Component.

### Props
|name|type|default|description|
|---|---|---|---|
|name|String|file|发到后台的文件参数名|
|defaultFileList|object[]|[]|默认已经上传的文件列表|
|action|String|''|必选参数, 上传的地址|
|data|object|function(file)|null|上传所需参数或返回上传参数的方法|
|headers|object|null|设置上传的请求头部，IE10 以上有效|
|showUploadList|bool or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }|true|是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon|
|multiple|bool|false|是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。|
|accept|String|''|接受上传的文件类型|
|beforeUpload|(file, fileList) => boolean 或 Promise|null|上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE。|
|customRequest|Function|null|通过覆盖默认的上传行为，可以自定义自己的上传实现|
|onChange|Function|null|上传文件改变时的状态，详见 onChange|
|listType|String|'text'|上传列表的内建样式，支持两种基本样式 text or picture-card|
|onPreview|Function(file)|null|点击文件链接或预览图标时的回调|
|onRemove|Function(file): boolean 或 Promise|null|点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。|
|disabled|bool|false|是否禁用|
|withCredentials|bool|false|上传请求时是否携带 cookie|
|onResponse|Function(response)|默认根据下面结构处理：{"result":"success","msg":"上传成功"}|根据服务端返回的内容，判断是否上传成功|



### Api