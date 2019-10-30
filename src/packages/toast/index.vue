<transition :name="name">
    <div :class="['toast-container', visible && 'show']"  key="comp-toast">
        <div :class="['ac-toast', shower, toastParams && toastParams.cls]" >
            <div class="ac-toast-wrapper">
                <img v-if="icon" :src="icon" alt="">
                <!--<img v-if="toastParams && toastParams.icon" :src="toastParams.icon" alt="">-->
                <div v-if="propMsg" class="ac-msg">
                    {{propMsg}}
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</transition>
