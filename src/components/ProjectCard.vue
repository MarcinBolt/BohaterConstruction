<template>
  <li class="project-card" :tabindex="0">
    <img class="image" :src="props.project.imageUrl" :alt="props.project.title" />
    <div class="description-container">
      <h2 class="title">{{ props.project.title }}</h2>
      <p class="description">{{ props.project.description }}</p>
      <!-- <ButtonWithTransition text="Learn More" :to="`/projects/${props.project.id}`" /> -->
    </div>
  </li>
</template>

<script setup>
// import ButtonWithTransition from '@/components/ButtonWithTransition.vue';

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
  margin: 0 auto;
  background-color: rgba(31, 6, 51, 0.7);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease;
  height: 100%;
}

.project-card:focus .image,
.project-card:hover .image {
  transform: scale(1.03);
}

.image {
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  overflow: hidden;
}

.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 50px;
}

.title {
  font-size: 20px;
  padding: 20px 0;
  margin: 0;
}

.description {
  font-size: 16px;
  padding: 0;
  margin: 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
