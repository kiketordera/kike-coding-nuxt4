<template>
  <div>
    <LegalCookiesPolicy />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({ title: t('cookies-policy-title') })
</script>
