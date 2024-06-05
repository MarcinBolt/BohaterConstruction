<template>
  <div class="pageContainer">
    <footer class="footer">
      <div class="footer-content">
      <p class="paragraph">© 2024 Bohater Construction. All rights reserved.</p>
      <router-link to="/privacy-policy" class="link">Privacy Policy</router-link>
    </div>
    <p class="paragraph">created by <a href="https://github.com/marcinbolt" class="link">MarcinBolt</a></p>
    </footer>
  </div>
</template>

<script></script>

<style scoped>
.pageContainer {
  position:absolute;
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
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.paragraph {
  margin: 0;
  padding: auto;
}

</style>
