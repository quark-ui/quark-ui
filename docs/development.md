## 参与开发

### 环境准备

1. 确认本地安装 node 环境
2. 全局安装 `yo` 和 `generator-quarkui`
```sh
npm i -g yo generator-quarkui
```

### 项目初始化
1. fork `quark-ui`
2. clone fork后的代码到本地
3. 安装依赖 `npm i`
4. 假定你要开发一个组件 `someComponent`, 执行命令 
  ```sh
  yo quarkui
  ```
5. 按提示输入
6. `src/components` 下会生成对应组件目录
7. 修改 `demo/QuarkUiDemo.js`, 把你的组件加到 demo 列表里

### 开始开发
```
npm start
```

### 注意事项
1. 组件中需要依赖其它 quark-ui 组件，使用 `import ComponentName from 'quark-ui/componentName'` 形式，不要使用相对路径。


### 提交代码
1. git 命令正常提交代码
2. 使用 PR 方式提交你的组件

>> [创建一个PR](https://github.com/geeeeeeeeek/git-recipes/wiki/3.3-%E5%88%9B%E5%BB%BAPull-Request)

>> [PR 说明](https://www.zhihu.com/question/21682976)
