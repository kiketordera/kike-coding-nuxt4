<template>
  <section v-reveal class="support">
    <h2>{{ $t('supportSection.title') }}</h2>
    <ul class="logos">
      <li class="totem">
        <a href="https://thetotem.studio/" target="_blank" rel="noopener" :aria-label="$t('vvExtra.support.totem')">
          <img src="/img/vv/logo-totem.svg" alt="" width="180" height="73" loading="lazy">
        </a>
      </li>
      <li class="hn">
        <a href="https://www.hn-bavaria.org/" target="_blank" rel="noopener" :aria-label="$t('vvExtra.support.hn')">
          <NuxtImg src="/img/vv/hn.png" alt="" width="225" height="225" sizes="80px" format="webp" loading="lazy" />
        </a>
      </li>
      <li>
        <a href="https://www.upv.es/" target="_blank" rel="noopener" :aria-label="$t('vvExtra.support.upv')">
          <img src="~assets/svg/vv/upv.svg" alt="" width="1450" height="459" loading="lazy">
        </a>
      </li>
      <li>
        <a href="https://www.learninglions.org/" target="_blank" rel="noopener" :aria-label="$t('vvExtra.support.learning')">
          <NuxtImg src="/img/vv/learning.png" alt="" width="672" height="158" sizes="320px" format="webp" loading="lazy" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.support {
  max-width: var(--container);
  margin-inline: auto;
  padding: 1rem var(--gutter);

  h2 {
    font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
    margin-block: 1rem;
  }
}

.logos {
  list-style: none;
  margin: 0;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }

  li { display: flex; }

  // On narrow screens the hosting NGO leads, as it did before.
  .hn { @media (max-width: 768px) { order: -1; } }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }

  img {
    height: 5rem;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
