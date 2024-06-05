<template>
  <div>
    <main>
      <h1>Completed Projects</h1>
      <div class="project-grid">
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link to="/projects/project1">Learn More</router-link>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link to="/projects/project2">Learn More</router-link>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 3" />
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link to="/projects/project3">Learn More</router-link>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 4" />
          <h2>Project 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link to="/projects/project4">Learn More</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>

h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 30px;
}

p {
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.step h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.step p {
  font-size: 20px;
  text-align: left;
  max-width: 800px;
}

</style>
