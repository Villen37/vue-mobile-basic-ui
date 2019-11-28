# vue-mobile-basic-ui
在VUE开发中有一些组件ui其实不需要区分平台和类型，这里做了一些封装，可以应用在一些简单交互上，快捷方便。

html的"font-size:100px"下，UI正常使用

#### 使用：npm install vue-mobile-basic-ui

## 基本用法

在入口函数内 插入代码全局注册(组件即不需单独引用，同时自动绑定方法在vue.prototype)
 ```javascript
 import 'vue-mobile-basic-ui/lib/style/vueMobialBasicUi.min.css'
 import vueMobialBasicUi from 'vue-mobile-basic-ui'
 Vue.use(vueMobialBasicUi);
 ```

## 具体组件

### vbToast  信息提示

```javascript
// 如果组件库全局注册
this.$vbToast(Object options)
// 若没有
import { vbToast } from 'vue-mobile-basic-ui'
```
参数            |类型           |说明                 |默认值      |可选值
---------------|---------------|---------------------|----------|----------------------------
propName       |string         |transition           |fade      |
propVisible    |string         |显示与否              |none      | 只要值不同即可，这里可用时间戳
propDelay      |number         |延迟时间              |1800      | ——
propIcon       |string         |icon                 |——                    | ——
propMsg        |string         |提示内容             |——                    | ——
onClose        |Function       |关闭回调             |——                    | ——

### vbCoverLoading  加载loading，页面覆盖

```javascript
import { vbCoverLoading } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|------------------------|----------------------------
propShow       |boolean      |           |是否展示                  |true/false
onClose        |Function    |关闭回调        |——                    | ——
propDefault    |boolean     |true           |如果false，就自己写内部图文，以下不生效| ——
propImgLoading |string      |loading图      |本地图              | ——
propImgBreak   |string      |破裂图          |本地图              | ——
onReload       |Function    |点击重试        |——                    | ——


### vbScrollStop  滚动后停止

```javascript
import { vbScrollStop } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|------------------------|----------------------------
propCoinNum    |number      |要显示的数字     |0                  |
propIcon       |string      |左侧可以显示图片  |——                    | ——

propIcon为空的时候可以自定义slot。使用时，最好外面包一层容器

### vbPulldwonRefresh  下拉刷新，整个页面上的使用

```javascript
import { vbPulldwonRefresh } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|--------------------|----------------------------
propState      |string      |是否生效        |-                   | no,禁用 0，恢复隐藏
propKey0       |string      |展示文案        |下拉即可刷新           | ——
propKey1       |string      |展示文案        |释放即可刷新           | ——
propKey2       |string      |展示文案        |加载中                | ——

touchEnd的回调 @listeningEmit="自己的方法"，也可以通过执行回调里的option.fun，来结束下拉动画

### vbRollList  下拉刷新，整个页面上的使用

```javascript
import { vbRollList } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|--------------------|----------------------------
propData       |array       |滚动的list      |-                   | 
propIcon       |string      |设置图标         |               | ——

支持slot

### vbModalContainer  modal的黑色半透明背景的容器

```javascript
import { vbModalContainer } from 'vue-mobile-basic-ui'
```
参数            |类型           |说明                 |默认值      |可选值
---------------|---------------|---------------------|----------|----------------------------
propShow       |boolean      |           |是否展示                  |true/false
onClose        |Function    |关闭回调        |——                    | ——

slot自己把内容丢进去

### vbModalDialogue  modal的黑色半透明背景的容器

```javascript
// 如果组件库全局注册
this.$vbModal(Object options)
//或者
import { vbModalDialogue } from 'vue-mobile-basic-ui'
```
| 参数           |类型              |说明                   |默认值                      |可选值
-----------------|------------------|-----------------------| ---------------------------|------
|propBgClass  |string            |modal遮罩层的样式类    |default-bg-container        |——
|propTitle           |string            |标题                   |——                        |——
|propContent         |string/VNode      |内容                   |——                        |——
|propTip         |string            |提示标签               |——                        |——
|propConfirmText  |string            |确认按钮文案           |确认                        |——
|propCancelText   |string            |取消按钮文案           |取消                        |——
|propVisible     |string            |是否可见               |none                        |'任意字符'/none
|onClose         |Function          |modal关闭回调          |——                        |——
|onCancel        |Function          |取消回调               |——                        |——
|onConfirm       |Function          |确认回调               |——                        |——
|showMask        |Boolean           |是否显示遮罩           |true                        |true/false
|showCloseIcon   |Boolean           |是否显示关闭icon       |true                        |true/false
|showConfirmBtn  |Boolean           |是否显示确认按钮       |true                        |true/false
|showCancelBtn   |Boolean           |是否显示取消按钮       |true                        |true/false
|isCanClickMask  |Boolean           |是否点击遮罩关闭       |true                        |true/false


#### 备注：暂时不建议使用 " this.$** ""的方法直接调用，这种方式会频繁插入和删除节点引起重排

