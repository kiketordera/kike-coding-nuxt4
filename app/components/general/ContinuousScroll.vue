<template>
  <div class="ticker" aria-hidden="true">
    <infinite-slide-bar :duration="'48s'">
      <div class="strip">
        <img v-for="(image, index) in skills" :key="index" :src="image" alt="" width="140" height="40" loading="lazy">
      </div>
    </infinite-slide-bar>
  </div>
</template>

<script setup lang="ts">
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const skills = [
  '/svg/kk/skills/swift.svg',
  '/svg/kk/skills/flutter.svg',
  '/svg/kk/skills/dart.svg',
  '/svg/kk/skills/figma.svg',
  '/svg/kk/skills/ux.svg',
  '/svg/kk/skills/ui.svg',
  '/svg/kk/skills/vue.svg',
  '/svg/kk/skills/nuxt.svg',
  '/svg/kk/skills/ts.svg',
  '/svg/kk/skills/js.svg',
  '/svg/kk/skills/tailwind.svg',
  '/svg/kk/skills/node.svg',
  '/svg/kk/skills/golang.svg',
  '/svg/kk/skills/java.svg',
  '/svg/kk/skills/firebase.svg',
  '/svg/kk/skills/docker.svg',
  '/svg/kk/skills/html5.svg',
  '/svg/kk/skills/css3.svg',
]
</script>

<style lang="scss" scoped>
.ticker {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--bg);
  position: relative;
  z-index: 2;
  // fade both ends so the loop has no hard edge
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.strip {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 1.1rem 1.75rem;
  img {
    height: 28px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.55;
    transition: opacity var(--dur-fast) ease-out, filter var(--dur-fast) ease-out;
  }
}
.ticker:hover .strip img { opacity: 0.85; }
@media (prefers-reduced-motion: reduce) {
  .ticker :deep(*) { animation: none !important; }
}
</style>
