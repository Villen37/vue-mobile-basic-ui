<template>
<div :class="['ac-modal-bg-container', propBgClass, showMask ? '' : 'transparent', showModalClass]" @click.self="clickMask" @touchmove.prevent>
    <div class="ac-modal-container">
        <div v-if="showCloseIcon" class="ac-modal-cancel-icon" @click="cancel"></div>
        <div class="ac-modal-content-ctn">
            <div class="ac-modal-title" v-html="propTitle"></div>
            <div class="ac-modal-content" v-if="propContent" v-html="propContent">
            </div>
            <div class="ac-modal-content" v-else>
                <slot></slot>
            </div>
            <div class="ac-modal-filter"></div>
            <div class="tip">{{propTip}}</div>
        </div>

        <div class="ac-modal-btn-group">
            <div class="ac-modal-cancel-btn" @click="cancel" v-if="showCancelBtn">{{propCancelText}}</div>
            <div class="ac-modal-confirm-btn" @click="confirm" v-if="showConfirmBtn">{{propConfirmText}}</div>
        </div>

    </div>
</div>
</template>
<style scoped src="./index.less"></style>
<script src="./index.js"></script>

