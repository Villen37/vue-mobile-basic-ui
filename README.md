# vue-mobile-basic-ui
将新闻极速版中活动的一些vue基础组件进行封装。(所有样式基于750px设计稿)


## 基本用法

在入口函数内 插入代码全局注册(组件即不需单独引用，同时自动绑定方法在vue.prototype)
 ```javascript
 import '@newap/vue-mobile-basic-ui/lib/style/vueMobialBasicUi.min.css'
 import vueMobialBasicUi from '@newap/vue-mobile-basic-ui'
 Vue.use(vueMobialBasicUi);
 ```

## 具体组件

### Modal 弹框
```javascript
import {Modal} from '@newap/vue-mobile-basic-ui'
<modal />
 ```
| 参数           |类型              |说明                   |默认值                      |可选值
-----------------|------------------|-----------------------| ---------------------------|------
|bgContainerCls  |string            |modal遮罩层的样式类    |default-bg-container        |——
|title           |string            |标题                   |——                        |——
|content         |string/VNode      |内容                   |——                        |——
|tipText         |string            |提示标签               |——                        |——
|confirmBtnText  |string            |确认按钮文案           |确认                        |——
|cancelBtnText   |string            |取消按钮文案           |取消                        |——
|visibleProp     |string            |是否可见               |none                        |block/none
|onClose         |Function          |modal关闭回调          |——                        |——
|onCancel        |Function          |取消回调               |——                        |——
|onConfirm       |Function          |确认回调               |——                        |——
|showMask        |Boolean           |是否显示遮罩           |true                        |true/false
|isCanClickMask  |Boolean           |是否点击遮罩关闭       |true                        |true/false
|showCloseIcon   |Boolean           |是否显示关闭icon       |true                        |true/false
|showConfirmBtn  |Boolean           |是否显示确认按钮       |true                        |true/false
|showCancelBtn   |Boolean           |是否显示取消按钮       |true                        |true/false

### modalBox Modal组件的js调用方式，参数与Modal一致
```javascript
// 如果组件库全局注册
this.$modalBox(Object options)
// 若没有
 import { modalBox } from '@newap/vue-mobile-basic-ui'
 ```


### toast 消息提示
```javascript
 // 如果组件库全局注册
 this.$toast(Object options)
 // 若没有
  import { toast } from '@newap/vue-mobile-basic-ui'
  ```
   参数           |类型           |说明                 |默认值                  |可选值
   ---------------|---------------|---------------------|------------------------|----------------------------
   type           |string         |提示类型             |——                    |success/error/warning/regret
   delayCount     |int            |显示多久(ms)         |2000                    | ——
   icon           |string         |自定义icon地址       |——                    | ——
   msg            |string         |提示内容             |——                    | ——
   onClose        |Function       |关闭回调             |——                    | ——


### ListRoll dom滚动
```javascript
import {listRoll} from '@newap/vue-mobile-basic-ui'
```

  参数            |类型            |说明                                                    |默认值        |可选值
 -----------------|---------------|-------------------------------------------------------| ------------|------
 listLenth        |Number         |数据条数                                                 | ''          |——
 rollN            |Number         |滚动区域内要显示几条数据，listLenth为空，这里会表示滚动的秒数   |''           |——
 listHeight       |string         |展示区域的高度，默认6rem                                   |6rem         |

### ScrollLoadingContainer  滚动加载容器

```javascript
import {ScrollLoadingContainer} from '@newap/scroll-loading-container'
    <scroll-loading-container height="5rem" :scrollToBottom="scrollToBottom">
        <ul>
           <li>11</li>
        </ul>
    </scroll-loading-container>
 ```

   参数            |类型            |说明                                                    |默认值        |可选值
  -----------------|---------------|-------------------------------------------------------| ------------|------
  height        |String         |滚动容器高度                                                | ——          |——
  scrollToBottom     |Function(Function stop)         |滚动到底的回调函数 其参数为stop函数，开启等待的情况下在当前的滚动回调事件结束后需主动调用，才可触发下一次滚动到底回调                               |——          |——
  isWaiting   |Boolean           |是否开启等待  |true |true/false



### Tabs  选项卡

```javascript
 import Tabs from '@newap/tabs'
  <tabs :tabsContents="tabsContents" tabsCls="tabs-ctn" v-model="tabsIndex"/>
```

   参数            |类型            |说明                                                    |默认值        |可选值
  -----------------|---------------|-------------------------------------------------------| ------------|------
  tabsContents        |Array         |选项卡选项                                                | ——          |——
  tabsCls     |String        |最外元素class                                                      |——          |——
  onChangeTabs     |Function        |切换回调                                                      |——          |——


### ToolTip  文字提示

 ```javascript
 import Tabs from '@newap/tooltip'
  <tooltip :text="text" position="bottom">
     <div>{{text}}</div>
  </tooltip/>
 ```

 参数            |类型            |说明                                                    |默认值        |可选值
  -----------------|---------------|-------------------------------------------------------| ------------|------
  text        |String         |提示内容                                                | ——          |——
  position     |String        |提示显示位置                                                     |'top'          |top/bottom

### transition盒子 
```javascript
  import { transitionCon } from '@newap/vue-mobile-basic-ui'
  // 可选值：to-top/to-bottom/其他都可以，然后自己按照vue中的transition动画类写样式即可。另外要求组件包含的子节点上必须有v-show=[true || false]
  ```
   参数           |类型           |说明                 |默认值                  |可选值
   ---------------|---------------|---------------------|------------------------|----------------------------
   name           |string         |动画类型             |fade                   |（见代码中备注）

