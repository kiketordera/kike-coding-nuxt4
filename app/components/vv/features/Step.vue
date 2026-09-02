<template>
  <section v-reveal class="vv-step">
    <div class="inner">
      <div class="title">
        <img src="~/assets/svg/vv/youtube-bg-blue.svg" width="81" height="60" alt="">
        <h2>
          {{ $t('stepByStepSection.title', { step: $t('stepByStepSection.step'), tutorials: $t('stepByStepSection.tutorials') }) }}
        </h2>
      </div>
      <div class="info">
        <p>{{ $t('stepByStepSection.description1') }}</p>
        <p>{{ $t('stepByStepSection.description2') }}</p>
        <p>{{ $t('stepByStepSection.description3') }}</p>
      </div>
      <div class="screens">
        <figure class="details">
          <NuxtImg
            src="/img/vv/system.png"
            width="729"
            height="1474"
            sizes="220px"
            format="webp"
            loading="lazy"
            alt=""
          />
          <figcaption>{{ $t('stepByStepSection.createCourses') }}</figcaption>
        </figure>
        <figure class="details">
          <NuxtImg
            src="/img/vv/vikapu.png"
            width="762"
            height="1476"
            sizes="220px"
            format="webp"
            loading="lazy"
            alt=""
          />
          <figcaption>{{ $t('stepByStepSection.guidingSteps') }}</figcaption>
        </figure>
        <figure class="details">
          <NuxtImg
            src="/img/vv/rings.png"
            width="746"
            height="1473"
            sizes="220px"
            format="webp"
            loading="lazy"
            alt=""
          />
          <figcaption>{{ $t('stepByStepSection.records') }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  font-family: $nunito-regular;
  font-weight: 400;
  color: white;
  background-color: $branding-blue-deep;
  padding: 4rem var(--gutter);

  .inner {
    max-width: 56rem;
    margin-inline: auto;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-bottom: 1.5rem;

    img {
      flex: none;
      width: 81px;
      height: 60px;
    }

    h2 {
      font-family: $nunito-regular;
      font-weight: 700;
      font-size: clamp(1.5rem, 1.1rem + 1.8vw, 2.4rem);
      letter-spacing: 0;
      color: inherit;
      text-align: center;
    }
  }

  .info {
    max-width: 48rem;
    margin-inline: auto;

    p {
      font-size: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
      line-height: var(--lh-body);
      margin-inline: auto;
    }
  }

  .screens {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem 2rem;
    margin-top: 2.5rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .details {
    margin: 0;
    text-align: center;

    img {
      width: min(100%, 220px);
      height: auto;
      margin-inline: auto;
    }

    figcaption {
      margin: 1rem auto 0;
      max-width: 20rem;
      font-size: var(--fs-sm);
      line-height: var(--lh-body);
    }
  }
}
</style>
