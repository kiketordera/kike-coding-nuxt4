<template>
  <section id="experience" class="k-section">
    <div class="k-container k-grid head">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('v2.experience.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('v2.experience.title') }}&nbsp;<span class="brace">}</span></h2>
        <p class="k-muted intro">{{ $t('v2.experience.intro', stats) }}</p>
      </div>
      <div v-reveal class="k-content filters" role="group">
        <button
          v-for="f in filters"
          :key="f"
          type="button"
          class="filter"
          :class="[f, { active: filter === f }]"
          :aria-pressed="filter === f"
          @click="filter = f"
        >{{ $t(`v2.experience.${f}`) }}</button>
      </div>
    </div>

    <ol class="k-container log">
      <li v-for="exp in shown" :key="exp.title + exp.startDate" v-reveal class="entry" :class="exp.type">
        <div class="when">
          <p class="date k-mono">{{ exp.startDate }} — {{ isToday(exp.endDate) ? $t('v2.experience.today') : exp.endDate }}</p>
          <p class="duration k-mono">{{ durationOf(exp) }}</p>
          <div class="logo"><img :src="exp.img" :alt="exp.nameCompany" loading="lazy" width="96" height="56"></div>
        </div>
        <div class="axis" aria-hidden="true"><span class="dot" /></div>
        <div class="what">
          <h3><span class="brace">{</span> {{ exp.title }} <span class="brace">}</span></h3>
          <p class="company k-mono">
            <a v-if="exp.webLink" :href="exp.webLink" target="_blank" rel="noopener">{{ exp.nameCompany }}</a>
            <template v-else>{{ exp.nameCompany }}</template>
            <span v-if="exp.place" class="place"> · {{ exp.place }}</span>
          </p>
          <div class="desc">
            <p v-for="text in exp.description" :key="text">{{ text }}</p>
          </div>
          <ul class="chips" :aria-label="$t('v2.experience.title')">
            <li v-for="chip in exp.skills" :key="chip" class="k-chip">{{ chip }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script lang="ts" setup>
import type { ProjectExperience } from '~/types/types'

type Filter = 'all' | 'work' | 'volunteer' | 'education'

const { t } = useI18n()
const experiences = await getI18nJson<ProjectExperience>('work-experience')
const filters: Filter[] = ['all', 'work', 'volunteer', 'education']
const filter = ref<Filter>('work')

const latestFirst = computed(() => [...experiences].reverse())
const shown = computed(() => latestFirst.value.filter((exp) => filter.value === 'all' || exp.type === filter.value))

const isToday = (value: string) => /^(today|hoy|aujourd|heute)/i.test(value)

// An open-ended role shows how long it has run so far instead of printing "Today" twice.
const durationOf = (exp: ProjectExperience) => {
  if (!isToday(exp.durationMonths)) return exp.durationMonths
  const startYear = Number(exp.startDate.match(/\d{4}/)?.[0])
  const years = new Date().getFullYear() - startYear
  return years > 0 ? t('v2.experience.yearsSoFar', { n: years }) : t('v2.experience.today')
}

// "N years, N roles, N countries" — computed from the data, never typed by hand.
const stats = computed(() => {
  const years = experiences.map((exp) => Number(exp.startDate.match(/\d{4}/)?.[0])).filter(Boolean)
  const countries = new Set(
    experiences
      .map((exp) => exp.place?.split(',').pop()?.trim())
      .filter((place): place is string => !!place && !/remote|online/i.test(place)),
  )
  return { years: new Date().getFullYear() - Math.min(...years), roles: experiences.length, countries: countries.size }
})
</script>

<style lang="scss" scoped>
.head { row-gap: var(--space-stack); align-items: end; }
.intro { margin-top: 1rem; }

.filters {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  .filter {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 0.5rem 0.9rem;
    min-height: 40px;
    border-radius: 999px;
    border: 1px solid var(--line-strong);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition: color var(--dur-fast) ease-out, border-color var(--dur-fast) ease-out, background-color var(--dur-fast) ease-out;
    &:hover { border-color: var(--text-strong); }
    &.active { background: var(--text-strong); color: var(--on-accent); border-color: var(--text-strong); }
    &.work.active { background: var(--teal); border-color: var(--teal); }
    &.volunteer.active { background: var(--yellow); border-color: var(--yellow); }
    &.education.active { background: var(--salmon); border-color: var(--salmon); }
  }
}

// The commit log: label column | 2rem axis | content column, the axis carrying the line and a dot per entry.
.log {
  list-style: none;
  margin: var(--space-block) auto 0;
  padding: 0;
}

.entry {
  --type: var(--teal);
  &.volunteer { --type: var(--yellow); }
  &.education { --type: var(--salmon); }

  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  column-gap: var(--grid-gap);
  padding-bottom: var(--space-block);
  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 4fr) 2rem minmax(0, 8fr);
  }
}

.axis {
  position: relative;
  grid-column: 1;
  grid-row: 1 / span 2;
  @media (min-width: 900px) { grid-column: 2; grid-row: 1; }

  // the line runs through the entry's bottom padding so the log reads as one continuous axis
  &::before, &::after { content: ''; position: absolute; left: calc(50% - 1px); top: 0; bottom: calc(-1 * var(--space-block)); width: 2px; }
  &::before { background: var(--line); }
  &::after { background: var(--type); transform: scaleY(0); transform-origin: top; }
  .dot {
    position: absolute; left: 50%; top: 0.55em;
    width: 12px; height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--type);
    box-shadow: 0 0 0 4px var(--bg);
    transition: background-color 0.4s var(--ease-out) 0.2s;
  }
}
.entry.is-visible .axis .dot { background: var(--type); }

// The line draws as each entry scrolls through the viewport; browsers without
// scroll-driven animations see the fully drawn line.
.axis::after { transform: scaleY(1); }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .axis::after { transform: scaleY(0); animation: draw linear both; animation-timeline: view(); animation-range: entry 20% cover 45%; }
  }
}
@keyframes draw { to { transform: scaleY(1); } }

.when {
  grid-column: 2; grid-row: 1;
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem 1rem;
  margin-bottom: 0.75rem;
  @media (min-width: 900px) {
    grid-column: 1; grid-row: 1;
    flex-direction: column; align-items: flex-end; text-align: right; gap: 0.35rem;
    margin-bottom: 0;
  }
  .date { font-size: var(--fs-sm); color: var(--text-strong); font-weight: 600; }
  .duration { font-size: var(--fs-xs); color: var(--text-muted); }
  .logo {
    width: 96px; height: 56px;
    display: flex; align-items: center; justify-content: center;
    background: var(--text);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 0.4rem 0.6rem;
    margin-top: 0.25rem;
    opacity: 0.7;
    transition: opacity var(--dur-fast) ease-out, background-color var(--dur-fast) ease-out;
    img { max-height: 100%; width: auto; object-fit: contain; filter: grayscale(1); transition: filter var(--dur-fast) ease-out; }
  }
}
.entry:hover .logo { opacity: 1; background: var(--text-strong); img { filter: none; } }

.what {
  grid-column: 2; grid-row: 2;
  display: grid; gap: 0.6rem; min-width: 0;
  @media (min-width: 900px) { grid-column: 3; grid-row: 1; }

  // Titles stay in the text colour — teal means "interactive" everywhere else; the entry type lives on the dot.
  h3 { font-size: var(--fs-h3); color: var(--text-strong); font-weight: 700; .brace { color: var(--salmon); } }
  .company { font-size: var(--fs-sm); color: var(--text-strong); font-weight: 600; a { color: inherit; border-bottom: 1px solid var(--line-strong); &:hover { color: var(--teal); border-color: currentColor; } } .place { color: var(--text-muted); font-weight: 400; } }
  .desc { font-family: var(--font-text); color: var(--text); max-width: 62ch; p { margin: 0; } p + p { margin-top: 0.5em; } }
  .chips { list-style: none; margin: 0.5rem 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem; }
}
</style>
