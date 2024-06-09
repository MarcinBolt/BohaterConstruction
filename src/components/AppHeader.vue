<template>
  <div class="pageContainer">
    <header class="header">
      <router-link :to="{ name: 'home' }" class="logo">Bohater Construction</router-link>
      <button
        class="burger"
        type="button"
        :style="{ position: isMenuOpen ? 'fixed' : 'absolute' }"
        @click="toggleMenu"
      >
        <span :class="{ 'burger-line': true, 'top-line': true, toggle: isMenuOpen }"></span>
        <span :class="{ 'burger-line': true, 'middle-line': true, toggle: isMenuOpen }"></span>
        <span :class="{ 'burger-line': true, 'bottom-line': true, toggle: isMenuOpen }"></span>
      </button>
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
      <div class="backdrop" v-if="isMenuOpen" @click.self="isMenuOpen = false">
        <div class="mobile-menu" v-if="isMenuOpen">
          <router-link
            :to="{ name: 'projects' }"
            class="link mobile-link"
            :class="{ active: isActive('projects') }"
            @click.self="isMenuOpen = false"
          >
            Projects
          </router-link>
          <router-link
            :to="{ name: 'about' }"
            class="link mobile-link"
            :class="{ active: isActive('about') }"
            @click.self="isMenuOpen = false"
          >
            About Me
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            @click="isMenuOpen = false"
            class="link mobile-link"
            :class="{ active: isActive('contact') }"
            @click.self="isMenuOpen = false"
          >
            Contact
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

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
  display: none;
}

.burger {
  border: none;
  background-color: transparent;
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0;
  padding: 15px 25px;
  background-color: none;
  transition: transform 0.3s;
  z-index: 55;
}

.burger-line {
  display: block;
  background-color: #00bfff;
  transition: all 0.25s;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  transition: all 0.25s;
  opacity: 1;
}

.burger:hover .burger-line,
.burger:focus .burger-line {
  background-color: #a972fc;
}

.top-line.toggle {
  transform: translateY(8px) rotate(45deg);
}

.middle-line.toggle {
  opacity: 0;
}

.bottom-line.toggle {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  padding: 10px;
  gap: 25px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #0a2039, #25185a);
  transform: translateX(100%);
  transition: transform 0.25s;

  @media screen and (min-width: 450px) {
    width: 230px;
  }
}

.mobile-link {
  color: #00bfff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 10px;
  transform: translateX(0%);
  transition: transform 0.25s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
}

.mobile-link:hover,
.mobile-link:focus {
  color: #ce94fa;
  transform: translateY(-5%);
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
}

.mobile-menu {
  transform: none;
}

@media (min-width: 768px) {
  .burger {
    display: none;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: #00bfff;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .nav-link:hover,
  .nav-link:focus {
    color: #ce94fa;
  }
}

.active {
  color: #a972fc;
}
</style>
