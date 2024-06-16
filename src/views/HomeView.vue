<template>
  <main>
    <h1 class="heading">Bringing Your Vision to Life</h1>
    <p class="paragraph">
      At Bohater Construction, the name "Bohater" itself carries a powerful Polish meaning, as it
      translates to "hero" in English. This name reflects my unwavering commitment to being the hero
      of your construction journey, dedicated to transforming your dreams into reality through
      exceptional craftsmanship and unparalleled service.
    </p>
    <ButtonWithTransition text="Realized projects" :to="{ name: 'projects' }" />
    <div class="container">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="card"
        :tabindex="0"
        :class="{ 'card--focus': isCardFocused === index }"
        @focus="onCardFocus(index)"
        @blur="onCardBlur(service.id, $event)"
      >
        <img class="background" :src="service.imageSrc" :alt="service.title" />
        <div class="card-content">
          <div class="service-icon-eye">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-eye"
              viewBox="0 0 34 26"
              width="34"
              height="26"
              fill="none"
            >
              <path
                d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
              ></path>
            </svg>
          </div>
          <div class="service-content">
            <p class="service-description" v-show="isDescriptionOpen[service.id]">
              {{ service.description }}
            </p>
            <div class="container-service-title">
              <h3 class="service-title">{{ service.title }}</h3>
              <div @click="toggleDescription(service.id, $event)" class="button-toggle-description">
                <svg
                  v-if="isDescriptionOpen[service.id]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                  stroke-width="2"
                  class="feather feather-chevron-up"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                  stroke-width="2"
                  class="feather feather-chevron-down"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                {{ isDescriptionOpen[service.id] ? 'Hide' : 'More' }}
              </div>
            </div>
          </div>
        </div>
        <div class="backdrop"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ButtonWithTransition from '@/components/ButtonWithTransition.vue';

const ResidentialConstructionImageURL = './images/Residential.jpeg';
const CommercialConstructionImageURL = './images/Commercial.jpeg';
const SustainableConstructionImageURL = './images/Sustainable.jpeg';

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    imageSrc: ResidentialConstructionImageURL,
    description:
      'From custom homes to renovations, I specialize in bringing your residential dreams to life with meticulous attention to detail and exceptional craftsmanship.',
  },
  {
    id: 2,
    title: 'Commercial Construction',
    imageSrc: CommercialConstructionImageURL,
    description:
      'I offer comprehensive commercial construction services tailored to meet the unique needs of your business, ensuring a seamless and efficient project execution.',
  },
  {
    id: 3,
    title: 'Sustainable Construction',
    imageSrc: SustainableConstructionImageURL,
    description:
      'My eco-friendly approach ensures that your project is not only aesthetically pleasing but also environmentally conscious, incorporating sustainable practices and materials for a greener future.',
  },
];

const isCardFocused = ref(null);
const isDescriptionOpen = ref({});

services.forEach(service => {
  isDescriptionOpen.value[service.id] = false;
});

const toggleDescription = (serviceId, event) => {
  isDescriptionOpen.value[serviceId] = !isDescriptionOpen.value[serviceId];
  event.target.blur();
};

const onCardFocus = index => {
  isCardFocused.value = index;
};

const onCardBlur = (serviceId, event) => {
  isDescriptionOpen.value[serviceId] = false;
  isCardFocused.value = null;
  event.target.blur();
};
</script>

<style scoped>
.heading {
  text-align: center;
  margin: 20px;
}

.paragraph {
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
}

*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
mg {
  width: 100%;
  height: 100%;
  display: block;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding: 50px 0 10px 0;

  @media screen and (min-width: 480px) {
    gap: 2px;
    flex-direction: row;
    padding: 50px 0 10px 0;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 900px;
    padding: 50px 0 0px 0;
  }
}

.card {
  min-width: 55px;
  min-height: 400px;
  height: 500px;
  border: 1px dashed #a128fe;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  position: relative;
  transition: flex-grow 0.3s ease-in;
  padding: 0;
  --transition-timing: 0.5s;

  @media screen and (min-width: 768px) {
    height: 600px;
  }
}
.card:hover,
.card--focus {
  flex-grow: 20;
  border: 1px solid #dcb4fb;
}

.card > .background {
  position: absolute;
  inset: 0;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
  z-index: -1;
  transition: var(--transition-timing) ease;
}
.card:hover > .background,
.card:focus-within > .background {
  filter: brightness(1.1);
}

.card > .card-content {
  display: flex;
  align-items: end;
  position: absolute;
  left: 12px;
  bottom: 5px;
  overflow: visible;
  transition: var(--transition-timing);
  z-index: 10;
}
.card:hover > .card-content,
.card:focus-within > .card-content {
  inset: 20px;
  top: auto;
}

.card-content > * {
  transition: var(--transition-timing);
}

.card-content > .service-icon-eye {
  padding: 0;
}
.card:hover .service-icon-eye,
.card:focus .service-icon-eye {
  display: none;
}
.service-icon-eye > svg {
  fill: #dcb4fb;
}
.card:hover .service-icon-eye > svg,
.card:focus .service-icon-eye > svg {
  display: none;
}

.service-content {
  width: 100%;
  max-height: max-content;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 5px 5px 18px 2px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 5px 18px 2px rgba(0, 0, 0, 1);
  box-shadow: 5px 5px 18px 2px rgba(0, 0, 0, 1);
  margin: 2 auto;
  padding: 10px;
  opacity: 0;
  translate: 0 100%;
  text-align: left;
  overflow: hidden;
  transition: translate 1s ease;
}
.card:hover .service-content,
.card:focus .service-content {
  border-radius: 10px;
  background-color: rgba(31, 6, 51, 0.75);
  opacity: 1;
  translate: 0 0;
}

.container-service-title {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.service-title {
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 480px) {
    font-size: 22px;
  }
}

.service-description {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  padding-top: 10px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
}

.button-toggle-description {
  width: 60px;
  height: min-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 0;
  margin: 0;
  outline: none;
  color: #00c3ff;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
}

.button-toggle-description > svg {
  width: 24px;
  height: 24px;
  stroke: #00c3ff;
  margin: 5px 0;
  rotate: 180deg;
  transition: stroke 0.3s, margin 0.3s, rotate 0.3s;
}
.button-toggle-description:hover {
  color: #dcb4fb;
  transition: color 0.3s;
}
.button-toggle-description:hover > svg {
  stroke: #dcb4fb;
  transition: stroke 0.3s;
}

.button-toggle-description:hover .feather-chevron-up {
  margin: 0;
  rotate: 0deg;
  transition: margin 0.3s, rotate 0.3s;
}
.button-toggle-description:hover .feather-chevron-down {
  margin: 10px 0;
  rotate: 0deg;
  transition: margin 0.3s, rotate 0.3s;
}

.card > .backdrop {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
  z-index: 0;
  background: linear-gradient(to bottom, transparent, rgb(0, 0, 0));
}
.card:hover .backdrop,
.card:focus .backdrop {
  background: transparent;
}
</style>
