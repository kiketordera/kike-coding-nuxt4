<template>
  <section v-reveal class="team">
    <h2>
      {{ $t('made-with') }}
      <img src="~/assets/svg/vv/heart.svg" alt="" width="30" height="28" class="heart">
      {{ $t('by') }}
    </h2>
    <ul class="cards">
      <li v-for="member in allTeam" :key="member.name" class="card">
        <NuxtImg
          :src="`/img/vv/teams/${member.img}`"
          alt=""
          width="224"
          height="224"
          sizes="112px"
          format="webp"
          loading="lazy"
          class="portrait"
        />
        <h3>{{ member.name }}</h3>
        <p class="role">{{ member.title }}</p>
        <p class="bio">{{ member.description }}</p>
        <ul class="social" :aria-label="member.name">
          <li>
            <a :href="member.linkedin" target="_blank" rel="noopener" :aria-label="$t('vvExtra.team.linkedin', { name: member.name })">
              <img src="~assets/svg/vv/linkedin.svg" alt="" width="28" height="28">
            </a>
          </li>
          <li>
            <a
              :href="member.web"
              :target="member.web.startsWith('http') ? '_blank' : undefined"
              :rel="member.web.startsWith('http') ? 'noopener' : undefined"
              :aria-label="$t('vvExtra.team.web', { name: member.name })"
            >
              <img src="~assets/svg/vv/web.svg" alt="" width="28" height="28">
            </a>
          </li>
          <li>
            <a :href="`mailto:${member.email}`" :aria-label="$t('vvExtra.team.email', { name: member.name })">
              <img src="~assets/svg/vv/mail.svg" alt="" width="28" height="28">
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import type { Team } from '~/types/data_model';
const allTeam = await getI18nJson<Team>('team')
</script>

<style lang="scss" scoped>
.team {
  max-width: var(--container);
  margin-inline: auto;
  padding: 2rem var(--gutter);
  text-align: center;

  h2 {
    font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
    margin-block: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .heart {
    width: 30px;
    height: auto;
    display: inline-block;
  }
}

.cards {
  list-style: none;
  margin: 0;
  padding: 1.5rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 900px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.card {
  min-width: 0;

  .portrait {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 1rem auto;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: $branding-blue-deep;
  }

  // Bold at 20px counts as large text, where the brand pink clears 3:1 on white.
  .role {
    margin: 0.5rem auto;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: $branding-pink;
    text-align: center;
  }

  .bio {
    font-size: var(--fs-md);
    max-width: 28rem;
    margin-inline: auto;
    text-align: start;
  }
}

.social {
  list-style: none;
  margin: 0;
  padding: 0.75rem 0 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    img { width: 28px; height: 28px; }
  }
}

@media (prefers-reduced-motion: no-preference) {
  .heart { animation: pulse 2.5s infinite; }
  @keyframes pulse {
    0% { transform: scale(1); }
    25% { transform: scale(0.97); }
    35% { transform: scale(0.9); }
    45% { transform: scale(1.1); }
    55% { transform: scale(0.9); }
    65% { transform: scale(1.1); }
    75% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }
}
</style>
