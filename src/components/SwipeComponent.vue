<template>
  <swiper 
    class="swiperParent" 
    :slides-per-view="1" 
    :space-between="50" 
  >
    <swiper-slide 
      v-for="(item, index) in list" 
      :key="index"
    >
      <swiper 
        class="secounSwiperParent" 
        :slides-per-view="1" 
        :space-between="50" 
        direction="vertical"
      >
        <swiper-slide 
          v-for="(secoundItem, secoundIndex) in item" 
          :key="secoundIndex"
        >
              <WeatherUIComponent
                :city="city"
                :listItem="secoundItem"
                @deleteItemInUI="$emit('deleteItemInSwiper')"
              ></WeatherUIComponent>            
        </swiper-slide>
      </swiper>
    </swiper-slide>
  </swiper>
</template>

<script> 
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  export default {
    emits:['deleteItemInSwiper'],
    props:{
      list:{
        type: Array,
        required: true
      },
      city:{
        type:String,
        required: true
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  };
</script>

<style scoped>
  .swiperParent {
    width: 400px;
    height: 200px;
  }
  .secounSwiperParent {
    height: 100%;
  }
  .innerSwiperParent {
    height: 100%;
  }
</style>
