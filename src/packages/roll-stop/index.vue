<template>
<div :class="['ac-roll-container flex']">


    <div v-if="propIcon">
        <img class="roll-img" :src="propIcon">
    </div>
    <slot v-else></slot>
    <div class="roll-body">
        <div :class="['ac-roll-body', classAnimate]">
            <div class="flex-blance" v-for="item in defaultArr" v-html="appendDom">{{appendDom}}</div>
        </div>
    </div>
</div>
</template>

<style slot-scope src="./index.less"></style>
<script src="./index.js"></script>
