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

            <div class="title">modal层</div>
            <div class="tip" @click="showModalC">点击展示</div>
            <vb-modal-container :propShow="aniModalC">这里有文字</vb-modal-container>

            <div class="title">modal对话框</div>
            <div class="tip" @click="showModalD">点击展示</div>
            <div class="tip" @click="showModalDJs">点击展示2</div>
            <vb-modal-dialogue :propVisible="aniModalD" tipText="zheddd" propTitle="需要吗" propContent="我么想用你的地理位置可以吗位置可以吗位置可以吗"></vb-modal-dialogue>

            <div class="title">下拉刷新</div>
            <div class="tip" style="color: darkgray">(请直接进行下拉操作)</div>

            <div class="title">数据滚动</div>
            <div class="comp-roll-list">
                <vb-roll-list :propData="dataRoll" ></vb-roll-list>
            </div>

            <div class="title">Toast</div>
            <div class="tip" @click="showToast">点击弹出</div>
            <div class="tip" @click="showToastJs">点击弹出2</div>
            <div class="comp-roll-list">
                <vb-toast :propVisible="toastPorp.visible" :propMsg="toastPorp.msg"></vb-toast>
            </div>


        </vb-pulldown-refresh>


    </div>

</template>

<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>




