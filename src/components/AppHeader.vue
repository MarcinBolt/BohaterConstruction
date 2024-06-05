<template>
  <div class="pageContainer">
    <header class="header">
      <router-link to="/" class="logo">Bohater Construction</router-link>
      <nav class="nav">
        <router-link to="/about" class="link">About</router-link>
        <router-link to="/projects" class="link">Projects</router-link>
        <router-link to="/contact" class="link">Contact</router-link>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style scoped>
.pageContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0;
  margin: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  padding: 15px 15px;
  margin: 0 auto;
}

.logo {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: color 0.3s ease;
}
.logo:hover {
  color: #00c3ff;
}

.nav {
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0;
  padding: 0;
}
</style>
