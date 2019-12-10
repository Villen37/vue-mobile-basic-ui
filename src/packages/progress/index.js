/**
 * Created by villen on 2019/12/9.
 */

export default {
    name: 'vbProgress',
    props: {
        propNumArr: { //数字组
            type: Array,
            default: []
        },
        propTopArr: { //顶部文字组 html
            type: Array,
            default: []
        },
        propBotArr: { //下面文字组 html
            type: Array,
            default: []
        },
        propCurrent: {
            type: Number,
            default: 0
        },
        propDefaultMark:{
            type:Boolean,
            default: true
        }
    },
    staticData: {
        timer: null,
    },
    data() {
        return{
            percent:'',
            perWidth:'',
        }


    },
    watch: {
        propCurrent:function (value) {
            this.setLineProgress(value,this.propNumArr)
        },
        propNumArr:function (arr) {
            this.setLineProgress(this.propCurrent,arr)
        }
    },
    mounted(){
        this.setLineProgress(this.propCurrent,this.propNumArr)
    },
    computed: {
        toastParams() {
            return this.propRefer;
        }
    },
    methods: {
        setLineProgress:function (value,arr) {
            let count = arr.length;
            let gapCount = count*(count+1)/2; //总共多少个单位百分比
            this.perWidth = 100/gapCount;

            if(value>arr[count-1]-1){
                this.percent = gapCount;
            }else{

                let dot = 0; //value经过了arr中的最大值 的节点
                arr.forEach((item,i)=>{
                    if(value>item || value==item){
                        dot = i;
                    }
                })

                let dotStep = arr[dot]; //当前节点的步数
                let dotCount = (dot+1)*(dot)/2;
                let nextStep = arr[dot+1] ? arr[dot+1] : arr[count-1]; //下一个节点步数
                let geFull = (dot+1+1)*(dot+1)/2;
                let feLeft = (value-dotStep) / (nextStep-dotStep) * (geFull-dotCount);
                /*console.log(value-dotStep)
                 console.log(nextStep-dotStep)
                 console.log(geFull-dotCount)
                 console.log(feLeft)*/
                setTimeout(()=>{
                    this.percent = geFull+feLeft;

                },500)
            }
        }
    }
}
