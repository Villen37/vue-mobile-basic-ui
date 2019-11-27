<template>
<div :class="['vb-cover-loading flex']" v-if="visible" @touchmove.prevent>

    <div class="vb-cover-body flex" v-if="propDefault && visible!='break'">
        <img v-if="propImgLoading" src="propImgLoading">
        <img v-else class="vb-cover-img-loading css-circling" src="../../imgs/loading.png"/>
        <span>正在加载 ...</span>
    </div>
    <div class="" v-else>
        <slot></slot>
    </div>
    <div class="vb-cover-body vb-cover-body-break" v-if="propDefault && visible=='break'">
        <img v-if="propImgBreak" src="propImgBreak">
        <img v-else src="../../imgs/break.png">
        <div>暂无数据<div v-if="visibleReload!='no'" @click="reload" class="cover-reload">刷新重试</div></div>
    </div>
</div>
</template>

<style scoped src="./index.less"></style>
<script src="./index.js"></script>
