<template>
  <section id="about-short" class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('v2.about.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('v2.about.title') }}&nbsp;<span class="brace">}</span></h2>
      </div>
      <div v-reveal class="k-content body">
        <p class="k-lead">{{ $t('v2.about.body') }}</p>
        <NuxtLink to="/about" class="k-link">{{ $t('v2.about.more') }} →</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.body {
  display: grid;
  gap: 1.5rem;
  justify-items: start;
  .k-lead { font-family: var(--font-text); font-size: clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem); line-height: 1.45; max-width: 40ch; }
}
</style>
