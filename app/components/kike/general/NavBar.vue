<template>
  <header class="bar" :class="{ 'is-open': open }">
    <nav class="k-container inner" :aria-label="$t('v2.nav.menu')">
      <NuxtLink to="/" class="logo" aria-label="Kike Tordera — home" @click="close">
        <img src="/svg/kk/logo.svg" alt="" class="logo-wide" width="1055" height="132">
        <img src="~assets/svg/kk/logo-mobile.svg" alt="" class="logo-mark" width="92" height="48">
      </NuxtLink>

      <ul class="links desktop">
        <li v-for="item in items" :key="item.id">
          <NuxtLink :to="item.to" :class="{ active: isActive(item.id) }">
            <span class="sl" aria-hidden="true">//</span> {{ $t(item.label) }}
          </NuxtLink>
        </li>
        <li>
          <div class="lang" role="group" :aria-label="$t('v2.nav.language')">
            <button
              v-for="code in locales"
              :key="code"
              type="button"
              :class="{ active: code === locale }"
              :aria-pressed="code === locale"
              @click="switchLocale(code)"
            >{{ code.toUpperCase() }}</button>
          </div>
        </li>
        <li>
          <a :href="links.linkedin" target="_blank" rel="noopener" class="icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="toggle"
        :aria-expanded="open"
        aria-controls="site-menu"
        :aria-label="open ? $t('v2.nav.close') : $t('v2.nav.menu')"
        @click="open = !open"
      >
        <span class="bars" aria-hidden="true"><i /><i /><i /></span>
      </button>
    </nav>

    <Transition name="menu">
      <div v-show="open" id="site-menu" class="menu">
        <ul class="menu-links">
          <li v-for="(item, i) in items" :key="item.id" :style="{ '--i': i }">
            <NuxtLink :to="item.to" :class="{ active: isActive(item.id) }" @click="close">
              <span class="sl" aria-hidden="true">//</span> {{ $t(item.label) }}
            </NuxtLink>
          </li>
        </ul>
        <div class="menu-foot" :style="{ '--i': items.length }">
          <div class="lang" role="group" :aria-label="$t('v2.nav.language')">
            <button
              v-for="code in locales"
              :key="code"
              type="button"
              :class="{ active: code === locale }"
              :aria-pressed="code === locale"
              @click="switchLocale(code)"
            >{{ code.toUpperCase() }}</button>
          </div>
          <a :href="links.mailto" class="k-link">{{ links.email }}</a>
          <a :href="links.linkedin" target="_blank" rel="noopener" class="k-link">LinkedIn</a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { useActiveScroll } from 'vue-use-active-scroll'

const items = [
  { id: 'work', label: 'v2.nav.work', to: { path: '/', hash: '#work' } },
  { id: 'apps', label: 'v2.nav.apps', to: { path: '/', hash: '#apps' } },
  { id: 'about', label: 'v2.nav.about', to: '/about' },
  { id: 'contact', label: 'v2.nav.contact', to: { path: '/', hash: '#contact' } },
] as const

const route = useRoute()
const links = useContactLinks()
const { locale, setLocale, availableLocales } = useI18n()
const locales = computed(() => availableLocales.filter((code) => ['en', 'es', 'de', 'fr'].includes(code)))

const open = ref(false)
const close = () => { open.value = false }
const switchLocale = (code: string) => { setLocale(code as typeof locale.value); close() }

// Scroll-spy on the home sections ('home' keeps every item quiet while the hero is on screen);
// the About page is a route of its own.
const targets = ref(['home', 'work', 'apps', 'contact'])
const { activeId } = useActiveScroll(targets, { overlayHeight: 96, replaceHash: false })
const isActive = (id: string) => (id === 'about' ? route.path === '/about' : route.path === '/' && activeId.value === id)

watch(() => route.fullPath, close)
watch(open, (isOpen) => { document.documentElement.style.overflow = isOpen ? 'hidden' : '' })
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--teal);
}

.inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  img { width: auto; }
  .logo-wide { height: 26px; display: none; }
  .logo-mark { height: 26px; }
  @media (min-width: 900px) { .logo-wide { display: block; } .logo-mark { display: none; } }
}

.links {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 2.25rem;
  @media (min-width: 900px) { display: flex; }

  a {
    font-family: var(--font-mono);
    font-style: italic;
    font-weight: 600;
    font-size: var(--fs-sm);
    color: var(--text);
    display: inline-flex;
    gap: 0.4em;
    padding-block: 0.25rem;
    position: relative;
    transition: color var(--dur-fast) ease-out;
    .sl { color: var(--text-muted); transition: color var(--dur-fast) ease-out; }
    &::after {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: -2px;
      height: 1px;
      background: var(--teal);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--dur-fast) ease-out;
    }
    &:hover, &:focus-visible, &.active { color: var(--teal); .sl { color: var(--teal); } }
    &.active::after { transform: scaleX(1); }
  }
  .icon { color: var(--text-muted); padding: 0.5rem; margin: -0.5rem; display: inline-flex; &:hover, &:focus-visible { color: var(--teal); } }
}

.lang {
  display: flex;
  gap: 0.25rem;
  button {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    letter-spacing: var(--track-label);
    color: var(--text-muted);
    background: none;
    border: 0;
    padding: 0.4rem 0.35rem;
    cursor: pointer;
    border-radius: var(--radius);
    transition: color var(--dur-fast) ease-out;
    &:hover, &:focus-visible { color: var(--text-strong); }
    &.active { color: var(--yellow); }
  }
}

.toggle {
  width: 44px; height: 44px;
  margin-right: -0.5rem;
  display: inline-flex; align-items: center; justify-content: center;
  background: none; border: 0; cursor: pointer; color: var(--text-strong);
  @media (min-width: 900px) { display: none; }
  .bars { display: grid; gap: 5px; width: 22px; }
  .bars i { display: block; height: 2px; background: currentColor; border-radius: 1px; transition: transform var(--dur-fast) ease-out, opacity var(--dur-fast) ease-out; transform-origin: center; }
  .is-open & .bars i:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .is-open & .bars i:nth-child(2) { opacity: 0; }
  .is-open & .bars i:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}

.menu {
  position: fixed;
  inset: var(--nav-h) 0 0 0;
  background: var(--bg);
  padding: var(--space-block) var(--gutter) calc(var(--gutter) + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  @media (min-width: 900px) { display: none; }
}
.menu-links {
  list-style: none; margin: 0; padding: 0;
  display: grid; gap: 0.75rem;
  a {
    display: inline-flex; gap: 0.5em; align-items: baseline;
    font-family: var(--font-mono);
    font-style: italic;
    font-weight: 700;
    font-size: clamp(2rem, 9vw, 3rem);
    line-height: 1.15;
    color: var(--text-strong);
    .sl { color: var(--text-muted); font-size: 0.6em; }
    &.active, &:hover { color: var(--teal); .sl { color: var(--teal); } }
  }
}
.menu-foot {
  display: grid; gap: 1rem; justify-items: start;
  padding-top: var(--space-block);
  border-top: 1px solid var(--line);
  .lang button { font-size: var(--fs-sm); padding: 0.5rem 0.6rem; }
}

// The panel slides in; its items follow in sequence.
@media (prefers-reduced-motion: no-preference) {
  .menu-enter-active, .menu-leave-active { transition: opacity 0.3s var(--ease-out), transform 0.4s var(--ease-out); }
  .menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-12px); }
  .menu-links li, .menu-foot { transition: opacity 0.45s var(--ease-out), transform 0.45s var(--ease-out); transition-delay: calc(80ms + var(--i) * 55ms); }
  .menu-enter-from .menu-links li, .menu-enter-from .menu-foot { opacity: 0; transform: translateY(14px); }
}
</style>
