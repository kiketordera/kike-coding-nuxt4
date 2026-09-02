<template>
  <section v-reveal class="awards">
    <h2>{{ $t('awardsSection.title') }}</h2>
    <div class="award">
      <p>{{ $t('awardsSection.description') }}</p>
      <a href="https://blogthinkbig.com/" target="_blank" rel="noopener">
        <NuxtImg
          src="/img/vv/think-big.jpeg"
          :alt="$t('vvExtra.awards.thinkBig')"
          width="450"
          height="322"
          sizes="240px"
          format="webp"
          loading="lazy"
        />
      </a>
      <a href="https://www.fundaciontelefonica.com/" target="_blank" rel="noopener">
        <NuxtImg
          src="/img/vv/telefonica.png"
          :alt="$t('vvExtra.awards.telefonica')"
          width="800"
          height="404"
          sizes="240px"
          format="webp"
          loading="lazy"
        />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.awards {
  max-width: var(--container);
  margin-inline: auto;
  padding: 1rem var(--gutter);

  h2 {
    font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
    margin-block: 1rem;
  }

  .award {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
    padding-block: 2.5rem;
    @media (min-width: 769px) {
      grid-template-columns: minmax(0, 1fr) auto auto;
      gap: 3rem;
    }

    p {
      font-size: var(--fs-md);
      letter-spacing: 0.02em;
      max-width: 65ch;
      text-align: start;
    }

    a {
      display: inline-flex;
      justify-self: center;
      min-height: 44px;
      align-items: center;
    }

    img {
      height: 7rem;
      width: auto;
      max-width: 15rem;
      object-fit: contain;
    }
  }
}
</style>
