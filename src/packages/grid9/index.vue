<template>
<div :class="['vb-grid9 flex-blance']" @touchmove.prevent>

    <div :class="['item flex vb-grid9-item', highLightIndex==ind && 'vb-grid9-light']" v-if="lotteryArr.length==9" v-for="(item,ind) in lotteryArr">
        <div v-if="ind!=4" :class="['item-cont flex',item.prizeName && 'cont-text']">
            <img v-if="item.prizeIcon" :src="item.prizeIcon">
            <p class="line-clamp-1" v-if="item.prizeName">{{item.prizeName}}</p>
        </div>
        <div v-else class="item-cont vb-grid9-center flex" @click="getLottery">
            <slot>
                <div v-if="propRights>0" class="item-y">
                    开始抽奖
                </div>
                <div v-else class="item-y">机会已用完</div>
            </slot>

        </div>
    </div>

    <vb-toast :propVisible="toastPorp.visible" :propMsg="toastPorp.msg"></vb-toast>
</div>
</template>

<style scoped src="./index.less"></style>
<script src="./index.js"></script>
