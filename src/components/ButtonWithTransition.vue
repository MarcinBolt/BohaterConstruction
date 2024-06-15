<template>
  <router-link class="button">
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
});
</script>

<style scoped>
.button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  border-radius: 8px;
  padding: 12px 35px;
  font-size: 1em;
  font-weight: 500;
  line-height: 1em;
  color: #fff;
  border: 1px solid #075389;
  background: linear-gradient(to bottom, #2496e9, #1a6edc);
  cursor: pointer;
  transition: all 0.25s;
}

.button:hover,
.button:focus {
  border: 1px solid #f43ffebe;
  background: linear-gradient(to bottom, #3aacfd, #477bff, #a131fc);
  padding: 12px 45px 12px 25px;
  transition: all 0.25s;
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

.button:hover .arrow,
.button:focus .arrow {
  right: 20px;
  color: #fff;
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
