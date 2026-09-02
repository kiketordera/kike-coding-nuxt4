<template>
  <section class="band">
    <ul v-reveal.stagger="90" class="gradient">
      <li class="info">
        <h2>{{ $t('gradientSection.reinventLogin.title') }}</h2>
        <p>{{ $t('gradientSection.reinventLogin.description') }}</p>
        <NuxtImg src="/img/vv/log-in.png" alt="" width="736" height="1295" sizes="(max-width: 789px) 45vw, 280px" format="webp" loading="lazy" />
      </li>
      <li class="item">
        <NuxtImg src="/img/vv/dashboard.png" alt="" width="731" height="1247" sizes="(max-width: 789px) 45vw, 280px" format="webp" loading="lazy" />
        <h2>{{ $t('gradientSection.dashboard.title') }}</h2>
        <p>{{ $t('gradientSection.dashboard.description') }}</p>
      </li>
      <li class="info">
        <h2>{{ $t('gradientSection.beautifulNumbers.title') }}</h2>
        <p>{{ $t('gradientSection.beautifulNumbers.description') }}</p>
        <NuxtImg src="/img/vv/performance.png" alt="" width="734" height="1296" sizes="(max-width: 789px) 45vw, 280px" format="webp" loading="lazy" />
      </li>
      <li class="item">
        <NuxtImg src="/img/vv/products.png" alt="" width="730" height="1249" sizes="(max-width: 789px) 45vw, 280px" format="webp" loading="lazy" />
        <h2>{{ $t('gradientSection.watchDoLearn.title') }}</h2>
        <p>{{ $t('gradientSection.watchDoLearn.description') }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
// Full-bleed band in the client's blue, darkened to the variant that passes
// 4.5:1 with white text.
.band {
  background: $branding-blue-deep;
  color: white;
}

.gradient {
  list-style: none;
  margin: 0 auto;
  padding: var(--space-stack) var(--gutter);
  max-width: var(--container);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  @media (min-width: 790px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.5rem;
  }

  li {
    display: flex;
    flex-direction: column;
    min-width: 0;
    text-align: center;

    h2 {
      font-size: var(--fs-h3);
      font-weight: 600;
      letter-spacing: 0.04em;
      margin-top: 1.5rem;
      color: inherit;
    }

    p {
      font-size: var(--fs-sm);
      margin: 1.25rem auto;
      padding-inline: 0.25rem;
      max-width: 65ch;
      text-align: start;
    }

    img {
      width: 100%;
      max-width: 18rem;
      height: auto;
      margin-inline: auto;
    }
  }

  .info { justify-content: flex-end; }
  .item { justify-content: flex-start; }
}
</style>
