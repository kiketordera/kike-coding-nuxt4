<template>
  <article class="k-container legal">
    <div class="doc">
      <header v-reveal class="head">
        <h1 class="k-title"><span class="brace">{</span> {{ t('privacyPolicy.title') }}&nbsp;<span class="brace">}</span></h1>
        <p class="k-lead">{{ t('privacyPolicy.introduction.content') }}</p>
      </header>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.sections.liabilityForContent.title') }}</h2>
        <p>{{ t('privacyPolicy.sections.liabilityForContent.content') }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.sections.liabilityForLinks.title') }}</h2>
        <p>{{ t('privacyPolicy.sections.liabilityForLinks.content') }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.sections.copyright.title') }}</h2>
        <p>{{ t('privacyPolicy.sections.copyright.content') }}</p>
      </section>

      <section v-if="showBusinessInformation" v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.sections.companyInformation.title') }}</h2>
        <ul class="facts">
          <li><strong>{{ t('privacyPolicy.sections.companyInformation.registration') }}:</strong> {{ registration }}</li>
          <li><strong>{{ t('privacyPolicy.sections.companyInformation.contact') }}:</strong> {{ contact }}</li>
        </ul>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.interpretation.title') }}</h2>
        <h3>{{ t('privacyPolicy.interpretation.sections.interpretation.title') }}</h3>
        <p>{{ t('privacyPolicy.interpretation.sections.interpretation.content') }}</p>
        <h3>{{ t('privacyPolicy.interpretation.sections.definitions.title') }}</h3>
        <p>{{ t('privacyPolicy.interpretation.sections.definitions.content') }}</p>
        <ul>
          <li v-for="term in definitions" :key="term">
            <strong>{{ t(`privacyPolicy.interpretation.sections.definitions.${term}`) }}:</strong>
            {{ t(`privacyPolicy.interpretation.sections.definitions.${term}Desc`) }}
          </li>
        </ul>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.collectionDeletion.title') }}</h2>
        <h3>{{ t('privacyPolicy.collectionDeletion.sections.generalData.title') }}</h3>
        <p>{{ t('privacyPolicy.collectionDeletion.sections.generalData.content') }}</p>
        <ul>
          <li v-for="item in generalData" :key="item">{{ t(`privacyPolicy.collectionDeletion.sections.generalData.${item}`) }}</li>
        </ul>
        <p>{{ t('privacyPolicy.collectionDeletion.sections.generalData.usage') }}</p>
        <ul>
          <li v-for="item in usageList" :key="item">{{ t(`privacyPolicy.collectionDeletion.sections.generalData.usageList.${item}`) }}</li>
        </ul>
        <p>{{ t('privacyPolicy.collectionDeletion.sections.generalData.separatedData') }}</p>
        <h3>{{ t('privacyPolicy.collectionDeletion.sections.deletion.title') }}</h3>
        <p>{{ t('privacyPolicy.collectionDeletion.sections.deletion.content') }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.rights.title') }}</h2>

        <template v-for="right in simpleRights" :key="right">
          <h3>{{ t(`privacyPolicy.rights.sections.${right}.title`) }}</h3>
          <p>{{ t(`privacyPolicy.rights.sections.${right}.content`) }}</p>
        </template>

        <h3>{{ t('privacyPolicy.rights.sections.erasure.title') }}</h3>
        <p>{{ t('privacyPolicy.rights.sections.erasure.content') }}</p>
        <ul>
          <li v-for="n in 6" :key="n">{{ t(`privacyPolicy.rights.sections.erasure.conditions.condition${n}`) }}</li>
        </ul>
        <p>{{ t('privacyPolicy.rights.sections.erasure.instructions') }}</p>
        <p>{{ t('privacyPolicy.rights.sections.erasure.publicDataDeletion') }}</p>

        <h3>{{ t('privacyPolicy.rights.sections.restriction.title') }}</h3>
        <p>{{ t('privacyPolicy.rights.sections.restriction.content') }}</p>
        <ul>
          <li v-for="n in 4" :key="n">{{ t(`privacyPolicy.rights.sections.restriction.conditions.condition${n}`) }}</li>
        </ul>
        <p>{{ t('privacyPolicy.rights.sections.restriction.instructions') }}</p>

        <template v-for="right in laterRights" :key="right">
          <h3>{{ t(`privacyPolicy.rights.sections.${right}.title`) }}</h3>
          <p>{{ t(`privacyPolicy.rights.sections.${right}.content`) }}</p>
        </template>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.googleAdWords.title') }}</h2>
        <p>{{ t('privacyPolicy.googleAdWords.content1') }}</p>
        <p>{{ t('privacyPolicy.googleAdWords.content5') }}</p>
        <p>{{ t('privacyPolicy.googleAdWords.content6') }}</p>
        <p>{{ t('privacyPolicy.googleAdWords.content7') }}</p>
        <p>{{ t('privacyPolicy.googleAdWords.content2') }}</p>
        <p>
          {{ t('privacyPolicy.googleAdWords.content4') }}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">{{ t('privacyPolicy.googleAdWords.optOutLink') }}</a>.
        </p>
        <p>{{ t('privacyPolicy.googleAdWords.content8') }}</p>
        <p>{{ t('privacyPolicy.googleAdWords.moreInfo') }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.googleAnalytics.title') }}</h2>
        <p>{{ t('privacyPolicy.googleAnalytics.content1') }}</p>
        <template v-for="part in analyticsParts" :key="part">
          <h3>{{ t(`privacyPolicy.googleAnalytics.${part}.title`) }}</h3>
          <p>{{ t(`privacyPolicy.googleAnalytics.${part}.content`) }}</p>
        </template>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.legalBasis.title') }}</h2>
        <p>{{ t('privacyPolicy.legalBasis.content') }}</p>
        <ul class="facts">
          <li v-for="basis in legalBases" :key="basis.article">
            <strong>{{ t(`privacyPolicy.legalBasis.${basis.name}`) }}</strong>
            <span class="k-mono k-muted art">{{ t(`privacyPolicy.legalBasis.articles.${basis.article}`) }}</span>
            <span class="desc">{{ t(`privacyPolicy.legalBasis.articles.${basis.article}Desc`) }}</span>
          </li>
        </ul>
      </section>

      <section v-for="key in closingSections" :key="key" v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t(`privacyPolicy.${key}.title`) }}</h2>
        <p>{{ t(`privacyPolicy.${key}.content`) }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.legalObligations.title') }}</h2>
        <p>{{ t('privacyPolicy.legalObligations.content1') }}</p>
        <p>{{ t('privacyPolicy.legalObligations.content2') }}</p>
      </section>

      <section v-for="key in finalSections" :key="key" v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t(`privacyPolicy.${key}.title`) }}</h2>
        <p>{{ t(`privacyPolicy.${key}.content`) }}</p>
      </section>

      <section v-reveal class="sec">
        <p class="k-marker num" aria-hidden="true" />
        <h2>{{ t('privacyPolicy.contactUs.title') }}</h2>
        <p>{{ t('privacyPolicy.contactUs.content') }}</p>
        <ul class="facts">
          <li><strong>{{ t('privacyPolicy.contactUs.email') }}</strong> <a :href="links.mailto">{{ links.email }}</a></li>
          <li><strong>{{ t('privacyPolicy.contactUs.phone') }}</strong> <a :href="tel">{{ phone }}</a></li>
          <li><strong>{{ t('privacyPolicy.contactUs.address') }}</strong> {{ address }}</li>
        </ul>
      </section>

      <p class="copyright k-mono k-muted">{{ t('privacyPolicy.copyright') }}{{ year }} Kike Tordera{{ t('privacyPolicy.rightsReserved') }}</p>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ContactInformation } from '~/data_helper/contact'

const { t } = useI18n()
const links = useContactLinks()

const showBusinessInformation = false
const registration = 'MyCompany S.L. | B45531122 | Ronda La Coruña 24 | 23006 Sevilla (Spain)'
const contact = '+34655001002 | hello@mywebsite.com | www.mywebsite.com'

const phone = `${ContactInformation.countryCode} ${ContactInformation.phoneNumber}`
const tel = `tel:${phone.replace(/\s/g, '')}`
const address = ContactInformation.address

const definitions = ['personalData', 'dataSubject', 'processing', 'controller', 'processor', 'consent'] as const
const generalData = ['browsers', 'operatingSystem', 'referrerURL', 'pagesAccessed', 'dateTime', 'ipAddress', 'isp', 'otherData'] as const
const usageList = ['contentDelivery', 'security', 'statistics'] as const
const simpleRights = ['access', 'rectification'] as const
const laterRights = ['portability', 'object', 'automatedDecision', 'revokeConsent'] as const
const analyticsParts = ['scopeProcessing', 'purposes', 'recipient', 'transferThirdCountries', 'duration', 'rights'] as const
const legalBases = [
  { name: 'consensus', article: 'consent' },
  { name: 'contract', article: 'contract' },
  { name: 'legalObligation', article: 'legalObligation' },
  { name: 'legitimateInterests', article: 'legitimateInterests' },
] as const
const closingSections = ['legitimateInterests', 'dataRetention'] as const
const finalSections = ['automatedDecisionMaking', 'dataBreachNotification', 'changes'] as const

const year = Math.max(2025, new Date().getFullYear())

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
  h2 + p, h3 + p { margin-top: 0.75rem; }
  ul + p { margin-top: 0.9em; }
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
  margin-top: 0.75rem;
  border-left: 1px solid var(--line);
  padding-inline-start: 1rem;
  li { padding-inline-start: 0; }
  strong { margin-right: 0.35em; font-family: var(--font-mono); font-size: var(--fs-sm); }
  .art { font-size: var(--fs-xs); margin-right: 0.5em; }
  .desc { display: block; margin-top: 0.15rem; }
}

.copyright {
  margin-top: var(--space-block);
  padding-top: var(--space-stack);
  border-top: 1px solid var(--line);
  font-size: var(--fs-xs);
}
</style>
