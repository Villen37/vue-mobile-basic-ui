<div
        class="weui-pull-refresh"
        ref="scrollBox"
        :style="style"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
>
    <div class="weui-pull-refreshing-box">
        <div v-if="moveState < 2">
            {{ moveState === 0 ? "下拉即可刷新..." : "释放即可刷新..." }}
        </div>
        <div v-else><i class="weui-loading" /> 加载中...</div>
    </div>
    <div class="weui-pull-present-box">
        <slot />
    </div>
</div>
