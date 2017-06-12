---
author:
  name: grootfish
  homepage: https://github.com/grootfish/
  email: yuyangjie0@163.com
---

## Radio

Radio Component.

### Props
#### Radio
|name|type|default|description|
|---|---|---|---|
|checked|boolean|false|指定当前是否选中|
|defaultChecked|boolean|false|初始是否选中|
|value|any|无|根据 value 进行比较，判断是否选中|

#### RadioGroup 
|name|type|default|description|
|---|---|:---:|:---:|
|onChange|Function|-|选项变化时的回调函数|
|value|any|-|用于设置当前选中的值|
|defaultValue|any|-|默认选中的值|
|options|string[] or Array|-|以配置形式设置子元素|
### Api