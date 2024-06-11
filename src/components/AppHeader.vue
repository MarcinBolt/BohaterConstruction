<template>
  <div class="pageContainer">
    <header class="header">
      <router-link
        :to="{ name: 'home' }"
        class="logo"
        @mousemove="handleMouseMove"
        @mouseleave="resetBackgroundPosition"
        >Bohater Construction</router-link
      >
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
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          class="link nav-link"
          :class="{ active: isActive(link.name) }"
          @mousemove="handleMouseMove"
          @mouseleave="resetBackgroundPosition"
        >
          {{ link.label }}
        </router-link>
      </nav>
      <div class="backdrop" v-if="isMenuOpen" @click.self="isMenuOpen = false">
        <div class="mobile-menu" v-if="isMenuOpen">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="{ name: link.name }"
            class="link mobile-link"
            :class="{ active: isActive(link.name) }"
            @click.self="isMenuOpen = false"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const links = [
  { name: 'projects', label: 'Projects' },
  { name: 'about', label: 'About Me' },
  { name: 'contact', label: 'Contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const route = useRoute();

const isActive = routeName => {
  return route.name === routeName;
};

const handleMouseMove = event => {
  const link = event.target;
  const rect = link.getBoundingClientRect();
  const x = event.clientX - rect.left;
  // const y = event.clientY - rect.top; // TODO: maybe remove this line later
  link.style.setProperty('--x', `${x}px`);
  // link.style.setProperty('--y', `${y}px`); // TODO: maybe remove this line later
};

const resetBackgroundPosition = event => {
  const link = event.target;
  link.style.setProperty('--x', '50%');
  // link.style.setProperty('--y', '50%'); // TODO: maybe remove this line later
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
  text-decoration: none;
  color: #c4c4c4e2;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.05s ease;
  background: linear-gradient(
    90deg,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #cdcdcdc9,
    #919191e1,
    #cdcdcdc9,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff
  );
  background-size: 300% 100%;
  background-position: var(--x);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 10s linear infinite;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
}
.logo:hover {
  animation: none;
  background: linear-gradient(
    90deg,
    #ce94fa,
    #ce94fa,
    #a128fe,
    #919191e1,
    #cdcdcdc9,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #cdcdcdc9,
    #919191e1,
    #a128fe,
    #ce94fa,
    #ce94fa
  );
  background-size: 150% 100%;
  background-position: var(--x);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo:focus {
  animation: none;
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
    transition: all 0.05s ease;
  }

  .nav-link:hover {
    background: linear-gradient(
      90deg,
      #ce94fa,
      #a128fe,
      #0080ff,
      #00bfff,
      #00bfff,
      #0080ff,
      #a128fe,
      #ce94fa
    );
    background-size: 150% 100%;
    background-position: var(--x);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .nav-link:focus {
    color: #ce94fa;
  }
}

.active {
  color: #a972fc;
}

@keyframes shine {
  0% {
    background-position: 0% 150%;
  }
  /* 50% {
    background-position: 100% 0%;
  } */
  100% {
    background-position: 150% 0%;
  }
}
</style>
