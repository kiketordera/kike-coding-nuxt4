<template>
  <article class="case">
    <kike-experience-Intro :project="project" />

    <kike-experience-Information
      v-if="project.firstTitle || project.firstDescription.length"
      marker="01"
      :label="$t('caseStudy.problem')"
      :title="project.firstTitle"
      :description="project.firstDescription"
    >
      <kike-projects-ImageSection v-if="project.firstGroupImages.length" :links="project.firstGroupImages" :client="project.client" />
    </kike-experience-Information>

    <kike-experience-Information
      v-if="project.secondtitle || project.secondDescription.length"
      marker="02"
      :label="$t('caseStudy.built')"
      :title="project.secondtitle"
      :description="project.secondDescription"
    />

    <kike-experience-ImageCarousel
      v-if="project.secondGroupImages.length"
      marker="03"
      :imgs="project.secondGroupImages"
      :type="project.imagesType"
      :client="project.client"
    />

    <kike-experience-SliderControls :index="project.id" />
  </article>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/types'

const projects = await getI18nJson<Project>('projects')

const route = useRoute()
const link = route.params.project_id as string
const found = projects.find((entry) => entry.url === `/projects/${link}`)
if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}
const project = found

useSeoMeta({
  title: project.name,
  description: project.outcome || project.descriptionSEO,
})
</script>

<style lang="scss" scoped>
.case { display: block; }
</style>
