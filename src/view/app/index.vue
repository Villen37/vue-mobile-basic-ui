<template>
    <div class="main-view">
        <vb-pulldown-refresh @listeningEmit="pulldownEnd" :propState="aniPullDown">
            <div class="title">数字滚动展示</div>
            <div>
                <div class="comp-roll">
                    <vb-roll-stop :propCoinNum="2333" propIcon=""></vb-roll-stop>
                </div>
            </div>

            <div class="title">蒙层loading</div>
            <div class="tip" @click="showLoading">点击展示</div>
            <vb-cover-loading :propShow="aniLoading"></vb-cover-loading>


            <div class="title">下拉刷新</div>
            <div class="tip">(请直接进行下拉操作)</div>

            <div class="title">数据滚动</div>
            <div class="comp-roll-list">
                <vb-roll-list :propData="dataRoll" ></vb-roll-list>
            </div>



        </vb-pulldown-refresh>


    </div>

</template>

<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>




