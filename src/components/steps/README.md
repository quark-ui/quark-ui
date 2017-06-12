---
author:
  name: grootfish
  homepage: https://github.com/grootfish/
  email: yuyangjie0@163.com
---

## Steps

Steps Component.

### Props
#### Steps 整体步骤条
|name|type|default|description|
|---|---|:---:|:---:|
|current|number|0|指定当前步骤，从 0 开始记数|
|status|string|process|指定当前步骤的状态，可选 `wait` `process` `finish`|
|direction|string|horizontal|指定步骤条方向。默认水平|

#### Steps.Step 步骤条内的每一个步骤
|name|type|default|description|
|---|---|:---:|:---:|
|status|string|wait|指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。|
|title|string or ReactNode|无|标题|
|description|string or ReactNode|无|描述，可选|
### Api