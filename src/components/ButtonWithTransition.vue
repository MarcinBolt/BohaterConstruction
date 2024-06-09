<template>
  <router-link
    class="button"
    :to="props.goTo"
    @focus="increaseButtonWidth"
    @blur="resetButtonWidth"
    @mouseleave="resetButtonWidth"
    @mouseenter="increaseButtonWidth"
  >
    {{ props.text }}
    <span class="arrow"></span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  goTo: {
    type: Object || String,
    required: true,
  },
});
</script>

<style scoped>
.button {
  position: relative;
  display: inline-block;
  width: max-content;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 8px 35px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.87);
  border-color: #075389;
  background-color: #0a67aa;
  cursor: pointer;
  text-align: center;
  transition: all 0.25s;
}

.button:hover,
.button:focus {
  color: #6fddfe;
  background-color: #0053ac;
  padding: 8px 45px 8px 25px;
}

.arrow {
  position: absolute;
  top: 50%;
  right: 35px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  transition: all 0.25s;
  color: transparent;
}

.button:hover .arrow {
  right: 15px;
  color: #6fddfe;
}

.arrow:before {
  content: '';
  width: 6px;
  height: 6px;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;
  transform: rotate(45deg);
}
</style>
