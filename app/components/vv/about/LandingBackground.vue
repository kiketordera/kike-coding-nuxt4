<template>
  <section v-reveal class="landing">
    <NuxtImg
      src="/img/vv/main.png"
      alt=""
      width="2000"
      height="760"
      sizes="(max-width: 1500px) 100vw, 1500px"
      format="webp"
      loading="eager"
      fetchpriority="high"
    />
    <p>{{ $t('valueVillagesSection.ngoFunctionality') }}</p>
  </section>
</template>

<style lang="scss" scoped>
.landing {
  padding: 0.6rem var(--gutter);

  img {
    width: 100%;
    max-width: 1500px;
    height: auto;
    margin-inline: auto;
    padding-bottom: 1rem;
  }

  p {
    font-size: var(--fs-lg);
    font-weight: 500;
    letter-spacing: 0.02em;
    margin: 1.5rem auto;
    max-width: 65ch;
    text-align: start;
    @media (min-width: 769px) { font-size: 1.5rem; }
  }
}
</style>
