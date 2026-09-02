<template>
  <section v-reveal class="vv-cards">
    <div class="inner">
      <h2>{{ $t('technologiesSection.title') }}</h2>
      <div class="cards">
        <article class="card card--vue">
          <h3>{{ $t('technologiesSection.vue.title') }}</h3>
          <p>{{ $t('technologiesSection.vue.description') }}</p>
        </article>
        <article class="card card--bootstrap">
          <h3>{{ $t('technologiesSection.bootstrap.title') }}</h3>
          <p>{{ $t('technologiesSection.bootstrap.description') }}</p>
        </article>
        <article class="card card--gin">
          <h3>{{ $t('technologiesSection.gin.title') }}</h3>
          <p>{{ $t('technologiesSection.gin.description') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  font-family: $nunito-regular;
  font-weight: 400;
  color: $background;
  background-color: white;
  padding: 2rem var(--gutter);

  .inner {
    max-width: 72rem;
    margin-inline: auto;
  }

  h2 {
    font-family: $nunito-regular;
    font-weight: 700;
    font-size: clamp(1.4rem, 1.1rem + 1.2vw, 1.8rem);
    letter-spacing: 0;
    color: inherit;
    margin-bottom: 1.5rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
    gap: 2rem;
  }

  .card {
    min-width: 0;
    padding-top: 1rem;
    border-top: 3px solid $branding-green;

    h3 {
      font-family: $nunito-regular;
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0;
      color: inherit;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: var(--fs-md);
      line-height: var(--lh-body);
    }

    &--bootstrap { border-top-color: $branding-pink; }
    &--gin { border-top-color: $branding-orange; }
  }
}
</style>
