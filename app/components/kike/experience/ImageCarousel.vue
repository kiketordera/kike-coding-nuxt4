<template>
  <section class="k-section screens" :class="`screens--${type}`">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ marker }} {{ $t('caseStudy.screens') }}</p>
      </div>

      <div v-reveal class="stage">
        <ClientOnly>
          <swiper-container
            ref="container"
            :key="wide ? 'coverflow' : 'slide'"
            class="carousel"
            :effect="wide ? 'coverflow' : 'slide'"
            :slides-per-view="1.15"
            :space-between="16"
            :centered-slides="true"
            :grab-cursor="true"
            :keyboard="{ enabled: true, onlyInViewport: true }"
            :speed="reduceMotion ? 0 : 500"
            :breakpoints="{ 900: { slidesPerView: 2, spaceBetween: 24 } }"
            :coverflow-effect="{ rotate: 18, stretch: 0, depth: 140, modifier: 1, slideShadows: false }"
            @swiperinit="sync"
            @swiperslidechange="sync"
          >
            <swiper-slide v-for="(img, i) in imgs" :key="img" class="slide">
              <div class="frame">
                <NuxtImg
                  :src="img"
                  :alt="$t('caseStudy.screenAlt', { client, n: i + 1 })"
                  :width="size.width"
                  :height="size.height"
                  :sizes="type === 'mobile' ? '(max-width: 899px) 80vw, 360px' : '(max-width: 899px) 80vw, 580px'"
                  format="webp"
                  loading="lazy"
                />
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>

        <div class="controls">
          <button type="button" class="ctrl" :aria-label="$t('caseStudy.prevScreen')" :disabled="atStart" @click="go(-1)">
            <span aria-hidden="true">←</span>
          </button>
          <p class="pager k-mono" :aria-label="$t('caseStudy.pager', { n: current, total: imgs.length })">
            <span class="brace" aria-hidden="true">{</span> {{ pad(current) }} <span class="of">/</span> {{ pad(imgs.length) }} <span class="brace" aria-hidden="true">}</span>
          </p>
          <button type="button" class="ctrl" :aria-label="$t('caseStudy.nextScreen')" :disabled="atEnd" @click="go(1)">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Swiper } from 'swiper'
import { register } from 'swiper/element/bundle'

const props = withDefaults(defineProps<{
  imgs: string[]
  /** 'mobile' | 'desktop' — decides the frame ratio and slide width */
  type: string
  client: string
  marker?: string
}>(), { marker: '03' })

if (import.meta.client) register()

// Real pixel sizes of the screenshots, so NuxtImg reserves the right box.
const size = computed(() => (props.type === 'mobile' ? { width: 360, height: 780 } : { width: 1920, height: 1080 }))

type SwiperElement = HTMLElement & { swiper?: Swiper }
const container = ref<SwiperElement | null>(null)

const go = (step: -1 | 1) => {
  const instance = container.value?.swiper
  if (!instance) return
  if (step < 0) instance.slidePrev()
  else instance.slideNext()
}

const current = ref(1)
const atStart = ref(true)
const atEnd = ref(false)
const sync = () => {
  const instance = container.value?.swiper
  if (!instance) return
  current.value = instance.activeIndex + 1
  atStart.value = instance.isBeginning
  atEnd.value = instance.isEnd
}

const pad = (n: number) => String(n).padStart(2, '0')

// Coverflow only from 900px up: the effect is fixed at init, so the element is re-created across the breakpoint.
const wide = ref(false)
const reduceMotion = ref(false)
let mqWide: MediaQueryList | undefined
let mqMotion: MediaQueryList | undefined
const onWide = (e: MediaQueryListEvent | MediaQueryList) => { wide.value = e.matches }
const onMotion = (e: MediaQueryListEvent | MediaQueryList) => { reduceMotion.value = e.matches }

onMounted(() => {
  mqWide = window.matchMedia('(min-width: 900px)')
  mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  onWide(mqWide)
  onMotion(mqMotion)
  mqWide.addEventListener('change', onWide)
  mqMotion.addEventListener('change', onMotion)
})
onBeforeUnmount(() => {
  mqWide?.removeEventListener('change', onWide)
  mqMotion?.removeEventListener('change', onMotion)
})
</script>

<style lang="scss" scoped>
// The carousel takes the whole container width; the label keeps the section's rhythm above it.
// minmax(0, 1fr): a plain 1fr lets the slides' intrinsic width grow the track without bound.
.stage {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-stack);
  @media (min-width: 900px) { grid-column: 1 / -1; }
}

.carousel {
  display: block;
  min-width: 0;
  width: 100%;
  // Phone screens are tall: a narrower track keeps two of them on screen at once.
  .screens--mobile & { width: min(100%, 44rem); margin-inline: auto; }
}

.slide { height: auto; }

.frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  .screens--mobile & { aspect-ratio: 9 / 19.5; }
  img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.ctrl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--text-strong);
  font-family: var(--font-mono);
  font-size: var(--fs-md);
  cursor: pointer;
  transition: color var(--dur-fast) ease-out, border-color var(--dur-fast) ease-out;
  &:hover:not(:disabled), &:focus-visible { border-color: var(--teal); color: var(--teal); }
  &:disabled { color: var(--text-muted); border-color: var(--line); cursor: default; }
}

.pager {
  min-width: 8ch;
  text-align: center;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
  .of { margin-inline: 0.1rem; }
}
</style>
