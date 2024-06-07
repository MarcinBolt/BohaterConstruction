<template>
  <div class="pageContainer">
    <header class="header">
      <router-link :to="{ name: 'home' }" class="logo">Bohater Construction</router-link>
      <nav class="nav">
        <router-link
          :to="{ name: 'projects' }"
          class="link nav-link"
          :class="{ active: isActive('projects') }"
        >
          Projects
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="link nav-link"
          :class="{ active: isActive('about') }"
        >
          About Me
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="link nav-link"
          :class="{ active: isActive('contact') }"
        >
          Contact
        </router-link>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = routeName => {
  return route.name === routeName;
};
</script>

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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
}
.logo:hover,
.logo:focus {
  color: #ce94fa;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
}

.nav-link {
  color: #00bfff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
}

.nav-link:hover,
.nav-link:focus {
  color: #ce94fa;
}

.active {
  color: #a972fc;
}
</style>
