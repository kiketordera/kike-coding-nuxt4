<template>
  <section v-reveal class="track">
    <div class="title">
      <img src="~/assets/svg/vv/qr.svg" alt="" width="60" height="60">
      <h2>{{ $t('trackSystemSection.title') }}</h2>
    </div>
    <div class="info">
      <p>{{ $t('trackSystemSection.trackProcess') }}</p>
      <p>{{ $t('trackSystemSection.clientConnection') }}</p>
      <p>{{ $t('trackSystemSection.culturalImmersion') }}</p>
    </div>
    <div class="box">
      <NuxtImg
        src="/img/vv/box.png"
        alt=""
        width="1788"
        height="1057"
        sizes="(max-width: 700px) 100vw, 660px"
        format="webp"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.track {
  padding-top: var(--space-block);
  margin-bottom: 2rem;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    padding: 0 var(--gutter) 1rem;

    img {
      height: 60px;
      width: auto;
      flex: none;
      @media (max-width: 768px) { height: 2.5rem; }
    }

    h2 {
      font-size: clamp(1.5rem, 1rem + 2vw, 2.4rem);
      font-weight: 600;
      text-align: center;
    }
  }

  .info {
    max-width: 48rem;
    margin-inline: auto;
    padding: 0 var(--gutter);

    p {
      font-size: var(--fs-md);
      margin: 2rem auto;
      max-width: 65ch;
      text-align: start;
      @media (min-width: 768px) { font-size: var(--fs-lg); }
    }
  }

  .box {
    padding-top: 1rem;
    img {
      width: 100%;
      max-width: 660px;
      height: auto;
      margin-inline: auto;
    }
  }
}
</style>
