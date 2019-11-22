# vue-mobile-basic-ui
在VUE开发中有一些组件ui其实不需要区分平台和类型，这里做了一些封装，可以应用在一些简单交互上，快捷方便。
### 测试阶段。。。

html的"font-size:100px"下，UI正常使用

## 基本用法

在入口函数内 插入代码全局注册(组件即不需单独引用，同时自动绑定方法在vue.prototype)
 ```javascript
 import 'vue-mobile-basic-ui/lib/style/vueMobialBasicUi.min.css'
 import vueMobialBasicUi from 'vue-mobile-basic-ui'
 Vue.use(vueMobialBasicUi);
 ```

## 具体组件

### Toast  信息提示

```javascript
 // 如果组件库全局注册
 this.$toast(Object options)
 // 若没有
  import { toast } from 'vue-mobile-basic-ui'
  ```
   参数           |类型           |说明                 |默认值                  |可选值
   ---------------|---------------|---------------------|------------------------|----------------------------
   type           |string         |提示类型             |——                    |success/error/warning/regret
   delayCount     |int            |显示多久(ms)         |2000                    | ——
   icon           |string         |自定义icon地址       |——                    | ——
   msg            |string         |提示内容             |——                    | ——
   onClose        |Function       |关闭回调             |——                    | ——

### PullDownRefresh  下拉刷新

```javascript
  import { PullDownRefresh } from 'vue-mobile-basic-ui'
  ```
