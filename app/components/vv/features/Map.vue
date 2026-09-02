<template>
  <section v-reveal class="vv-map">
    <vv-about-Iconography-Languages />
    <div class="map-section">
      <img src="~/assets/svg/vv/world-map.svg" width="1663" height="820" alt="">
    </div>
    <vv-about-Iconography-Languages :reverse="true" />
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  background-color: white;
  padding: 1rem 0;

  .map-section {
    max-width: 56rem;
    margin-inline: auto;
    padding: 2rem var(--gutter);

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
