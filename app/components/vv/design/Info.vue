<template>
  <section class="info" :class="{ 'is-left': left }">
    <div class="text">
      <div class="title">
        <img class="icon" :src="`/svg/vv/boundaries/${icon}`" alt="" width="40" height="40">
        <h2>{{ title }}</h2>
      </div>
      <p v-for="text in texts" :key="text">{{ text }}</p>
    </div>
    <NuxtImg
      :src="`/img/vv/boundaries/${image}`"
      alt=""
      :width="width"
      :height="height"
      sizes="(max-width: 639px) 40vw, 220px"
      format="webp"
      loading="lazy"
      class="shot"
    />
  </section>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  image: string
  icon: string
  title: string
  texts: string[]
  width: number
  height: number
  /** Screenshot on the left of the copy from 640px up; it always follows the copy on narrow screens. */
  left?: boolean
}>(), { left: false })
</script>

<style lang="scss" scoped>
.info {
  max-width: 42rem;
  margin-inline: auto;
  padding-inline: var(--gutter);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 640px) {
    grid-template-columns: minmax(0, 1fr) auto;
    &.is-left {
      grid-template-columns: auto minmax(0, 1fr);
      .shot { order: -1; }
    }
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.5rem;

    .icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
      flex: none;
    }

    h2 {
      font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
      color: inherit;
    }
  }

  p {
    margin-top: 1rem;
    max-width: 65ch;
    font-size: var(--fs-md);
    text-align: start;
  }

  // A fixed height plus the width/height attributes reserves the box before
  // the lazy image arrives, so nothing shifts.
  .shot {
    height: 300px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin-inline: auto;
    @media (min-width: 640px) { height: 420px; }
  }
}
</style>
