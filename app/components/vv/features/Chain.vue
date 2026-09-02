<template>
  <section v-reveal class="vv-chain">
    <div class="inner">
      <div class="title">
        <img src="~/assets/svg/vv/qr.svg" width="60" height="60" alt="">
        <h2>{{ $t('trackItemsSection.title', { items: $t('trackItemsSection.items') }) }}</h2>
      </div>
      <div class="info">
        <p>{{ $t('trackItemsSection.description1') }}</p>
        <p>{{ $t('trackItemsSection.description2') }}</p>
        <ul>
          <li>{{ $t('trackItemsSection.useCase1') }}</li>
          <li>{{ $t('trackItemsSection.useCase2') }}</li>
          <li>{{ $t('trackItemsSection.useCase3') }}</li>
        </ul>
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
      width: 60px;
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
    font-size: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
    line-height: var(--lh-body);

    p {
      margin-inline: auto;
    }

    ul {
      list-style-type: circle;
      max-width: 65ch;
      margin: 1rem auto 0;
      padding-inline-start: 1.5rem;
    }

    li + li {
      margin-top: 0.75rem;
    }
  }
}
</style>
