<template>
  <main>
    <v-container class="container h-full">
      <h1 class="heading">Completed Projects</h1>
      <v-carousel show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="project in projects" :key="`carousel-${project.id}`">
          <ProjectCard :key="project.id" :project="project" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import projectsData from '@/data/projects.json';

const projects = ref(projectsData);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.heading {
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>
