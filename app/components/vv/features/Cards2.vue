<template>
  <section v-reveal class="vv-cards">
    <div class="inner">
      <div class="cards">
        <article class="card card--golang">
          <h3>{{ $t('technologiesSection.golang.title') }}</h3>
          <p>{{ $t('technologiesSection.golang.description') }}</p>
        </article>
        <article class="card card--docker">
          <h3>{{ $t('technologiesSection.docker.title') }}</h3>
          <p>{{ $t('technologiesSection.docker.description') }}</p>
        </article>
        <article class="card card--raspbian">
          <h3>{{ $t('technologiesSection.raspbian.title') }}</h3>
          <p>{{ $t('technologiesSection.raspbian.description') }}</p>
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
  padding: 2rem var(--gutter) 4rem;

  .inner {
    max-width: 72rem;
    margin-inline: auto;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
    gap: 2rem;
  }

  .card {
    min-width: 0;
    padding-top: 1rem;
    border-top: 3px solid $branding-blue-deep;

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

    &--docker { border-top-color: $branding-blue; }
    &--raspbian { border-top-color: $branding-red; }
  }
}
</style>
