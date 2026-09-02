<template>
  <section v-reveal class="vv-datatable">
    <div class="inner">
      <div class="title">
        <img src="~/assets/svg/vv/calendar.svg" width="62" height="60" alt="">
        <h2>
          {{ $t('decisionSection.title', { decisions: $t('decisionSection.decisions'), data: $t('decisionSection.data') }) }}
        </h2>
      </div>
      <div class="content">
        <div class="info">
          <p>{{ $t('decisionSection.description1') }}</p>
          <p>{{ $t('decisionSection.description2') }}</p>
          <ul>
            <li>{{ $t('decisionSection.checkbox') }}</li>
            <li>{{ $t('decisionSection.numbers') }}</li>
            <li>{{ $t('decisionSection.photos') }}</li>
            <li>{{ $t('decisionSection.descriptions') }}</li>
            <li>{{ $t('decisionSection.checkFrequency') }}</li>
          </ul>
        </div>
        <figure class="details">
          <NuxtImg
            src="/img/vv/car.png"
            width="1145"
            height="2237"
            sizes="150px"
            format="webp"
            loading="lazy"
            alt=""
          />
          <figcaption>{{ $t('decisionSection.createCourses') }}</figcaption>
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
  background-color: $branding-green-deep;
  padding: 4rem var(--gutter);

  .inner {
    max-width: 64rem;
    margin-inline: auto;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-bottom: 2rem;

    img {
      flex: none;
      width: 62px;
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

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: minmax(0, 1fr) 14rem;
      gap: 3rem;
    }
  }

  .info {
    min-width: 0;
    font-size: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
    line-height: var(--lh-body);

    ul {
      list-style-type: disc;
      max-width: 65ch;
      margin: 1rem 0 0;
      padding-inline-start: 1.5rem;
    }

    li + li {
      margin-top: 0.4rem;
    }
  }

  .details {
    margin: 0 auto;
    max-width: 20rem;
    text-align: center;

    img {
      width: 150px;
      height: auto;
      margin-inline: auto;
    }

    figcaption {
      margin-top: 1rem;
      font-size: var(--fs-md);
      line-height: var(--lh-body);
    }
  }
}
</style>
