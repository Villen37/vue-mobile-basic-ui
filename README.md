## vue-mobile-basic-ui
针对Vue开发中常见的基础功能进行封装，诸如toast、下拉等不需要设计师过多参与的交互，引入到项目中，快速搭建项目和支持业务。

为保证移动端UI的兼容性，我们把html的"font-size:100px"，页面通过rem做样式设计。

开源地址：https://github.com/Villen37/vue-mobile-basic-ui
## 项目调试
 ```javascript
 npm run src/view
 // 进入http://localhost.dev.com:9000/index.html
 ```

## 基本用法

 ```javascript
 // 下载
 npm install vue-mobile-basic-ui
 ```

在入口函数内 插入代码全局注册(组件即不需单独引用，同时自动绑定方法在vue.prototype)
 ```javascript
 import 'vue-mobile-basic-ui/lib/style/vueMobialBasicUi.min.css'
 import vueMobialBasicUi from 'vue-mobile-basic-ui'
 Vue.use(vueMobialBasicUi);
 ```

## 具体组件

#### vbToast  信息提示

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


#### vbScrollStop  滚动后停止

```javascript
import { vbScrollStop } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|------------------------|----------------------------
propCoinNum    |number      |要显示的数字     |0                  |
propIcon       |string      |左侧可以显示图片  |——                    | ——

propIcon为空的时候可以自定义slot。使用时，最好外面包一层容器

#### vbPulldwonRefresh  下拉刷新，整个页面上的使用

```javascript
import { vbPulldwonRefresh } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|--------------------|----------------------------
propState      |string      |是否生效        |-                   | no:禁用 0:隐藏 1:展示
propKey0       |string      |展示文案        |下拉即可刷新           | ——
propKey1       |string      |展示文案        |释放即可刷新           | ——
propKey2       |string      |展示文案        |加载中                | ——

touchEnd的回调 @listeningEmit="自己的方法"，也可以通过执行回调里的option.fun，来结束下拉动画

#### vbRollList 数据单行滚动

```javascript
import { vbRollList } from 'vue-mobile-basic-ui'
```
参数           |类型           |说明                 |默认值                  |可选值
---------------|------------|---------------|--------------------|----------------------------
propData       |array       |滚动的list      |-                   | 
propIcon       |string      |设置图标         |               | ——

支持slot

#### vbModalContainer  modal的黑色半透明背景的容器

```javascript
import { vbModalContainer } from 'vue-mobile-basic-ui'
```
参数            |类型           |说明                 |默认值      |可选值
---------------|---------------|---------------------|----------|----------------------------
propShow       |boolean      |           |是否展示                  |true/false
propCanClick   |boolean      |           |是否可以点击空白关闭        |true/false
onClose        |Function    |关闭回调        |——                    | ——

slot自己把内容丢进去

#### vbModalDialogue  modal的黑色半透明背景的容器

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


#### vbProgress 进度条

```javascript
import { vbProgress } from 'vue-mobile-basic-ui'
```
参数            |类型           |说明                 |默认值      |可选值
---------------|---------------|---------------------|----------|----------------------------
propNumArr       |array       |进度数字列表      |-                   | 
propTopArr       |array       |顶部描述       |-                   | 
propBotArr       |array       |底部描述      |-                   | 
propCurrent      |number      |当前值      |-                   | 
propDefaultMark  |Boolean     |进度头有个默认的圆点   |true                   | ——

slot 可以写一个气泡，位置是跟随进度条的，如果不用，propDefaultMark设置为false  
propTopArr、propBotArr中的元素可以是html，满足多种样式需求

#### vbGrid9 9宫格抽奖

```javascript
import { vbGrid9 } from 'vue-mobile-basic-ui'
```
参数            |类型           |说明                 |默认值      |可选值
---------------|---------------|---------------------|----------|----------------------------
propData         |array       |8个奖品0-7      |icon，name                   | 
propRights       |number      |权益次数       |-                   | 
propFuncOver       |function  |动画结束后执行      |-                   | 
propFuncNot      |function    |没有权益执行      |-                   | 
propFuncClick      |function    |点击中间执行      |-                   | 
propOrder         |number     |中奖的索引   |                   | ——
propReset         |number string     |更换不同值就行   |  | 
propTips         |object     |over，noright 默认的操作提醒文案,设置为空就不提示了   |  | 


如果定义了propFuncOver，就必须有propReset，手动重置动画  
slot 可以写中间的dom  
开放几个里面宫格class，方便二次改动：  
vb-grid9-item：常态  
vb-grid9-light：高亮状态  
vb-grid9-center：中间的格子  



#### 备注：暂时不建议使用 " this.$** "的方法直接调用，这种方式会频繁插入和删除节点引起重排

