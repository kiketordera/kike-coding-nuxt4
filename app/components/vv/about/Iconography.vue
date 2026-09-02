<template>
  <div class="iconography" aria-hidden="true">
    <infinite-slide-bar v-for="(row, index) in rows" :key="index" :duration="'40s'" :direction="index % 2 ? 'reverse' : 'normal'">
      <div class="slider">
        <img v-for="image in row" :key="image" :src="image" alt="" width="80" height="50" loading="lazy">
      </div>
    </infinite-slide-bar>
  </div>
</template>

<script setup lang="ts">
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const rows = [
  [
    '/img/vv/carousel/africana.png',
    '/img/vv/carousel/lion.png',
    '/img/vv/carousel/snake.png',
    '/img/vv/carousel/monkey.png',
    '/img/vv/carousel/giraffe.png',
    '/img/vv/carousel/rhino.png',
    '/img/vv/carousel/panther.png',
    '/img/vv/carousel/elephant.png',
    '/img/vv/carousel/camel.png',
    '/img/vv/carousel/cow.png',
  ],
  [
    '/img/vv/carousel/warning-color.svg',
    '/img/vv/carousel/video-color.svg',
    '/img/vv/carousel/payment.svg',
    '/img/vv/carousel/deleted.svg',
    '/img/vv/carousel/modified.svg',
    '/img/vv/carousel/add-color.svg',
    '/img/vv/carousel/dashboard-color.svg',
    '/img/vv/carousel/alphabet-color.svg',
    '/img/vv/carousel/photo.svg',
  ],
  [
    '/img/vv/carousel/shopping-cart.svg',
    '/img/vv/carousel/water.svg',
    '/img/vv/carousel/medicine.svg',
    '/img/vv/carousel/studying.svg',
    '/img/vv/carousel/night-color.svg',
    '/img/vv/carousel/ear-color.svg',
    '/img/vv/carousel/total.svg',
    '/img/vv/carousel/timer-color.svg',
    '/img/vv/carousel/bar.svg',
    '/img/vv/carousel/conversation-color.svg',
  ],
  [
    '/img/vv/carousel/performance-color.svg',
    '/img/vv/carousel/calendar-color.svg',
    '/img/vv/carousel/records-color.svg',
    '/img/vv/carousel/speak.png',
    '/img/vv/carousel/settings-color.svg',
    '/img/vv/carousel/development.png',
    '/img/vv/carousel/lock-color.svg',
    '/img/vv/carousel/activity-color.svg',
    '/img/vv/carousel/report-PDF.svg',
    '/img/vv/carousel/sell-worker.svg',
    '/img/vv/carousel/records-materials-color.svg',
  ],
  [
    '/img/vv/carousel/categories-color.svg',
    '/img/vv/carousel/cut-color.svg',
    '/img/vv/carousel/tent.svg',
    '/img/vv/carousel/wallet-solo.svg',
    '/img/vv/carousel/products-hover.svg',
    '/img/vv/carousel/privacy.svg',
    '/img/vv/carousel/search-color.svg',
    '/img/vv/carousel/star-thin.svg',
    '/img/vv/carousel/info.svg',
    '/img/vv/carousel/demo-color.svg',
  ],
  [
    '/img/vv/carousel/deliveries.svg',
    '/img/vv/carousel/columpio.svg',
    '/img/vv/carousel/workshop.svg',
    '/img/vv/carousel/warehouse.svg',
    '/img/vv/carousel/clinic-red.svg',
    '/img/vv/carousel/bodaboda.svg',
    '/img/vv/carousel/chef.svg',
    '/img/vv/carousel/construction.svg',
    '/img/vv/carousel/farm.svg',
    '/img/vv/carousel/education.png',
  ],
]
</script>

<style scoped lang="scss">
.iconography {
  padding-block: 0.5rem;
  overflow-x: clip;
}

.slider {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-block: 0.75rem;

  img {
    object-fit: contain;
    width: 80px;
    height: 50px;
    @media (max-width: 550px) {
      width: 60px;
      height: 30px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  :deep(*) { animation: none !important; }
}
</style>
