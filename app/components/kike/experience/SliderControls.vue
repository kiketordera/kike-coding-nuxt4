<template>
  <nav class="k-container siblings" :aria-label="$t('caseStudy.projectsNav')">
    <ul v-reveal.stagger="80" class="rows">
      <li v-for="item in items" :key="item.dir">
        <NuxtLink :to="item.project.url" class="row" :class="item.dir">
          <span class="dir k-mono">
            <span class="brace" aria-hidden="true">{</span> {{ $t(`caseStudy.${item.dir}`) }} <span class="brace" aria-hidden="true">}</span>
          </span>
          <span class="text">
            <span class="client k-mono">{{ item.project.client }}</span>
            <span class="headline">{{ item.project.headline || item.project.firstTitle || item.project.name }}</span>
          </span>
          <span class="arrow" aria-hidden="true">{{ item.dir === 'previous' ? '←' : '→' }}</span>
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink :to="{ path: '/', hash: '#work' }" class="all k-link">
      <span class="sl" aria-hidden="true">//</span> {{ $t('caseStudy.allWork') }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { Project } from '~/types/types'

const props = withDefaults(defineProps<{ index?: number }>(), { index: 0 })

const projects = await getI18nJson<Project>('projects')

const items = computed(() => {
  const total = projects.length
  if (!total) return []
  const prev = projects[(props.index - 1 + total) % total]
  const next = projects[(props.index + 1) % total]
  return [
    prev && { dir: 'previous' as const, project: prev },
    next && { dir: 'next' as const, project: next },
  ].filter((item): item is { dir: 'previous' | 'next'; project: Project } => !!item)
})
</script>

<style lang="scss" scoped>
.siblings {
  padding-block: 0 var(--space-section);
  display: grid;
  gap: var(--space-stack);
}

.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.5rem 1.5rem;
  align-items: center;
  min-height: 44px;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--line);
  color: inherit;
  @media (min-width: 640px) { grid-template-columns: 9rem minmax(0, 1fr) auto; }

  .dir { font-size: var(--fs-sm); font-weight: 700; color: var(--text-strong); }
  .text { display: grid; gap: 0.25rem; min-width: 0; grid-column: 1; @media (min-width: 640px) { grid-column: 2; } }
  .client { font-size: var(--fs-xs); letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); }
  .headline { font-family: var(--font-mono); font-weight: 700; font-size: var(--fs-h3); line-height: var(--lh-snug); color: var(--text-strong); text-wrap: balance; transition: color var(--dur-fast) ease-out; }
  .arrow { grid-column: 2; grid-row: 1 / span 2; font-family: var(--font-mono); font-size: var(--fs-lg); color: var(--text-muted); transition: transform var(--dur) var(--ease-out), color var(--dur-fast) ease-out; @media (min-width: 640px) { grid-column: 3; grid-row: 1; } }

  &:hover, &:focus-visible {
    .headline, .arrow { color: var(--teal); }
    &.next .arrow { transform: translateX(0.25em); }
    &.previous .arrow { transform: translateX(-0.25em); }
  }
}

.all {
  justify-self: start;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  border-bottom: 0;
  .sl { color: var(--text-muted); margin-right: 0.35rem; }
}
</style>
