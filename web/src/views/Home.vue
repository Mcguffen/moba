<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/1b5300ba217f725098b9128adc6149651544436207.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/6f7d4797cd507e421a115b43f64bdbf51551687660.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/8cc052ba71261500fd988b959a01162c1533182955.png" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" 
      slot="pagination">
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import '../assets/scss/variables';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
</style>