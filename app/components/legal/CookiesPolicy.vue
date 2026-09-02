<template>
  <article class="k-container legal">
    <div class="doc">
      <header v-reveal class="head">
        <h1 class="k-title"><span class="brace">{</span> {{ t('cookies-policy-title') }}&nbsp;<span class="brace">}</span></h1>
        <p class="k-lead">{{ t('cookies-policy-intro') }}</p>
      </header>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('interpretation-definitions-title') }}</h2>
        <h3>{{ t('interpretation-title') }}</h3>
        <p>{{ t('interpretation-text') }}</p>
        <h3>{{ t('definitions-title') }}</h3>
        <p>{{ t('definitions-intro') }}</p>
        <ul>
          <li v-for="key in definitionKeys" :key="key">{{ t(key) }}</li>
        </ul>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('cookies-utilization-title') }}</h2>
        <h3>{{ t('categories-of-cookies-title') }}</h3>
        <p>{{ t('categories-of-cookies-text') }}</p>
        <div v-for="group in cookieGroups" :key="group" class="group">
          <h4>{{ t(`${group}-title`) }}</h4>
          <ul class="facts">
            <li v-for="fact in factsOf(group)" :key="fact.key">
              <strong v-if="fact.label">{{ fact.label }}</strong>
              <span v-for="(part, i) in fact.parts" :key="i">{{ part.text }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('your-options-title') }}</h2>
        <p>{{ t('your-options-text') }}</p>
        <ul>
          <li v-for="item in browserItems" :key="item.key">
            <strong v-if="item.label">{{ item.label }}</strong>
            <template v-for="(part, i) in item.parts" :key="i">
              <a v-if="part.href" :href="part.href" target="_blank" rel="noopener">{{ part.text }}</a>
              <template v-else>{{ part.text }}</template>
            </template>
          </li>
        </ul>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('contact-us-title') }}</h2>
        <p>{{ t('contact-us-text') }} <NuxtLink to="/#contact">{{ fullURL }}</NuxtLink></p>
      </section>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ContactInformation } from '~/data_helper/contact'

const { t } = useI18n()
const fullURL = ContactInformation.fullURL

const definitionKeys = ['definition-company', 'definition-cookies', 'definition-website', 'definition-you'] as const
const cookieGroups = ['necessary-cookies', 'cookies-notice-acceptance', 'functionality-cookies', 'tracking-cookies'] as const
const browserKeys = ['chrome-browser', 'ie-browser', 'firefox-browser', 'safari-browser', 'other-browsers'] as const

type Part = { text: string; href?: string }
type Item = { key: string; label: string; parts: Part[] }

// The locale strings carry their own "Label: value" prefix and bare URLs;
// split them so the label can be set in a real weight and the URL becomes a link.
const URL_RE = /(https?:\/\/[^\s]*[^\s.,)])/g
const parse = (key: string): Item => {
  const text = t(key)
  const match = text.match(/^[^:]{1,32}?\s*:\s*/)
  const label = match ? match[0].trimEnd() : ''
  const rest = match ? text.slice(match[0].length) : text
  const parts = rest
    .split(URL_RE)
    .filter(Boolean)
    .map((chunk): Part => (/^https?:\/\//.test(chunk) ? { text: chunk, href: chunk } : { text: chunk }))
  return { key, label, parts }
}

const factsOf = (group: string) => ['type', 'managed', 'purpose'].map((fact) => parse(`${group}-${fact}`))
const browserItems = computed(() => browserKeys.map(parse))

useSeoMeta({ robots: 'noindex' })
</script>

<style lang="scss" scoped>
.legal {
  padding-top: calc(var(--nav-h) + var(--space-block));
  padding-bottom: var(--space-section);
}

// One narrow reading column; numbering is a CSS counter so it always matches document order.
.doc {
  max-width: 65ch;
  counter-reset: sec;
}

.head {
  h1 { font-size: var(--fs-h1); }
  .k-lead { margin-top: var(--space-stack); }
}

.sec {
  counter-increment: sec;
  margin-top: var(--space-block);
  padding-top: var(--space-stack);
  border-top: 1px solid var(--line);

  .num::before { content: '// ' counter(sec, decimal-leading-zero); }
  h2 { margin-top: 0.5rem; font-size: var(--fs-h3); }
  h3 { margin-top: var(--space-stack); font-size: var(--fs-lg); }
  h4 { margin-top: 1.25rem; font-size: var(--fs-md); font-weight: 600; }
  h2 + p, h3 + p, h4 + p { margin-top: 0.75rem; }
}

p { color: var(--text); }
strong { font-weight: 600; color: var(--text-strong); }

a {
  color: var(--teal);
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 0.15em;
  overflow-wrap: anywhere;
  &:hover, &:focus-visible { text-decoration-color: currentColor; }
}

ul {
  margin: 0.75rem 0 0;
  padding-inline-start: 1.25rem;
  max-width: 65ch;
  li { padding-inline-start: 0.25rem; text-wrap: pretty; }
  li + li { margin-top: 0.5rem; }
  li::marker { color: var(--salmon); }
}

.facts {
  list-style: none;
  margin-top: 0.5rem;
  border-left: 1px solid var(--line);
  padding-inline-start: 1rem;
  li { padding-inline-start: 0; }
  strong { margin-right: 0.35em; font-family: var(--font-mono); font-size: var(--fs-sm); }
}
</style>
