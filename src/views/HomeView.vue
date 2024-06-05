<template>
  <main>
    <h1>Bringing Your Vision to Life</h1>
    <p>
      Bohater Construction is a team of passionate experts dedicated to transforming your dreams
      into reality. Let us guide you through the process of creating the perfect space for your
      needs.
    </p>
    <router-link to="/get-started" class="button">Get Started</router-link>

    <section class="services">
      <div class="service-item">
        <h3>Residential Construction</h3>
        <p>
          From custom homes to renovations, we specialize in bringing your residential dreams to
          life.
        </p>
        <router-link to="/services/residential">Learn More</router-link>
      </div>
      <div class="service-item">
        <h3>Commercial Construction</h3>
        <p>
          We offer comprehensive commercial construction services to meet the needs of your
          business.
        </p>
        <router-link to="/services/commercial">Learn More</router-link>
      </div>
      <div class="service-item">
        <h3>Sustainable Construction</h3>
        <p>
          Our eco-friendly approach ensures that your project is not only beautiful but also
          environmentally conscious.
        </p>
        <router-link to="/services/sustainable">Learn More</router-link>
      </div>
    </section>
  </main>
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

.services {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
}

.service-item {
  width: 300px;
  padding: 30px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-10px);
}

.service-item h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.service-item p {
  font-size: 18px;
  margin-bottom: 30px;
}

.service-item a {
  color: #00c3ff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.service-item a:hover {
  color: #007bff;
}
</style>