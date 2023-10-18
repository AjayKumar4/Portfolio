<template>
  <article class="resume" data-page="resume">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>
    <EducationList :educations="educations" />
    <ExperienceList :experiences="experiences" />
    <SkillList :technologies="technologies" />
  </article>
</template>

<script setup lang="ts">
import EducationList from '../components/EducationList.vue'
import ExperienceList from '../components/ExperienceList.vue'
import SkillList from '../components/SkillList.vue'

import educations from '../data/educations'
import experiences from '../data/experiences'
import technologies from '../data/technologies'
</script>
