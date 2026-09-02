<template>
  <ul v-reveal.stagger="70" class="mosaic">
    <li v-for="(img, i) in links" :key="img" :class="{ wide: isWide(i) }">
      <NuxtImg
        :src="img"
        :alt="$t('caseStudy.mockupAlt', { client, n: i + 1 })"
        width="960"
        height="720"
        sizes="(max-width: 639px) 92vw, (max-width: 899px) 50vw, 450px"
        format="webp"
        loading="lazy"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps<{
  links: string[]
  client: string
}>()

// The first tile is wide; with an even count the last one is too, so rows stay balanced.
const isWide = (index: number) => {
  if (index === 0) return true
  return props.links.length % 2 === 0 && index === props.links.length - 1
}
</script>

<style lang="scss" scoped>
.mosaic {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 640px) { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1rem; }

  li {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: var(--surface);
    @media (min-width: 640px) {
      grid-column: span 5;
      &.wide { grid-column: span 7; }
    }
  }

  img { width: 100%; height: 100%; object-fit: cover; }
}
</style>
