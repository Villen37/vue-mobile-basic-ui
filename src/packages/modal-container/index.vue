<template>
<div :class="['vb-modal-container flex-blance', visible]" @click.self="clickBg" @touchmove.prevent>
    <div class="vb-modal-body">
        <slot></slot>
    </div>
</div>
</template>

<style scoped src="./index.less"></style>
<script src="./index.js"></script>
