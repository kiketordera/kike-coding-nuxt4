<template>
  <div class="vv-shell">
    <div class="strip">
      <div class="k-container strip-inner">
        <NuxtLink to="/" class="mark" :aria-label="$t('vvExtra.strip.home')">
          <img src="~assets/svg/kk/logo-mobile.svg" alt="" width="50" height="27">
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#work' }" class="back">
          <span class="sl" aria-hidden="true">//</span> {{ $t('vvExtra.strip.backToWork') }}
        </NuxtLink>
        <p class="case">
          <span class="what">{{ $t('vvExtra.strip.caseStudy') }} · </span>Value Villages
        </p>
      </div>
    </div>

    <vv-general-NavBar />

    <main class="ground">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
// Kike's strip sits above the client's own nav; both are fixed, so the page
// starts below their combined height. --nav-h is re-declared here so the global
// [id] scroll-margin clears both bars on these routes.
.vv-shell {
  --vv-strip-h: 44px;
  --vv-nav-h: 60px;
  --nav-h: calc(var(--vv-strip-h) + var(--vv-nav-h));
  min-height: 100vh;
  background: white; // the existing VV ground — the product keeps its white brand
}

.strip {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 60;
  height: var(--vv-strip-h);
  background: var(--bg);
  color: var(--text);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
}

.strip-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.mark {
  display: inline-flex;
  align-items: center;
  height: 100%;
  min-width: 44px;
  img { height: 20px; width: auto; }
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  min-height: 44px;
  font-weight: 600;
  color: var(--text-strong);
  white-space: nowrap;
  transition: color var(--dur-fast) ease-out;
  .sl { color: var(--text-muted); transition: color var(--dur-fast) ease-out; }
  &:hover, &:focus-visible { color: var(--teal); .sl { color: var(--teal); } }
}

.case {
  margin-left: auto;
  color: var(--text-muted);
  white-space: nowrap;
  max-width: none;
  .what { text-transform: uppercase; letter-spacing: var(--track-label); }
  @media (max-width: 599px) { .what { display: none; } }
}

// The client's white ground: Nunito everywhere, near-black text (the darkest
// value in the system, never pure black), headings inherit instead of taking
// the site's mono/off-white defaults.
.ground {
  padding-top: var(--nav-h);
  background: white;
  color: var(--bg);
  font-family: $nunito-regular;

  :deep(h1), :deep(h2), :deep(h3), :deep(h4) {
    font-family: $nunito-regular;
    color: inherit;
    letter-spacing: normal;
  }
}
</style>
