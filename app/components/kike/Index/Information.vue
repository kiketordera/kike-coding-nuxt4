<template>
  <section id="home" class="hero k-container" aria-labelledby="hero-title">
    <div class="copy">
      <p class="k-eyebrow reveal-in" style="--d: 0ms">
        <span aria-hidden="true">//</span> {{ $t('v2.hero.eyebrow') }}
      </p>

      <h1 id="hero-title" class="name">
        <span class="line" style="--chars: 6; --d: 120ms">
          <span class="brace" aria-hidden="true">{</span> Kike
        </span>
        <br>
        <span class="line line--last" style="--chars: 9; --d: 560ms">
          Tordera <span class="brace" aria-hidden="true">}</span><span class="cursor" aria-hidden="true" />
        </span>
      </h1>

      <p class="positioning reveal-in" style="--d: 1200ms">{{ $t('v2.hero.positioning') }}</p>

      <ul class="proof reveal-in" style="--d: 1350ms" :aria-label="$t('v2.hero.eyebrow')">
        <li v-for="line in proof" :key="line">
          <span class="sl" aria-hidden="true">//</span> {{ line }}
        </li>
      </ul>

      <div class="actions reveal-in" style="--d: 1500ms">
        <a :href="links.calendly" target="_blank" rel="noopener" class="k-btn k-btn--primary">{{ $t('v2.hero.cta') }}</a>
        <NuxtLink :to="{ path: '/', hash: '#work' }" class="k-link">{{ $t('v2.hero.seeWork') }} ↓</NuxtLink>
      </div>
    </div>

    <div class="portrait">
      <NuxtImg
        src="/img/kk/kike-tordera.png"
        :alt="$t('v2.hero.portraitAlt')"
        width="1242"
        height="1226"
        sizes="(max-width: 899px) 78vw, 620px"
        format="webp"
        fetchpriority="high"
        loading="eager"
        :class="{ 'is-loaded': loaded }"
        @load="loaded = true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const links = useContactLinks()

// `tm` is typed against the whole message schema, which is too deep for TS to
// instantiate here; the array shape is checked at runtime instead.
const readMessages = tm as unknown as (key: string) => unknown
const proof = computed<string[]>(() => {
  const lines = readMessages('v2.hero.proof')
  return Array.isArray(lines) ? lines.map((line) => rt(line as never)) : []
})

// The portrait wipes in once its bytes are there; if the load event is missed, show it anyway.
const loaded = ref(false)
onMounted(() => { setTimeout(() => { loaded.value = true }, 2500) })
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem var(--grid-gap);
  padding-top: var(--nav-h);
  min-height: 100svh;

  @media (min-width: 900px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: end;
    min-height: calc(100svh);
  }
}

.copy {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block: 1.5rem var(--space-block);
  // The name is allowed to run under the portrait's column: the copy sits above it.
  @media (min-width: 900px) { grid-column: 1 / span 8; grid-row: 1; position: relative; z-index: 2; padding-block: var(--space-section) var(--space-block); }
}

.name {
  font-size: var(--fs-display);
  line-height: var(--lh-tight);
  letter-spacing: var(--track-display);
  font-weight: 800;
  color: var(--text-strong);
  .brace { color: var(--salmon); font-weight: 400; }
}

// Each line types in character by character (mono, so 1ch is exact); the cursor keeps blinking after.
.line { display: inline-block; white-space: nowrap; overflow: hidden; vertical-align: bottom; }
.cursor {
  display: inline-block;
  width: 0.5em; height: 0.82em;
  margin-left: 0.12em;
  vertical-align: -0.08em;
  background: var(--yellow);
}
@media (prefers-reduced-motion: no-preference) {
  .line { max-width: 0; animation: type calc(var(--chars) * 70ms) steps(var(--chars), end) forwards; animation-delay: var(--d); }
  .cursor { animation: blink 1s steps(2, start) infinite; animation-delay: 1.2s; }
  .reveal-in { opacity: 0; transform: translateY(14px); animation: rise 0.7s var(--ease-out) forwards; animation-delay: var(--d); }
  .portrait img { clip-path: inset(0 100% 0 0); }
  .portrait img.is-loaded { animation: wipe 1.1s var(--ease-out) forwards; animation-delay: 300ms; }
}
@keyframes type { to { max-width: calc(var(--chars) * 1ch + 0.15em); } }
// the last line also has to make room for the cursor block
.line--last { --cursor-room: 0.75em; }
@media (prefers-reduced-motion: no-preference) {
  .line--last { animation-name: type-last; }
}
@keyframes type-last { to { max-width: calc(var(--chars) * 1ch + 0.15em + 0.75em); } }
@keyframes blink { to { visibility: hidden; } }
@keyframes rise { to { opacity: 1; transform: none; } }
@keyframes wipe { to { clip-path: inset(0 0 0 0); } }

.positioning {
  font-family: var(--font-text);
  font-size: clamp(1.125rem, 1rem + 0.8vw, 1.5rem);
  line-height: 1.4;
  color: var(--text);
  max-width: 30ch;
}

.proof {
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-wrap: wrap; gap: 0.5rem 1.75rem;
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--text-muted);
  .sl { color: var(--teal); }
}

.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; margin-top: 0.25rem; }

.portrait {
  position: relative;
  order: -1;
  margin: 0 calc(-1 * var(--gutter)) -1.5rem 0;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  img {
    width: min(78%, 380px);
    height: auto;
    margin-right: -6%;
    -webkit-mask-image: linear-gradient(to bottom, #000 72%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 72%, transparent 100%);
  }

  @media (min-width: 900px) {
    order: 0;
    grid-column: 8 / span 5;
    grid-row: 1;
    align-self: end;
    margin: 0 -4% -1px 0;
    overflow: visible;
    img {
      margin-right: 0;
      width: min(100%, 620px);
      -webkit-mask-image: linear-gradient(to bottom, #000 84%, transparent 100%);
      mask-image: linear-gradient(to bottom, #000 84%, transparent 100%);
    }
  }
}
</style>
