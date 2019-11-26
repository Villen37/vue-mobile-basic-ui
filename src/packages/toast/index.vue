<template>
    <transition :name="propName">
        <div :class="['toast-container', visible && 'show']"  key="comp-toast">
            <div :class="['ac-toast', shower, toastParams && toastParams.cls]" >
                <div class="ac-toast-wrapper">
                    <img v-if="propIcon" :src="propIcon" alt="">
                    <div v-if="propMsg" class="ac-msg">
                        {{propMsg}}
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped src="./index.less"></style>
<script src="./index.js"></script>
