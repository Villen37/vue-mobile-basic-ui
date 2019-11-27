<template>
<div :class="['vb-roll-container flex']">
    <div v-if="propIcon">
        <img class="vb-roll-img" :src="propIcon">
    </div>
    <slot v-else></slot>
    <div class="vb-roll-body">
        <div :class="['vb-roll-lists', classAnimate]">
            <div class="flex-blance" v-for="item in defaultArr" v-html="appendDom">{{appendDom}}</div>
        </div>
    </div>
</div>
</template>

<style scoped src="./index.less"></style>
<script src="./index.js"></script>
