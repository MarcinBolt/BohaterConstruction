<template>
  <main>
    <h1>Completed Projects</h1>
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import projectsData from '@/data/projects.json';

const projects = ref(projectsData);
</script>

<style scoped>
h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 30px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
  grid-gap: 30px;
  margin: 0 10px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
