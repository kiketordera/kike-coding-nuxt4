<template>
  <section class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ marker }} {{ label }}</p>
      </div>

      <div v-reveal class="k-content body">
        <h2 v-if="title" class="k-title"><span class="brace">{</span> {{ title }}&nbsp;<span class="brace">}</span></h2>
        <div v-if="description.length" class="copy">
          <p v-for="text in description" :key="text">{{ text }}</p>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  /** Two-digit index for the marker: "01" */
  marker: string
  /** Section label after the marker: "the problem" */
  label: string
  title: string
  description: string[]
}>()
</script>

<style lang="scss" scoped>
.body { display: grid; gap: var(--space-stack); }

.copy {
  font-family: var(--font-text);
  color: var(--text);
  p { max-width: 65ch; }
}
</style>
