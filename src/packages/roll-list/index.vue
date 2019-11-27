<template>
    <div v-if="propData.length" :class="['vb-roll-list-container flex',(propIcon && 'has-icon')]">
        <img :src="propIcon" v-if="propIcon">
        <slot></slot>
        <div :class="['vb-roll-list-body', classAnimate]" :style="{transform: setTransY}"  ref="rollBody">
            <!--slot name="listContent"></slot>-->
            <div class="list-item line-clamp-1" v-for="(item, index) in propData">{{item}}</div>
        </div>
    </div>
</template>

<style scoped src="./index.less"></style>
<script src="./index.js"></script>
