<template>
  <div class="design">
    <h1>{{ $t('designSection.title') }}</h1>

    <vv-design-Info
      class="block"
      icon="lock-color.svg"
      :texts="auth"
      image="authenication.png"
      :width="876"
      :height="1722"
      left
      :title="$t('designSection.authTitle')"
    />

    <vv-design-Dashboard class="block" />

    <vv-design-Info
      class="block"
      icon="alphabet-color.svg"
      :texts="numerical"
      image="design-num.png"
      :width="908"
      :height="1763"
      left
      :title="$t('designSection.numericalTitle')"
    />

    <div class="band block">
      <vv-design-Info
        icon="performance-bg-blue.svg"
        :texts="performance"
        image="vikapu.png"
        :width="762"
        :height="1476"
        :title="$t('designSection.performanceTitle')"
      />
    </div>

    <vv-design-Info
      class="block"
      icon="video-color.svg"
      :texts="video"
      image="vikapu.png"
      :width="762"
      :height="1476"
      left
      :title="$t('designSection.videoTitle')"
    />

    <vv-design-BackgroundImage />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'vv',
})

const { t } = useI18n();
useSeoMeta({
  title: `${t('seo.valueVillages.design.title')}`,
  description: t('seo.valueVillages.design.description'),
});

const auth = [
  t('designSection.auth.description1'),
  t('designSection.auth.description2'),
];

const numerical = [
  t('designSection.numerical.description1'),
  t('designSection.numerical.description2'),
];

const performance = [
  t('designSection.performance.description1'),
  t('designSection.performance.description2'),
];

const video = [
  t('designSection.video.description1'),
  t('designSection.video.description2'),
];
</script>

<style lang="scss" scoped>
.design {
  padding-bottom: var(--space-block);

  h1 {
    font-size: clamp(1.75rem, 1.25rem + 2vw, 2.4rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align: center;
    padding: var(--space-block) var(--gutter) 0;
  }

  .block { margin-top: var(--space-block); }

  // Full-bleed band in the client's blue, darkened to the variant that passes
  // 4.5:1 with white text — the same treatment as the About page bands.
  .band {
    background: $branding-blue-deep;
    color: white;
    padding-block: 1.5rem 4rem;
  }
}
</style>
