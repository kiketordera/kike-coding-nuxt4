<template>
  <div>
    <h1 class="sr-only">Value Villages · {{ $t('labels.features') }}</h1>
    <vv-features-Community />
    <vv-features-Map />
    <vv-features-OfflineMode />
    <vv-features-Cards />
    <ClientOnly>
      <vv-features-WifiAnimation />
    </ClientOnly>
    <vv-features-Cards2 />
    <vv-features-Step />
    <vv-features-Chain />
    <vv-features-DataTable />
    <vv-features-Analysis />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'vv',
})

const { t } = useI18n();

useSeoMeta({
  title: `${t('seo.valueVillages.features.title')}`,
  description: t('seo.valueVillages.features.description'),
});
</script>
