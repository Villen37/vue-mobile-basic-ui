// Created by Villen on 19/7/8.

export default {
    name: 'rollList',
    props: {
        propData:{
            type:Array,
            default:function () {
                return ['list信息1','list信息2','list信息3','list信息4','list信息5','list信息6','list信息7']
            }
        },
        propRollNum:{
            default: 1
        },
        propIcon:{
            type: String,
            default:''
        }
    },
    data(){
        return {
            'classAnimate':'',
            'setTransY':'',
            'setInterval':''
        }
    },
    mounted() {
        //document.querySelector(".vb-roll-list-container")​
        //this.listRolling(this.propListLength);
        this.listRolling(this.propData.length);
    },
    watch:{
        propData: function (newData) {
            this.listRolling(newData.length)
        }
    },
    methods: {
        /*
         * 数据滚动
         * propListLength @param（数字，列表长度）
         * n @param 如果是propListLength>0，n才有效默认是5，标示一次显示最多的条数
         * */
        //let height =
        listRolling(propListLength){
            //let rollHeight = window.getComputedStyle(this.$refs.rollBody).height.split('px')[0]
            let count = 0;
            let height = 0.25;
            let self = this;
            self.classAnimate='animate-no';
            self.setTransY='';
            clearInterval(self.setInterval)
            self.classAnimate = 'animate';
            if(propListLength>0){
                this.setInterval = setInterval(() => {
                    count++;
                    self.classAnimate = 'animate';
                    if (count >= propListLength) {
                        self.classAnimate = 'animate-no';
                        count = 0;
                    }
                    self.setTransY = 'translateY(-'+height * count+'rem)';
                }, 1600);
            }

        }
    },
    beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }
};
