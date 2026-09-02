<template>
  <section v-reveal class="vv-analysis">
    <div class="inner">
      <div class="title">
        <img src="~/assets/svg/vv/report.svg" width="59" height="60" alt="">
        <h2>
          {{ $t('reportsSection.title', { reports: $t('reportsSection.reports'), analysis: $t('reportsSection.analysis') }) }}
        </h2>
      </div>
      <div class="info">
        <p>{{ $t('reportsSection.description1') }}</p>
        <p>{{ $t('reportsSection.description2') }}</p>
        <p>{{ $t('reportsSection.description3') }}</p>
        <p>{{ $t('reportsSection.description4') }}</p>
      </div>
      <div class="box-img">
        <NuxtImg
          src="/img/vv/excel.png"
          width="193"
          height="259"
          sizes="193px"
          format="webp"
          loading="lazy"
          alt=""
        />
      </div>
      <div class="info">
        <p>{{ $t('reportsSection.excelDescription') }}</p>
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
      width: 59px;
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

  .box-img {
    display: flex;
    justify-content: center;
    margin: 2rem auto;

    img {
      width: min(100%, 193px);
      height: auto;
    }
  }
}
</style>
