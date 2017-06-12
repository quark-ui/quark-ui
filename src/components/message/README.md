## Message

Message Component.

### Props
|name|type|default|description|
|---|---|---|---|
|duration|Number|1.5|message 1.5s之后关闭|
|onClose|Function|function(){}|message 关闭之后的回调|
|type|String|'info'|message 提示类型|
### Api
组件提供了一些静态方法，使用方式和参数如下：

  - message.success(content, duration, onClose)
  - message.error(content, duration, onClose)
  - message.info(content, duration, onClose)
  - message.warning(content, duration, onClose)


#### 参数
|name|type|default|description|
|---|---|---|---|
|content|string|''|提示内容
|duration|Number|1.5|message 默认1.5s之后关闭，可通过config设置|
|onClose|Function|function(){}|message 关闭之后的回调，可通过config设置|

还提供了全局配置和全局销毁方法：

  - message.config(options)
  - message.destroty() 


#### config方法参数
|name|type|default|description|
|---|---|---|---|
|top|number|50px|消息距离顶部的距离
|duration|Number|1.5|message 默认1.5s之后关闭，可通过config设置|
|getContainer|Function|function(){}|配置渲染节点的输出位置|

