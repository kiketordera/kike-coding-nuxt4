<template>
  <section id="skills" class="k-section">
    <div class="k-container k-grid">
      <div v-reveal class="k-label">
        <p class="k-marker"><span class="sl" aria-hidden="true">//</span> {{ $t('aboutPage.skills.marker') }}</p>
        <h2 class="k-title"><span class="brace">{</span> {{ $t('aboutPage.skills.title') }}&nbsp;<span class="brace">}</span></h2>
        <p class="k-muted intro">{{ $t('skillsSection.description') }}</p>
      </div>

      <div v-reveal class="k-content">
        <pre class="code" tabindex="0" :aria-label="$t('aboutPage.skills.title')"><code><span v-for="(line, i) in lines" :key="i" class="line"><span class="ws">{{ '  '.repeat(line.indent) }}</span><span v-for="(token, j) in line.tokens" :key="j" :class="token.type">{{ token.text }}</span></span></code></pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// The skills are the visual: an object literal, syntax-coloured with the brand
// tokens (keys teal, strings yellow, punctuation muted, braces salmon).
type TokenType = 'kw' | 'id' | 'key' | 'str' | 'p' | 'brace' | 'ws'
type Token = { type: TokenType; text: string }
type Line = { indent: number; tokens: Token[] }

const { t } = useI18n()

const stacks: Record<string, string[]> = {
  mobile: ['Swift', 'SwiftUI', 'Flutter', 'Dart'],
  web: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'HTML', 'CSS/SASS', 'Tailwind'],
  backend: ['Node.js', 'Golang', 'Java', 'Firebase', 'Docker'],
  design: ['UX', 'UI', 'Figma'],
}
const spoken = ['spanish', 'english', 'swahili', 'german'] as const

const tok = (type: TokenType, text: string): Token => ({ type, text })
const str = (value: string) => tok('str', `'${value}'`)
// Object keys are lowercased; anything that is not a plain identifier gets quoted.
const identifier = (name: string) => {
  const key = name.toLowerCase()
  return /^[a-z_$][\w$]*$/.test(key) ? key : `'${key}'`
}
const padTo = (keys: string[]) => {
  const width = Math.max(...keys.map((key) => key.length)) + 1
  return (key: string) => ' '.repeat(width - key.length)
}

const lines = computed<Line[]>(() => {
  const out: Line[] = [{ indent: 0, tokens: [tok('kw', 'const'), tok('ws', ' '), tok('id', 'skills'), tok('ws', ' '), tok('p', '='), tok('ws', ' '), tok('brace', '{')] }]

  const padStack = padTo([...Object.keys(stacks), 'languages'])
  for (const [key, items] of Object.entries(stacks)) {
    const head: Token[] = [tok('key', key), tok('p', ':'), tok('ws', padStack(key)), tok('p', '[')]
    // Short arrays stay on one line; longer ones break one item per line, the way a formatter would,
    // so the block never needs to scroll sideways.
    if (items.length <= 4) {
      items.forEach((item, index) => {
        head.push(str(item))
        if (index < items.length - 1) head.push(tok('p', ', '))
      })
      head.push(tok('p', '],'))
      out.push({ indent: 1, tokens: head })
    } else {
      out.push({ indent: 1, tokens: head })
      for (const item of items) out.push({ indent: 2, tokens: [str(item), tok('p', ',')] })
      out.push({ indent: 1, tokens: [tok('p', '],')] })
    }
  }

  const languages = spoken.map((code) => ({ key: identifier(t(`languagesSection.${code}.name`)), level: t(`languagesSection.${code}.level`) }))
  const padLang = padTo(languages.map((lang) => lang.key))
  out.push({ indent: 1, tokens: [tok('key', 'languages'), tok('p', ':'), tok('ws', padStack('languages')), tok('brace', '{')] })
  for (const lang of languages) {
    out.push({ indent: 2, tokens: [tok('key', lang.key), tok('p', ':'), tok('ws', padLang(lang.key)), str(lang.level), tok('p', ',')] })
  }
  out.push({ indent: 1, tokens: [tok('brace', '}'), tok('p', ',')] })
  out.push({ indent: 0, tokens: [tok('brace', '}')] })
  return out
})
</script>

<style lang="scss" scoped>
.intro { margin-top: 1rem; max-width: 28ch; }

.code {
  margin: 0;
  padding: 1.25rem var(--gutter);
  overflow-x: auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  font-family: var(--font-mono);
  font-size: var(--fs-sm);
  line-height: 1.75;
  color: var(--text);
  tab-size: 2;
  @media (max-width: 639px) { font-size: var(--fs-xs); }

  code { font: inherit; }
  .line { display: block; white-space: pre; }
  .kw { color: var(--salmon); }
  .id { color: var(--text-strong); font-weight: 600; }
  .key { color: var(--teal); }
  .str { color: var(--yellow); }
  .p, .ws { color: var(--text-muted); }
  .brace { color: var(--salmon); }
}
</style>
