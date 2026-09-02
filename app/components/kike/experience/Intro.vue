<template>
  <header class="k-container k-grid head">
    <div v-reveal class="k-content title">
      <p class="k-eyebrow">
        <span aria-hidden="true">//</span> {{ $t('caseStudy.eyebrow') }} <span class="sep" aria-hidden="true">·</span> <span class="client">{{ project.client }}</span>
      </p>
      <h1><span class="brace" aria-hidden="true">{</span> {{ project.headline || project.firstTitle || project.name }} <span class="brace" aria-hidden="true">}</span></h1>
      <p v-if="outcome" class="k-lead outcome">{{ outcome }}</p>
    </div>

    <dl v-reveal.stagger="50" class="k-label meta">
      <div v-if="project.role" class="row">
        <dt>{{ $t('caseStudy.role') }}</dt>
        <dd>{{ project.role }}</dd>
      </div>
      <div v-if="stack" class="row">
        <dt>{{ $t('caseStudy.stack') }}</dt>
        <dd>{{ stack }}</dd>
      </div>
      <div v-if="platform" class="row">
        <dt>{{ $t('caseStudy.platform') }}</dt>
        <dd>{{ platform }}</dd>
      </div>
      <div v-if="project.intro.year" class="row">
        <dt>{{ $t('caseStudy.year') }}</dt>
        <dd>{{ project.intro.year }}</dd>
      </div>
      <div v-if="live" class="row">
        <dt>{{ $t('caseStudy.live') }}</dt>
        <dd>
          <a :href="project.intro.url" target="_blank" rel="noopener" class="k-link" :aria-label="$t('caseStudy.liveAria', { host: live })">{{ live }} ↗</a>
        </dd>
      </div>
    </dl>

    <figure v-reveal class="k-content cover" :style="{ '--cover-name': `cover-${project.id}` }">
      <NuxtImg
        :src="project.mainImg"
        :alt="$t('caseStudy.coverAlt', { client: project.client })"
        width="1048"
        height="687"
        sizes="(max-width: 899px) 100vw, 780px"
        format="webp"
        loading="eager"
        fetchpriority="high"
      />
    </figure>
  </header>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/types'

const props = defineProps<{ project: Project }>()
const { t } = useI18n()

const outcome = computed(() => props.project.outcome || props.project.firstDescription[0] || '')

// "Swift, SwiftUI," + "Flutter, Dart" → "Swift, SwiftUI, Flutter, Dart"
const stack = computed(() =>
  props.project.intro.tech
    .flatMap((line) => line.split(','))
    .map((item) => item.trim())
    .filter(Boolean)
    .join(', '),
)

// Only what the data says: the screenshot type plus the services list.
const platform = computed(() => {
  const services = props.project.intro.services.join(' ')
  const mobile = props.project.imagesType === 'mobile' || /mobile|app|móvil|application|anwendung/i.test(services)
  const web = props.project.imagesType === 'desktop' || /web/i.test(services)
  const labels = [mobile && t('caseStudy.mobile'), web && t('caseStudy.web')].filter((label): label is string => !!label)
  if (props.project.imagesType !== 'mobile') labels.reverse()
  return labels.join(' · ')
})

const live = computed(() => {
  const url = props.project.intro.url?.trim()
  if (!url) return ''
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
})
</script>

<style lang="scss" scoped>
.head {
  padding-top: calc(var(--nav-h) + var(--space-block));
  row-gap: var(--space-block);
  align-items: start;
}

.title {
  display: grid;
  gap: 1.25rem;
  // one step under the display size so a long headline holds to three lines
  h1 { font-size: clamp(1.9rem, 1.3rem + 2.4vw, 3.4rem); max-width: 22ch; line-height: 1.1; }
  .sep { color: var(--text-muted); margin-inline: 0.35rem; }
  .client { color: var(--text-strong); }
}

.outcome {
  font-family: var(--font-text);
  max-width: 52ch;
  color: var(--text);
}

// On the wide grid the title owns row 1; the meta list and the cover share row 2.
// On phones the work comes right after the title and the spec sheet follows it.
.meta {
  margin: 0;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  order: 3;
  @media (min-width: 900px) { grid-row: 2; order: 0; }

  .row {
    display: grid;
    grid-template-columns: 6.5rem minmax(0, 1fr);
    gap: 0.25rem 1rem;
    align-items: baseline;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--line);
    @media (min-width: 900px) { grid-template-columns: 1fr; gap: 0.2rem; }
  }
  dt {
    font-size: var(--fs-xs);
    font-weight: 600;
    letter-spacing: var(--track-label);
    text-transform: uppercase;
    color: var(--text-muted);
  }
  dd {
    margin: 0;
    font-size: var(--fs-sm);
    color: var(--text-strong);
    overflow-wrap: anywhere;
  }
}

.cover {
  margin: 0;
  aspect-ratio: 3 / 2;
  order: 2;
  view-transition-name: var(--cover-name);
  @media (min-width: 900px) { grid-row: 2; order: 0; }
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  img { width: 100%; height: 100%; object-fit: cover; }
}
</style>
