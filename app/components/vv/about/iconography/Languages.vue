<template>
  <infinite-slide-bar :duration="'40s'" :direction="props.reverse ? 'reverse' : 'normal'">
    <div class="scroll">
      <img src="/img/vv/lang/swahili-turkana.svg" alt="" width="20" height="20">
      <p class="turkana"><span>Turkana</span></p>
      <img src="/img/vv/lang/turkana-spanish.svg" alt="" width="20" height="20">
      <p class="spanish"><span>Spanish</span></p>
      <img src="/img/vv/lang/spanish-english.svg" alt="" width="20" height="20">
      <p class="english"><span>English</span></p>
      <img src="/img/vv/lang/english-french.svg" alt="" width="20" height="20">
      <p class="french"><span>French</span></p>
      <img src="/img/vv/lang/french-german.svg" alt="" width="20" height="20">
      <p class="german"><span>German</span></p>
      <img src="/img/vv/lang/german-swahili.svg" alt="" width="20" height="20">
      <p class="swahili"><span>Swahili</span></p>
    </div>
  </infinite-slide-bar>
</template>

<script lang="ts" setup>
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.scroll {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding-block: 0.5rem;
}

// One language, one brand colour: bold at 20px counts as large text.
p {
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  &.turkana { color: var(--bg); }
  &.spanish { color: $branding-green-deep; }
  &.english { color: $branding-blue-deep; }
  &.french { color: $branding-orange-deep; }
  &.german { color: $branding-red; }
  &.swahili { color: $branding-pink-deep; }
}
</style>
