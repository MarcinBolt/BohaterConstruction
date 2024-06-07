<template>
  <main>
    <div class="home-container">
      <h1 class="heading">Page not found</h1>
      <div class="buttons-container">
        <router-link :to="{ name: 'home' }" class="button" @click.native="$router.go(-1)">
          Go back
        </router-link>
        <router-link :to="{ name: 'home' }" class="button"> Home </router-link>
      </div>
    </div>
  </main>
</template>

<script></script>

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
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
