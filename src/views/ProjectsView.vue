<template>
  <main>
    <v-container class="container h-full">
      <h1 class="heading">Completed Projects</h1>
      <v-carousel :show-arrows="showArrows" cycle interval="8000" hide-delimiter-background>
        <v-carousel-item v-for="project in projects" :key="`carousel-${project.id}`">
          <ProjectCard :key="project.id" :project="project" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import projectsData from '@/data/projects.json';

const projects = ref(projectsData);
const windowWidth = ref(window.innerWidth);

const showArrows = computed(() => (windowWidth.value >= 1024 ? 'hover' : false));

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
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
