<template>
  <main>
    <h1>Bringing Your Vision to Life</h1>
    <p>
      At Bohater Construction, the name "Bohater" itself carries a powerful Polish meaning, as it
      translates to "hero" in English. This name reflects my unwavering commitment to being the hero
      of your construction journey, dedicated to transforming your dreams into reality through
      exceptional craftsmanship and unparalleled service.
    </p>
    <ButtonWithTransition text="Realized projects" :to="{ name: 'projects' }" />
    <section class="services">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-item"
        :tabindex="0"
        :class="{ 'service-item--focus': isServiceItemFocused === index }"
        @focus="onServiceItemFocus(index)"
        @blur="onServiceItemBlur"
      >
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <router-link class="link" :to="`/services/${service.id}`">Learn More</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ButtonWithTransition from '@/components/ButtonWithTransition.vue';

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    description:
      'From custom homes to renovations, I specialize in bringing your residential dreams to life with meticulous attention to detail and exceptional craftsmanship.',
  },
  {
    id: 2,
    title: 'Commercial Construction',
    description:
      'I offer comprehensive commercial construction services tailored to meet the unique needs of your business, ensuring a seamless and efficient project execution.',
  },
  {
    id: 3,
    title: 'Sustainable Construction',
    description:
      'My eco-friendly approach ensures that your project is not only aesthetically pleasing but also environmentally conscious, incorporating sustainable practices and materials for a greener future.',
  },
];

const isServiceItemFocused = ref(null);

const onServiceItemFocus = index => {
  isServiceItemFocused.value = index;
};

const onServiceItemBlur = () => {
  isServiceItemFocused.value = null;
};
</script>

<style scoped>
h1 {
  font-size: 48px;
  text-align: center;
  margin: 20px;
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
  align-items: center;
  width: 300px;
  padding: 30px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-item--focus,
.service-item--hover {
  transform: translateY(-5px);
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

.service-item .link {
  color: #00c3ff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.service-item .link:hover,
.service-item .link:focus {
  color: #dcb4fb;
}
</style>
