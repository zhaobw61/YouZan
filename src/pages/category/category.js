import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url  from 'js/api.js'

import Foot from 'components/Foot.vue'
new Vue({
    el:'#app',
    data:{
        topLists:null,
        topIndex:0,
        subData:null,
        rankData:null
    },
    created(){
        this.getTopList();
        this.getSubList(0,0);
    },
    methods:{
        getTopList(){
            axios.post(url.topList).then(res=>{
                this.topLists = res.data.lists
            })
        },
        getSubList(id,index){
            this.topIndex = index;
            if(index === 0){
                this.getRank();
            }else{
                axios.post(url.subList,{id}).then(res=>{
                    this.subData = res.data.data;
                })
            }
        },
        getRank(){
            axios.post(url.rank,{}).then(res=>{
                this.rankData = res.data.data;
                console.log('rankData');
                console.log(this.rankData);
            })
        }
    },
    components:{
        'Foot':Foot
    },
    filters:{
        number(price){
            return price + '.00';
        }
    }
})
