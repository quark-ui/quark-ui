## Menu

Menu Component.

### Props
|name|type|default|description|
|---|---|---|---|
|type|String|inline|菜单类型，可选值：horizontal-h(水平菜单，子菜单水平)，horizontal-v(水平菜单，子菜单垂直)，vertical-h(垂直菜单，子菜单水平向右弹出)，vertical-v(垂直菜单，子菜单内嵌在菜单区域)|
|colorType|String|warm|颜色，可选值：warm(暖色)，cold(冷色)|
|selectedKeys|string[]|[]|选中的菜单项，数组，值为key|
|defaultOpenKeys|string[]|[]|默认打开的菜单，数组，值为key|
|onClick|function|null|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|
|onOpenChange|function|null|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|

### Api