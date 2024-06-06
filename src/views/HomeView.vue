<template>
  <main>
    <h1>Bringing Your Vision to Life</h1>
    <p>
      At Bohater Construction, the name "Bohater" itself carries a powerful Polish meaning, as it
      translates to "hero" in English. This name reflects my unwavering commitment to being the
      hero of your construction journey, dedicated to transforming your dreams into reality
      through exceptional craftsmanship and unparalleled service.
    </p>
    <router-link to="/projects" class="button">Realized projects</router-link>

    <section class="services">
      <div class="service-item">
        <h3>Residential Construction</h3>
        <p>
          From custom homes to renovations, I specialize in bringing your residential dreams to life
          with meticulous attention to detail and exceptional craftsmanship.
        </p>
        <!-- <router-link to="/services/residential">Learn More</router-link> -->
      </div>
      <div class="service-item">
        <h3>Commercial Construction</h3>
        <p>
          I offer comprehensive commercial construction services tailored to meet the unique needs
          of your business, ensuring a seamless and efficient project execution.
        </p>
        <!-- <router-link to="/services/commercial">Learn More</router-link> -->
      </div>
      <div class="service-item">
        <h3>Sustainable Construction</h3>
        <p>
          My eco-friendly approach ensures that your project is not only aesthetically pleasing but
          also environmentally conscious, incorporating sustainable practices and materials for a
          greener future.
        </p>
        <!-- <router-link to="/services/sustainable">Learn More</router-link> -->
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 30px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.499);
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
