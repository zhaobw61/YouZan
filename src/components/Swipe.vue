<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow"  v-bind:href="list.url">
          <img class="goods-main-photo fadeIn" :src="list.image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination">
      
    </div>
  </div>
</template>

<style>
  .swiper-slide img{
    height: 100%;
    width: 100%;
  }
</style>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'swipe',
    props:['lists','name'],
    created(){
    },
    mounted(){
      new Swiper('.swiper-container',{
        loop: true,
        pagination: '.swiper-pagination'
      })
    },
    watch:{
      lists(val,oldval){
      }
    }
}
</script>


