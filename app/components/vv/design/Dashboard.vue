<template>
  <section class="band">
    <div v-reveal class="card">
      <div class="text">
        <div class="title">
          <img class="icon" src="/svg/vv/boundaries/dashboard.svg" alt="" width="55" height="40">
          <h2>{{ $t('vvExtra.design.dashboard.title') }}</h2>
        </div>
        <p>{{ $t('vvExtra.design.dashboard.intro') }}</p>
        <ul>
          <li><strong>{{ $t('vvExtra.design.dashboard.services') }}:</strong> {{ $t('vvExtra.design.dashboard.servicesText') }}</li>
          <li><strong>{{ $t('vvExtra.design.dashboard.actions') }}:</strong> {{ $t('vvExtra.design.dashboard.actionsText') }}</li>
          <li><strong>{{ $t('vvExtra.design.dashboard.logout') }}:</strong> {{ $t('vvExtra.design.dashboard.logoutText') }}</li>
        </ul>
      </div>
      <NuxtImg
        src="/img/vv/design-dashboard.png"
        alt=""
        width="890"
        height="1766"
        sizes="(max-width: 639px) 40vw, 220px"
        format="webp"
        loading="lazy"
        class="shot"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
// The client's pink has no darkened variant and clears neither white nor dark
// text at body size, so the band carries the colour and the copy sits on a
// white panel in front of it.
.band {
  background: $branding-pink;
  padding: 2rem var(--gutter) 3rem;
}

.card {
  max-width: 42rem;
  margin-inline: auto;
  padding: 1.5rem var(--gutter) 1rem;
  background: white;
  border-radius: var(--radius-lg);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;
  @media (min-width: 640px) { grid-template-columns: minmax(0, 1fr) auto; }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.5rem;

    .icon {
      width: 55px;
      height: 40px;
      object-fit: contain;
      flex: none;
    }

    h2 {
      font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
      color: inherit;
    }
  }

  p {
    margin-top: 1rem;
    max-width: 65ch;
    font-size: var(--fs-md);
    text-align: start;
  }

  ul {
    margin: 1rem 0 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.5rem;
    max-width: 65ch;
    font-size: var(--fs-md);
    strong { color: $branding-pink-deep; }
  }

  // A fixed height plus the width/height attributes reserves the box before
  // the lazy image arrives, so nothing shifts.
  .shot {
    height: 300px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin-inline: auto;
    padding-bottom: 0.5rem;
    @media (min-width: 640px) { height: 420px; }
  }
}
</style>
