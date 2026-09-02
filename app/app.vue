<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = String(config.public.site?.url ?? '').replace(/\/$/, '')

useHead({
  htmlAttrs: { lang: locale },
})

useSeoMeta({
  ogType: 'website',
  ogImage: `${siteUrl}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
})
</script>
