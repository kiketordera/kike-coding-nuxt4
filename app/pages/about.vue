<template>
  <div>
    <KikeAboutInfo />
    <KikeAboutMySkills />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
  title: t('titleSEOAboutUs'),
  description: t('descriptionSEOAboutUs'),
})
</script>
