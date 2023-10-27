<template>
  <article class="resume" :class="{ active: isActive }" data-page="resume">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>
    <EducationList :educations="educations" />
    <ExperienceList :experiences="experiences" />
    <SkillList :technologies="technologies" />
  </article>
</template>

<script>
import EducationList from '../components/EducationList.vue'
import ExperienceList from '../components/ExperienceList.vue'
import SkillList from '../components/SkillList.vue'

import { educations } from '../data/educations'
import { experiences } from '../data/experiences'
import { technologies } from '../data/technologies'

export default {
  components: {
    EducationList,
    ExperienceList,
    SkillList
  },
  data() {
    return {
      educations,
      experiences,
      technologies
    }
  }
}
</script>
