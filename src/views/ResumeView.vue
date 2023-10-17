<template>
  <article class="resume" data-page="resume">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>
    <EducationList :educations="educations" />
    <ExperienceList :experiences="experiences" />
    <SkillList :skills="skills" />
  </article>
</template>

<script>
import EducationList from '../components/EducationList.vue'
import ExperienceList from '../components/ExperienceList.vue'
import SkillList from '../components/SkillList.vue'

export default {
  props: {
    educations: Array,
    experiences: Array,
    skills: Array
  },
  components: {
    EducationList,
    ExperienceList,
    SkillList
  }
}
</script>
