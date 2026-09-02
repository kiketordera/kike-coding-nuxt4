<template>
  <footer id="contact" class="foot">
    <div class="k-container k-grid cta">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('v2.contact.marker') }}</p>
        <p class="k-muted intro">{{ $t('v2.contact.intro') }}</p>
        <p class="status k-mono"><span class="pulse" aria-hidden="true" /> {{ $t('v2.contact.available') }}</p>
        <p class="time k-mono k-muted"><ClientOnly><span>{{ berlinTime }}</span></ClientOnly> · {{ $t('v2.contact.localTime') }}</p>
      </div>

      <div v-reveal class="k-content">
        <a :href="links.calendly" target="_blank" rel="noopener" class="big">
          <span class="brace" aria-hidden="true">{</span> {{ $t('v2.contact.title') }} <span class="brace" aria-hidden="true">}</span> <span class="arrow" aria-hidden="true">→</span>
        </a>
        <ul v-reveal.stagger="60" class="channels">
          <li><span class="k-marker">{{ $t('v2.contact.email') }}</span><a :href="links.mailto" class="k-link">{{ links.email }}</a></li>
          <li><span class="k-marker">{{ $t('v2.contact.whatsapp') }}</span><a :href="links.whatsapp" target="_blank" rel="noopener" class="k-link">+34 604 806 387</a><span class="k-muted note">{{ $t('answer') }}</span></li>
          <li><span class="k-marker">{{ $t('v2.contact.linkedin') }}</span><a :href="links.linkedin" target="_blank" rel="noopener" class="k-link">in/kiketordera</a></li>
        </ul>
      </div>
    </div>

    <div class="k-container bottom">
      <NuxtLink to="/" class="mark" aria-label="Kike Tordera — home"><img src="~assets/svg/kk/logo-mobile.svg" alt="" width="92" height="48"></NuxtLink>
      <p class="colophon k-mono">
        {{ $t('made-with') }} <span class="heart" aria-hidden="true">♥</span> {{ $t('by') }} <span class="me">{{ $t('myself') }}</span> &amp;
        <a href="https://thetotem.studio" target="_blank" rel="noopener">Totem Studio</a>
      </p>
      <nav class="legal k-mono" aria-label="Legal">
        <NuxtLink to="/legal/cookies-policy">{{ $t('legalSection.cookies') }}</NuxtLink>
        <NuxtLink to="/legal/privacy-policy">{{ $t('legalSection.privacy') }}</NuxtLink>
        <a href="#top" class="top" @click.prevent="toTop">{{ $t('v2.contact.backToTop') }} ↑</a>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const links = useContactLinks()

const berlinTime = ref('')
let timer: ReturnType<typeof setInterval> | undefined
const tick = () => {
  berlinTime.value = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' }).format(new Date())
}
onMounted(() => { tick(); timer = setInterval(tick, 30_000) })
onBeforeUnmount(() => clearInterval(timer))

const toTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
</script>

<style lang="scss" scoped>
.foot {
  background: var(--surface);
  border-top: 1px solid var(--line);
}

.cta { padding-block: var(--space-section) var(--space-block); align-items: start; }
.intro { margin-top: 1rem; max-width: 26ch; }
.status { margin-top: 1.5rem; font-size: var(--fs-xs); font-weight: 600; color: var(--text-strong); display: inline-flex; align-items: center; gap: 0.5rem; }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 0 0 var(--teal-soft); }
@media (prefers-reduced-motion: no-preference) { .pulse { animation: pulse 2.4s ease-out infinite; } }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0, 225, 221, 0.5); } 70% { box-shadow: 0 0 0 10px rgba(0, 225, 221, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 225, 221, 0); } }
.time { margin-top: 0.4rem; font-size: var(--fs-xs); font-variant-numeric: tabular-nums; }

.big {
  display: block;
  font-family: var(--font-mono);
  font-size: clamp(2.25rem, 1rem + 6.5vw, 6.5rem);
  line-height: var(--lh-tight);
  letter-spacing: var(--track-display);
  font-weight: 800;
  color: var(--text-strong);
  text-wrap: balance;
  .brace { color: var(--salmon); font-weight: 400; }
  .arrow { display: inline-block; color: var(--yellow); transition: transform var(--dur) var(--ease-out); }
  &:hover, &:focus-visible { color: var(--yellow); .arrow { transform: translateX(0.2em); } }
}

.channels {
  list-style: none; margin: var(--space-block) 0 0; padding: 0;
  display: grid; gap: 1rem;
  border-top: 1px solid var(--line);
  padding-top: var(--space-stack);
  li { display: grid; grid-template-columns: 6.5rem 1fr; gap: 0.25rem 1rem; align-items: baseline; }
  .note { grid-column: 2; font-family: var(--font-text); font-size: var(--fs-sm); }
}

.bottom {
  border-top: 1px solid var(--line);
  padding-block: 1.5rem calc(1.5rem + env(safe-area-inset-bottom));
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem 2rem;
  .mark img { height: 22px; width: auto; opacity: 0.8; }
  .colophon { font-size: var(--fs-xs); color: var(--text-muted); .me { color: var(--teal); } a { color: var(--teal); border-bottom: 1px solid currentColor; &:hover { color: var(--text-strong); } } .heart { color: var(--salmon); display: inline-block; } }
  .legal { display: flex; gap: 1.5rem; font-size: var(--fs-xs); a { color: var(--text-muted); &:hover { color: var(--teal); } } .top { margin-left: 0.5rem; } }
}
@media (prefers-reduced-motion: no-preference) {
  .heart { animation: beat 2.5s ease-in-out infinite; }
  @keyframes beat { 0%, 100% { transform: scale(1); } 45% { transform: scale(1.15); } 55% { transform: scale(0.95); } }
}
</style>
