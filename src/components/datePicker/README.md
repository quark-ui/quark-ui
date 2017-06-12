---
author:
  name: ryan.bian
  homepage: https://github.com/macisi/
  email: macisi528@gmail.com
---

## DatePicker

DatePicker Component.

### Props

#### DatePicker

|name|type|default|description|
|---|---|---|---|
|value|[moment](http://momentjs.com/)|无|日期|
|defaultValue|[moment](http://momentjs.com/)|无|默认日期|
|disabledDate|func|无|不可选择的日期|
|disabled|boolean|false|禁用|
|format|string|YYYY-MM-DD|展示日期格式，配置参考[moment](http://momentjs.com/)|
|onChange|func|无|时间发生变化回调|

#### MonthPicker
|name|type|default|description|
|---|---|---|---|
|value|[moment](http://momentjs.com/)|无|日期|
|defaultValue|[moment](http://momentjs.com/)|无|默认日期|
|disabled|boolean|false|禁用|
|format|string|YYYY-MM|展示日期格式，配置参考[moment](http://momentjs.com/)|
|onChange|func|无|时间发生变化回调|

#### RangePicker
|name|type|default|description|
|---|---|---|---|
|value|[moment](http://momentjs.com/)[]|无|日期|
|defaultValue|[moment](http://momentjs.com/)[]|无|默认日期|
|disabledDate|func|无|不可选择的日期|
|disabled|boolean|false|禁用|
|format|string|YYYY-MM-DD|展示日期格式，配置参考[moment](http://momentjs.com/)|
|onChange|func|无|时间发生变化回调|


### Api