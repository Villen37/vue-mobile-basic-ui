import Vue from "vue";
import indexRender from "./index.vtpl";
import "../../assets/reset.css"
import "./index.less";

//import Toast from '../../packages/toast';

import ModalConfirm from '../../packages/modal-confirm';
import ListRow from '../../packages/list-roll';
import Toast from 'v-mobile-tools-ui'

export default indexRender({
	data() {
		return {
            visibleProp:'none',
            toastProp:'none',
            listProp:'block',
            delayCount:2000
		};
	},
    components:{
        ModalConfirm,
        Toast,
        ListRow,
	},
	mounted() {


	},
	methods:{
        modalShow(){
            this.visibleProp='block';
		},
        modalClose(){
            this.visibleProp='none';
        },
        toastShow(){
            this.toastProp='block';
        },
        toastClose(){
            this.toastProp='none';
        },
        listShow(){
            this.listProp='block';
        }
	}
});

let Pro = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('1111')
        resolve();
    },1000)
}).then((re)=>{
    return '123';
}).then((re)=>{
    console.log(re)
})/*.catch((er)=>{
    console.log(er+'---')
})*/


try {
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('1111')
            reject();
        },1000)
    }).catch((er)=>{
        console.log(er+'---')
    }).then((re)=>{
        console.log('222')
    })
}
catch (e) {
    console.log('222')
}


window.addEventListener('unhandledrejection', event => {
    console.log(event.reason+'=====');
});



