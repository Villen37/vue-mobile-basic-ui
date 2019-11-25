<template>
    <div class="vb-pull-refresh" ref="scrollBox" :style="style"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
    >
        <div class="vb-pull-refreshing-box">
            <div v-if="moveState==0">{{propKey0}}</div>
            <div v-else-if="moveState==1">{{propKey1}}</div>
            <div v-else-if="moveState==-1">{{propKey3}}</div>

            <div class="flex-center" v-else><i class="vb-loading css-circling" /> {{propKey2}}</div>
        </div>
        <div class="vb-pull-present-box">
            <slot />
        </div>
    </div>
</template>

<style slot-scope src="./index.less"></style>
<script src="./index.js"></script>
