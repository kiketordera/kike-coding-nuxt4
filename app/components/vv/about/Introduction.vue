<template>
  <section class="intro">
    <NuxtImg
      src="/img/vv/logo.png"
      alt="Value Villages"
      width="328"
      height="254"
      sizes="(max-width: 700px) 144px, 192px"
      format="webp"
      loading="eager"
      class="logo"
    />
    <h1>{{ $t('valueVillagesSection.title') }}</h1>
    <p>{{ $t('valueVillagesSection.openSource') }}</p>
    <p>{{ $t('valueVillagesSection.customisable') }}</p>
    <p>{{ $t('valueVillagesSection.fullSet') }}</p>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  max-width: var(--container);
  margin-inline: auto;
  padding: var(--space-block) var(--gutter) var(--space-stack);
  text-align: center;

  .logo {
    width: 100%;
    max-width: 12rem;
    height: auto;
    margin: 1rem auto 2rem;
    @media (max-width: 700px) { max-width: 9rem; }
  }

  h1 {
    font-size: clamp(1.5rem, 1rem + 2vw, 2rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  // Three short lines, each under two lines long, so they stay centred.
  p {
    font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem);
    font-weight: 400;
    letter-spacing: 0.04em;
    margin: 0 auto 0.5rem;
    text-align: center;
    text-wrap: balance;
  }
}
</style>
