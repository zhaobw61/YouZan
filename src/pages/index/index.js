import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url  from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

let app = new Vue({
    el:"#app",
    data:{
         lists:null,
         pageNum:1,
         lodaing:false,
         pageSize:6,
         loading:false,
         allLoaded:false,
         bannerList:null
    },
    created() {
        this.getLists();
        this.getBanner();
    },
    methods:{
        getLists(){
            if(this.allLoaded) return;
            this.loading = true;
            axios.post(url.hostLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then(res => {
                let curLists = res.data.lists;
                if(curLists.length<this.pageSize){
                    this.allLoaded = true;
                }
                if(this.lists){
                    this.lists = this.lists.concat(curLists);
                }else{
                    this.lists = curLists;
                }
                this.loading =false;
                this.pageNum ++;
            })
        },
        getBanner(){
            axios.post(url.banner).then(res=>{
                this.bannerList = res.data.lists;
                console.log(this.bannerList);
            })
        }
    },
    components:{
        Foot : Foot,
        Swipe : Swipe
    }
})