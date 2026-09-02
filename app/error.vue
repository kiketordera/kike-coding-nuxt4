<template>
  <NuxtLayout>
    <section class="k-container err">
      <p class="k-eyebrow">// {{ code }}</p>
      <h1><span class="brace">{</span> {{ $t('v2.error.title') }} <span class="brace">}</span></h1>
      <p class="k-lead">{{ $t('v2.error.body') }}</p>
      <p class="path k-mono k-muted">{{ path }}</p>
      <button type="button" class="k-btn k-btn--primary" @click="goHome">
        {{ $t('v2.error.home') }}
      </button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const route = useRoute()
const { t } = useI18n()

const code = computed(() => props.error?.statusCode ?? 500)
const path = computed(() => route.fullPath)

useSeoMeta({ title: `${code.value} — ${t('v2.error.title')}`, robots: 'noindex' })

const goHome = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
.err {
  min-height: calc(100svh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-stack);
  padding-block: var(--space-section);

  h1 {
    font-size: var(--fs-display);
    line-height: var(--lh-tight);
    letter-spacing: var(--track-display);
    font-weight: 800;
  }
  .path { font-size: var(--fs-sm); word-break: break-all; }
}
</style>
