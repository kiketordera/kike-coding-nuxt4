<template>
  <section id="apps" class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('v2.apps.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('v2.apps.title') }}&nbsp;<span class="brace">}</span></h2>
        <p class="k-muted intro">{{ $t('v2.apps.intro') }}</p>
      </div>

      <ul v-reveal.stagger="70" class="k-content grid">
        <li v-for="app in developApps" :key="app.id">
          <a
            :href="app.appStoreURL"
            target="_blank"
            rel="noopener"
            class="card"
            :style="{ '--accent': app.accentColor }"
            :aria-label="$t('v2.apps.open', { name: app.name })"
          >
            <NuxtImg :src="`/apps/logos/${app.id}.png`" alt="" width="96" height="96" sizes="96px" format="webp" loading="lazy" class="icon" />
            <div class="body">
              <h3>{{ app.name }}</h3>
              <p v-if="te(`apps.${app.id}.description`)">{{ $t(`apps.${app.id}.description`) }}</p>
              <span class="store k-mono">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.7c-.02-2.42 1.98-3.58 2.07-3.64-1.13-1.65-2.88-1.88-3.5-1.9-1.49-.15-2.9.88-3.66.88-.76 0-1.92-.86-3.15-.83-1.62.02-3.12.94-3.95 2.4-1.69 2.93-.43 7.26 1.21 9.63.8 1.16 1.76 2.46 3.01 2.42 1.21-.05 1.67-.78 3.13-.78 1.46 0 1.87.78 3.15.75 1.3-.02 2.13-1.18 2.92-2.35.92-1.35 1.3-2.65 1.32-2.72-.03-.01-2.53-.97-2.55-3.86ZM13.97 5.6c.67-.81 1.12-1.94 1-3.06-.96.04-2.13.64-2.82 1.45-.62.72-1.16 1.87-1.01 2.97 1.07.08 2.16-.55 2.83-1.36Z"/></svg>
                App Store
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { developApps } from '~/types/apps'

const { te } = useI18n()
</script>

<style lang="scss" scoped>
.intro { margin-top: 1rem; max-width: 28ch; }

.grid {
  list-style: none; margin: 0; padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 640px) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
}

.card {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  color: inherit;
  height: 100%;
  transition: border-color var(--dur-fast) ease-out, background-color var(--dur-fast) ease-out;

  .icon { width: 72px; height: 72px; border-radius: 16px; transition: transform var(--dur-fast) ease-out; }
  .body { display: grid; gap: 0.35rem; min-width: 0; }
  // The app's accent is an identity cue (border, ring), never the text colour — several fail contrast on the dark surface.
  h3 { font-size: var(--fs-md); font-weight: 700; color: var(--text-strong); display: flex; align-items: center; gap: 0.5rem; }
  h3::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); flex: none; }
  p {
    font-family: var(--font-text);
    font-size: var(--fs-sm);
    color: var(--text);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .store { display: inline-flex; align-items: center; gap: 0.35rem; font-size: var(--fs-xs); color: var(--text-muted); margin-top: 0.25rem; transition: color var(--dur-fast) ease-out; }

  &:hover, &:focus-visible {
    border-color: var(--accent);
    .icon { transform: scale(1.04); }
    .store { color: var(--text-strong); }
  }
}
</style>
