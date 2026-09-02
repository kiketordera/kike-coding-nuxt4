<template>
  <div v-reveal class="info">
    <p>{{ $t('valueVillagesSection.ngoFocus') }}</p>
    <p>{{ $t('valueVillagesSection.growingFarm') }}</p>
    <p>{{ $t('valueVillagesSection.empowerment') }}</p>
    <p>{{ $t('valueVillagesSection.softwarePlatform') }}</p>
  </div>
</template>

<style lang="scss" scoped>
.info {
  max-width: 56rem;
  margin-inline: auto;
  padding: 2rem var(--gutter) 0;

  p {
    font-size: var(--fs-md);
    margin: 2rem auto;
    max-width: 65ch;
    text-align: start;
    @media (min-width: 768px) { font-size: var(--fs-lg); }
  }
}
</style>
