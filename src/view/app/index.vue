<template>
    <div class="main-view">
        数字滚动展示
        <div>
            <div class="comp-roll">
                <vb-roll-stop :propCoinNum="2333" propIcon=""></vb-roll-stop>
            </div>
        </div>

        蒙层loading
        <vb-cover-loading :propShow="false"></vb-cover-loading>

    </div>

</template>

<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>




