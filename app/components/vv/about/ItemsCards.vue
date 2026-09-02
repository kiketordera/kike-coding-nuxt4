<template>
  <section class="cards">
    <ul v-reveal.stagger="90" class="grid">
      <li>
        <NuxtImg src="/img/vv/workshop.png" alt="" width="956" height="782" sizes="96px" format="webp" loading="lazy" />
        <p>{{ $t('valueVillagesSection.cards.softwarePlatform') }}</p>
      </li>
      <li>
        <img src="/img/vv/carousel/performance-color.svg" alt="" width="80" height="90" loading="lazy">
        <p>{{ $t('valueVillagesSection.cards.videoTutorials') }}</p>
      </li>
      <li>
        <img src="~assets/svg/vv/wifi.svg" alt="" width="80" height="56" loading="lazy">
        <p>{{ $t('valueVillagesSection.cards.offlineInstallation') }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  padding: var(--space-stack) var(--gutter);
}

.grid {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: var(--container);
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 769px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }

  li {
    min-width: 0;
    max-width: 24rem;
    margin-inline: auto;

    img {
      height: 5rem;
      width: auto;
      max-width: 6rem;
      object-fit: contain;
      margin: 1rem auto;
    }

    p {
      letter-spacing: 0.02em;
      text-align: start;
    }
  }
}
</style>
