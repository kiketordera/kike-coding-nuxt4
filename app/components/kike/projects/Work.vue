<template>
  <section id="work" class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('v2.work.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('v2.work.title') }}&nbsp;<span class="brace">}</span></h2>
        <p class="k-muted intro">{{ $t('v2.work.intro') }}</p>
      </div>

      <ol v-reveal.stagger="90" class="k-content rows">
        <li v-for="project in projects" :key="project.id">
          <NuxtLink :to="project.url" class="row">
            <div class="text">
              <p class="meta k-mono">
                {{ project.client }}
                <template v-if="project.role"> · {{ project.role }}</template>
                <template v-if="project.intro.year"> · {{ project.intro.year }}</template>
              </p>
              <h3>{{ project.headline || project.firstTitle || project.name }}</h3>
              <p class="outcome">{{ project.outcome || project.firstDescription?.[0] }}</p>
              <span class="k-link read">{{ $t('v2.work.read') }} →</span>
            </div>
            <div class="thumb" :style="{ '--tint': project.color_bg_title }">
              <NuxtImg :src="project.mainImg" alt="" width="240" height="168" sizes="240px" format="webp" loading="lazy" />
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/types'

const projects = await getI18nJson<Project>('projects')
</script>

<style lang="scss" scoped>
.intro { margin-top: 1rem; max-width: 28ch; }

.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--line);
  color: inherit;
  transition: border-color var(--dur-fast) ease-out;
  @media (min-width: 640px) { grid-template-columns: minmax(0, 1fr) 160px; gap: 2rem; }

  .text { display: grid; gap: 0.5rem; min-width: 0; }
  .meta { font-size: var(--fs-xs); letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); }
  h3 { font-size: var(--fs-h3); font-weight: 700; transition: color var(--dur-fast) ease-out; }
  .outcome { font-family: var(--font-text); color: var(--text); font-size: var(--fs-md); max-width: 58ch; }
  .read { justify-self: start; margin-top: 0.25rem; opacity: 0.9; }

  .thumb {
    position: relative;
    aspect-ratio: 10 / 7;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--line);
    order: -1;
    @media (min-width: 640px) { order: 0; }
    img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.35); transition: transform var(--dur) var(--ease-out), filter var(--dur-fast) ease-out; }
    &::after { content: ''; position: absolute; inset: 0; background: var(--tint); opacity: 0; mix-blend-mode: multiply; transition: opacity var(--dur-fast) ease-out; }
  }

  &:hover, &:focus-visible {
    h3 { color: var(--teal); }
    .thumb img { transform: scale(1.04); filter: grayscale(0); }
    .thumb::after { opacity: 0.25; }
  }
}
</style>
