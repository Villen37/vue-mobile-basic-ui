<template>
    <transition :name="propName">
        <div :class="['vb-toast-container', visible && 'show']"  key="comp-toast">
            <div :class="['vb-ac-toast', shower, toastParams && toastParams.cls]" >
                <div class="vb-toast-wrapper">
                    <img v-if="propIcon" :src="propIcon" alt="">
                    <div v-if="propMsg" class="vb-toast-msg">
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
