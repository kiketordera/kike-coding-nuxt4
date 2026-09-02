<template>
  <section id="about" class="story k-section" aria-labelledby="about-title">
    <div class="k-container k-grid grid">
      <div v-reveal class="k-label head">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('aboutPage.marker') }}</p>
        <h1 id="about-title" class="k-title title"><span class="brace">{</span> {{ $t('v2.about.title') }}&nbsp;<span class="brace">}</span></h1>
        <div class="portrait">
          <NuxtImg
            src="/img/kk/kike.jpg"
            :alt="$t('aboutPage.portraitAlt')"
            width="627"
            height="597"
            sizes="320px"
            format="webp"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>

      <div v-reveal class="k-content body">
        <p class="hello">{{ $t('aboutSection.intro') }}</p>
        <div class="prose">
          <p>{{ $t('aboutSection.codingPassion') }}</p>
          <p>{{ $t('aboutSection.craftingExperiences') }}</p>
          <p>{{ $t('aboutSection.createMagic') }}</p>
        </div>
        <div class="actions">
          <a :href="links.calendly" target="_blank" rel="noopener" class="k-btn k-btn--primary">{{ $t('v2.hero.cta') }}</a>
          <a :href="links.whatsapp" target="_blank" rel="noopener" class="tap-link"><span class="tap-label">{{ $t('v2.contact.whatsapp') }} →</span></a>
        </div>
      </div>

      <div v-reveal class="k-label aside">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('aboutPage.resume.label') }}</p>
        <ul class="resume">
          <li>
            <a href="/kike-tordera-cv-human.pdf" download class="tap-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></svg>
              <span class="tap-label">{{ $t('aboutPage.resume.human') }}</span>
            </a>
          </li>
          <li>
            <a href="/kike-tordera-cv-ats.pdf" download class="tap-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></svg>
              <span class="tap-label">{{ $t('aboutPage.resume.ats') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const links = useContactLinks()
</script>

<style lang="scss" scoped>
// The nav is fixed, so the first section on the page clears it itself.
.story { padding-top: calc(var(--nav-h) + var(--space-block)); }

// Desktop: the label column stacks head (marker, title, portrait) over the résumé
// list; the story runs down the content column beside both. On phones the DOM
// order reads marker, title, portrait, story, résumé.
.grid {
  @media (min-width: 900px) {
    row-gap: var(--space-stack);
    .body { grid-row: 1 / span 2; }
    .aside { grid-row: 2; align-self: start; }
  }
}

.title { font-size: var(--fs-h1); margin-top: 0.75rem; }

.portrait {
  position: relative;
  max-width: 320px;
  margin-top: var(--space-stack);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
  img { width: 100%; height: auto; filter: grayscale(1); }
  &::after { content: ''; position: absolute; inset: 0; background: var(--teal); mix-blend-mode: multiply; opacity: 0; }
  &:hover {
    img { filter: grayscale(0.6); }
    &::after { opacity: 0.35; }
  }
}
@media (prefers-reduced-motion: no-preference) {
  .portrait img { transition: filter var(--dur-fast) ease-out; }
  .portrait::after { transition: opacity var(--dur-fast) ease-out; }
}

.body { display: grid; gap: var(--space-stack); justify-items: start; }
.hello { font-family: var(--font-mono); font-size: var(--fs-h3); font-weight: 700; color: var(--text-strong); }
.prose { font-family: var(--font-text); color: var(--text); font-size: var(--fs-lg); }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; margin-top: 0.5rem; }

.resume {
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  display: grid;
}
// A k-link with a 44px tap box: the underline stays on the label, the box grows around it.
.tap-link {
  @include k-link;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 44px;
  border-bottom: 0;
  padding-bottom: 0;
  svg { flex: none; }
  .tap-label { border-bottom: 1px solid currentColor; padding-bottom: 2px; }
}
</style>
