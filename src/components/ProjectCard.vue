<template>
  <div class="project-card">
    <img class="image" :src="project.imageUrl" :alt="project.title" />
    <div class="description-container">
      <h2 class="title">{{ project.title }}</h2>
      <p class="description">{{ project.description }}</p>
      <router-link class="button" :to="`/projects/${project.id}`">Learn More</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.499);
}
.project-card:hover .image {
  transform: scale(1.02);
}

.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.5s ease;
  overflow: hidden;
}

.description-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 20px 10px;
}

.title {
  font-size: 20px;
  padding: 20px 0;
  margin: 0;
}

.description {
  font-size: 16px;
  padding: 0;
  margin: 0 0 20px 0;
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
