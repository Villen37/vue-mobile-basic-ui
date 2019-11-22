<template>
<div :class="['ac-roll-container flex']">
    <slot></slot>
    <div v-if="propCoinNum" v-for="(item, i) in propCoinNum.toString().length" class="num-bg" :style="{'margin-left':i*0.2+'rem'}" :style="propStyle"></div>
    <div :class="['ac-roll-body', classAnimate]">
        <div v-for="item in defaultArr">{{propCoinNum}}</div>
    </div>

</div>
</template>

<style slot-scope src="./index.less"></style>
<script src="./index.js"></script>
