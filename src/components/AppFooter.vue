<template>
  <div class="pageContainer">
    <footer class="footer">
      <div class="footer-content">
        <p class="paragraph">© 2024 Bohater Construction</p>
        <router-link :to="{ name: 'policy' }" class="link" @click="scrollToTop">Privacy Policy</router-link>
      </div>
      <p class="paragraph">
        created by <a href="https://github.com/marcinbolt" class="link">MarcinBolt</a>
      </p>
    </footer>
  </div>
</template>

<script setup>

const scrollToTop = () => {
  if (window.innerHeight < document.documentElement.scrollHeight) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
</script>

<style scoped>
.pageContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0;
  margin: 0;
}

.footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
    padding: 15px;
  }
}

.footer-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
}

.paragraph {
  margin: 0;
  padding: auto;
}
</style>


