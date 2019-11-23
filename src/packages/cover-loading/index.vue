<template>
<div :class="['cover-loading flex']" v-if="visible">

    <div class="cover-body flex" v-if="propDefault && visible!='break'">
        <img v-if="propImgLoading" src="propImgLoading">
        <img v-else class="img-loading css-rolling" src="./img/loading.png"/>
        <span>正在加载 ...</span>
    </div>
    <div class="" v-else>
        <slot></slot>
    </div>
    <div class="cover-body cover-body-break" v-if="propDefault && visible=='break'">
        <img v-if="propImgBreak" src="propImgBreak">
        <img v-else src="./img/break.png">
        <div>暂无数据<div v-if="visibleReload!='no'" @click="reload" class="cover-reload">刷新重试</div></div>
    </div>

</div>
</template>

<style slot-scope src="./index.less"></style>
<script src="./index.js"></script>
