/**
 * `v-reveal` — the site's one scroll-reveal vocabulary.
 *
 *   <section v-reveal>            fade + 24px rise when it enters the viewport, once
 *   <ul v-reveal.stagger>         each child reveals 70ms after the previous
 *   <ul v-reveal.stagger="40">    custom stagger step in ms
 *
 * The hidden state is applied after mount and only when the visitor has not asked
 * for reduced motion, so nothing is ever invisible before hydration or for
 * assistive setups. The CSS lives in assets/scss/_base.scss.
 */
import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    return observer
  }

  const targetsOf = (el: HTMLElement, binding: DirectiveBinding) =>
    binding.modifiers.stagger ? (Array.from(el.children) as HTMLElement[]) : [el]

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      if (reduceMotion) return
      const step = typeof binding.value === 'number' ? binding.value : 70
      targetsOf(el, binding).forEach((target, index) => {
        target.classList.add('reveal')
        if (binding.modifiers.stagger) target.style.setProperty('--reveal-delay', `${index * step}ms`)
        getObserver().observe(target)
      })
    },
    unmounted(el: HTMLElement, binding: DirectiveBinding) {
      targetsOf(el, binding).forEach((target) => observer?.unobserve(target))
    },
  })
})
