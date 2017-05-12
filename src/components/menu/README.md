## Menu

Menu Component.

### Props
|name|type|default|description|
|---|---|---|---|
|mode|String|inline|菜单类型，可选值：horizontal(水平的顶部导航菜单)，vertical(垂直菜单,子菜单是弹出的)，inline(垂直菜单，子菜单内嵌在菜单区域)|
|selectedKeys|string[]|[]|选中的菜单项，数组，值为key|
|defaultSelectedKeys|string[]|[]|默认选中的菜单项，数组，值为key|
|openKeys|string[]|[]|打开的菜单，数组，值为key|
|defaultOpenKeys|string[]|[]|默认打开的菜单，数组，值为key|
|onClick|function|-|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|
|onOpenChange|function|-|SubMenu 展开/关闭的回调|

### Api