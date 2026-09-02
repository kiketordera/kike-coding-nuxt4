<template>
  <nav class="vv-nav" :aria-label="$t('vvExtra.nav.label')">
    <NuxtLink
      to="/"
      class="brand"
      @mouseenter="hover = 'kike'"
      @mouseleave="hover = null"
      @focus="hover = 'kike'"
      @blur="hover = null"
    >
      <img :src="hover === 'kike' ? '/svg/vv/navbar/kike-hover.svg' : '/svg/vv/navbar/kike.svg'" alt="" width="28" height="28">
      <span>Kike</span>
    </NuxtLink>

    <ul class="items">
      <li v-for="item in items" :key="item.id">
        <NuxtLink
          :to="item.to"
          :class="[item.id, { active: isActive(item.to) }]"
          @mouseenter="hover = item.id"
          @mouseleave="hover = null"
          @focus="hover = item.id"
          @blur="hover = null"
        >
          <img
            :src="`/svg/vv/navbar/${item.id}${isActive(item.to) || hover === item.id ? '-hover' : ''}.svg`"
            alt=""
            width="28"
            height="28"
          >
          <span>{{ $t(item.label) }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const items = [
  { id: 'about', label: 'labels.about', to: '/projects/value-villages' },
  { id: 'design', label: 'labels.design', to: '/projects/value-villages/design' },
  { id: 'features', label: 'labels.features', to: '/projects/value-villages/features' },
] as const

const route = useRoute()
const hover = ref<string | null>(null)
const isActive = (to: string) => route.path.replace(/\/$/, '') === to
</script>

<style lang="scss" scoped>
// The client's nav, kept in its own brand (Nunito, white ground, the five
// $branding-* colours). It hangs directly under Kike's strip.
.vv-nav {
  position: fixed;
  top: var(--vv-strip-h, 44px);
  left: 0;
  right: 0;
  z-index: 50;
  height: var(--vv-nav-h, 60px);
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  padding-inline: var(--gutter);
  background: white;
  border-bottom: 1px solid color-mix(in srgb, $branding-blue-deep 25%, white);
  font-family: $nunito-regular;
}

.items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: stretch;
  min-width: 0;
  overflow-x: auto;
  li { display: flex; }
}

.brand,
.items a {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  min-width: 44px;
  min-height: 44px;
  padding: 6px 0.75rem 7px;
  color: $branding-blue-deep;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  transition: color var(--dur-fast) ease-out, border-color var(--dur-fast) ease-out;

  img { height: 26px; width: auto; }

  @media (max-width: 479px) {
    padding-inline: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.02em;
  }
}

.brand {
  font-size: 0.75rem;
  &:hover, &:focus-visible { color: var(--bg); border-color: $branding-orange; }
}

// Active / hover: near-black label (the brand tints alone fail contrast on
// white at this size) with the section's colour carried by the rule and icon.
.about {
  &:hover, &:focus-visible, &.active { color: var(--bg); border-color: $branding-green; }
}
.design {
  &:hover, &:focus-visible, &.active { color: var(--bg); border-color: $branding-pink; }
}
.features {
  &:hover, &:focus-visible, &.active { color: var(--bg); border-color: $branding-orange; }
}
</style>
