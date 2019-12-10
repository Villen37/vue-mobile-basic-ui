<template>
    <div class="walk-progress">
        <div class="gress-staps gress-num">
            <div v-if="propTopArr.length>1" v-for="(item,i) in propTopArr" :key="i+'top'" :style="{width:perWidth*(i+1)+'%'}" v-html="item"></div>
        </div>
        <div class="gress-line">
            <div :class="['gress-line-got',propDefaultMark && 'got-default-mark']" :style="{width:percent * perWidth+'%'}"><span></span></div>

            <div class="slot" :style="{left:percent * perWidth+'%'}"><slot></slot></div>
        </div>

        <div class="gress-staps gress-coin">
            <div v-if="propBotArr.length>1" v-for="(item,i) in propBotArr" :key="i+'bot'" :style="{width:perWidth*(i+1)+'%'}" v-html="item"></div>
        </div>
    </div>
</template>
<style scoped src="./index.less"></style>
<script src="./index.js"></script>
