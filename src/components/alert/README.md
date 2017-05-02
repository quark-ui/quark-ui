## Alert

Alert Component.

type:'info',
    closable:false,
    closeText:'X',
    message:'',
    description:'',
    onClose(){},
    showIcon:false,

### Props
|name|type|default|description|
|---|---|---|---|
|type|string|'info'|指定警告提示的样式，有四种选择 success、info、warning、error|
|closable|boolean|false|	默认不显示关闭按钮|
|closeText|string or ReactNode|无|自定义关闭按钮|
|message|string or ReactNode|无|警告提示内容|
|description|string or ReactNode|无|警告提示的辅助性文字介绍|
|onClose|Function|无|关闭时触发的回调函数|
|showIcon|boolean|false|是否显示辅助图标|
### Api