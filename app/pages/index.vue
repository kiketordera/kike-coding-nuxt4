<template>
  <div>
    <kike-index-Information />
    <general-ContinuousScroll />
    <kike-projects-Work />
    <kike-index-AppsDeveloped />
    <kike-index-About />
    <kike-experience-Timeline />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
  title: t('titleSEOIndex'),
  description: t('descriptionSEOIndex'),
})
</script>
