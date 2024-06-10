<template>
  <main>
    <div class="home-container">
      <h1 class="heading">Page not found</h1>
      <div class="buttons-container">
        <router-link :to="{ name: 'home' }" class="button" @click="$router.go(-1)">
          Go back
        </router-link>
        <ButtonWithTransition text="Home" :to="{ name: 'home' }" />
      </div>
    </div>
  </main>
</template>

<script setup>
import ButtonWithTransition from '@/components/ButtonWithTransition.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.heading {
  text-align: center;
  margin-bottom: 20px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
