<template>
  <div>
    <LegalPrivacyPolicy />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({ title: t('privacyPolicy.title') })
</script>
