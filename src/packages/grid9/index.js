// Created by Villen on 20/4/27.
const SPEED_DEFAULT = 5 * 1000 / 8;// 初始化速度n秒转一圈
const CYCLE_TIMES = 8 * 4;// 定义动画额外圈数
const ACCELERATED_SPEED = 200;// 加速度
// 定义转盘旋转的顺序， value 值为奖品在列表中的index
const LOTTERY_ORDER = [0, 1, 2, 5, 8, 7, 6, 3];
import vbToast from '../toast/index.vue';

export default {
    name: 'vbGrid9',
    props: {
        propData:{
            type: Array,            //奖品列表，必须为8个
            default: ()=>{
                return []
            }
        },
        propRights:{
            type: Number,           //抽奖权益
        },
        propFuncOver:{              //动画结束后要做什么
            type: Function
        },
        propFuncNot:{               //没有权益
            type: Function
        },
        propFuncClick:{               //点击中间
            type: Function
        },
        propOrder:{
            type: [Number,String],           //抽奖中了哪个
            default: ()=>{
                return 8
            }
        },
        propReset:{
            type: [Number,String],  //是否重置
            default: ()=>{
                return 0
            }
        },
        propTips:{          //没有权益
            type: Object,
            default:()=>{
                return {
                    over:'恭喜',
                    noright:'抱歉，机会已用完'
                }
            }
        },
    },
    data(){
        return {
            lotteryArr: [],
            lotteryOrder: LOTTERY_ORDER.indexOf(this.propOrder),   //中奖位置
            highLightIndex:0,               //自动旋转的位置
            uniformTimes: 0,                //默认旋转 匀速运动的次数
            spinIndex: 0,                   //记录当前累计此事
            spinAllow:true,                 //是否可以点击
            speed: SPEED_DEFAULT,           //旋转速度
            speedDefaultTimer: null,        //控制默认旋转
            loadingTimes:0, //转几圈
            toastPorp:{}

        }
    },
    components:{
        vbToast
    },
    watch:{
        /*'propData':function(val) {
            if (val!=[]) {
                this.setDataArr(val)
            }
        }*/
        propOrder(val){
            this.lotteryOrder = LOTTERY_ORDER.indexOf(val);
        },
        propReset(val){
            if(val!='' && val!=0){
                this.spinRest();
            }
        }
    },
    computed:{

    },
    mounted() {
        this.setDataArr(this.propData);
        this.spinDefault()
    },
    methods: {

        destroyElement() {
            /*this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);*/
        },
        /*
         * 数据滚动
         * */
        setDataArr(arr){
            let lotteryArr = arr;
            lotteryArr.splice(4,0,{});
            this.lotteryArr = lotteryArr;
        },
        //匀速旋转
        spinDefault() {
            let self = this;
            self.speedDefaultTimer = setTimeout(() => {
                ++self.spinIndex;
                self.spinDefault();
                self.highLightIndex = self.spinGridPostion(self.spinIndex)
            }, self.speed);

        },
        //获取宫格的选项位置
        spinGridPostion(currentPosition) {
            return LOTTERY_ORDER[currentPosition % LOTTERY_ORDER.length];
        },
        //快速选择
        spinLottery() {
            let self = this;
            if (self.speedDefaultTimer) {
                //启动抽奖前 清除默认转动
                this.uniformTimes = this.spinIndex;
                clearTimeout(self.speedDefaultTimer);
                self.speedDefaultTimer = null;
            }

            self.highLightIndex = self.spinGridPostion(self.spinIndex)

            const currentOrder = this.spinIndex % 8;
            ++this.spinIndex;
            if (this.spinIndex == (CYCLE_TIMES + this.uniformTimes + Math.abs(this.lotteryOrder - this.uniformTimes % 8 + 8)) + 1) {
                //落点
                //抽奖结束
                console.log('抽奖结束', this.uniformTimes % 8, Math.abs(this.lotteryOrder - this.uniformTimes % 8 + 8))
                clearTimeout(this.lotteryTimer);
                setTimeout(() => {
                    if(LOTTERY_ORDER.indexOf(this.lotteryOrder)==-1){
                        this.spinRest(0);
                        self.loadingTimes++;
                        if(this.loadingTimes<5){
                            this.spinLottery();
                        }else{
                            this.loadingTimes=0;
                            this.toastPorp = {msg:'抽奖失败，请稍后重试~', visible:'block'+new Date()};
                        }

                    }else{
                        this.stopCallback(this.lotteryOrder);
                    }
                }, 500);
            } else {
                if (this.spinIndex < 99 * (CYCLE_TIMES + Math.abs(this.lotteryOrder - this.uniformTimes % 8 + 8)) / 100 + this.uniformTimes) {
                    //前2/3程加速
                    this.speed -= ACCELERATED_SPEED;
                    console.log('加速阶段', this.speed)
                } else if (this.spinIndex > CYCLE_TIMES + this.uniformTimes && this.lotteryOrder === currentOrder + 1) {
                    this.speed += ACCELERATED_SPEED + 50;
                    console.log('中奖前一个位置减速', self.speed);
                } else if (this.lotteryOrder === -1) {
                    // 次数超过30次，且尚未拿到抽奖结果时：匀速运动
                    //未使用
                    console.log('次数超过30次，且尚未拿到抽奖结果时：匀速运动', this.speed);
                    this.uniformTimes += 1;
                } else {
                    //后半程减速
                    this.speed += ACCELERATED_SPEED;
                    console.log('减速', self.speed);
                }
                // 确保速度不能低于 50 ms
                if (this.speed < 20) {
                    this.speed = 20;
                }
                if (this.speed > SPEED_DEFAULT) {
                    this.speed = SPEED_DEFAULT;
                }
                this.lotteryTimer = setTimeout(() => {
                    this.spinLottery.bind(self);
                    this.spinLottery();
                }, this.speed);
            }
        },
        //重置
        spinRest(type=1){
            //this.drawing = false;
            // this.spinIndex = 0;
            this.spinIndex = this.spinIndex % 8-type;
            this.speed = SPEED_DEFAULT;
            this.lotteryOrder = -1;
            this.spinAllow = true;
            this.spinDefault();

        },
        stopCallback(lotteryOrder) {
            //this.loadingTimes=0;
            console.log('抽奖结束回调', lotteryOrder)
            if(lotteryOrder>-1){
                if(this.propFuncOver) {
                    this.propFuncOver();
                }
                if(this.propTips.over){
                    this.toastPorp = {msg:this.propTips.over, visible:'block'+new Date()};
                }
            }else{
                this.spinRest();
                //this.spinLottery();
            }
        },
        //点击中间位置
        getLottery(){
            if(this.propFuncClick) {
                this.propFuncClick();
            }
            if(this.spinAllow){
                if(this.propRights<1){
                    if(this.propFuncNot){
                        this.propFuncNot()
                    }
                    if(this.propTips.noright){
                        this.toastPorp = {msg:this.propTips.noright, visible:'block'+new Date()};
                    }
                    return false
                }
                this.spinLottery();
                this.spinAllow=false;
                console.log('is ok')
            }


        },
    }
    /*beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }*/
};
