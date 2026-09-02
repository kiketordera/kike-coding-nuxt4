<template>
  <section id="education" class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('aboutPage.education.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('aboutPage.education.title') }}&nbsp;<span class="brace">}</span></h2>
      </div>

      <ol v-reveal.stagger="90" class="k-content list">
        <li v-for="school in schools" :key="school.id" class="entry">
          <div class="logo"><img :src="school.logo" alt="" width="96" height="56" loading="lazy"></div>
          <div class="text">
            <p class="when k-mono">
              {{ $t(`educationSection.${school.id}.duration`) }}
              <span class="k-muted">· {{ $t(`educationSection.${school.id}.length`) }}</span>
            </p>
            <h3>{{ $t(`educationSection.${school.id}.university`) }}</h3>
            <p class="degree k-mono">{{ $t(`educationSection.${school.id}.degree`) }}</p>
            <p class="desc">{{ $t(`educationSection.${school.id}.description`) }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts" setup>
const schools = [
  { id: 'upv', logo: '/svg/kk/upv.svg' },
  { id: 'czech', logo: '/svg/kk/czech.svg' },
]
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.entry {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem var(--grid-gap);
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--line);
  @media (min-width: 640px) { grid-template-columns: 96px minmax(0, 1fr); }

  .logo {
    width: 96px; height: 56px;
    display: flex; align-items: center; justify-content: center;
    background: var(--text-strong);
    border-radius: var(--radius);
    padding: 0.4rem 0.6rem;
    img { max-height: 100%; width: auto; object-fit: contain; filter: grayscale(1); opacity: 0.85; }
  }
  &:hover .logo img { filter: none; opacity: 1; }

  .text { display: grid; gap: 0.4rem; min-width: 0; }
  .when { font-size: var(--fs-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-strong); }
  h3 { font-size: var(--fs-h3); font-weight: 700; }
  .degree { font-size: var(--fs-sm); font-weight: 600; color: var(--salmon); }
  .desc { font-family: var(--font-text); color: var(--text); margin-top: 0.35rem; }
}
@media (prefers-reduced-motion: no-preference) {
  .entry .logo img { transition: filter var(--dur-fast) ease-out, opacity var(--dur-fast) ease-out; }
}
</style>
