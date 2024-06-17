<template>
  <main>
    <div class="contact-container">
      <h1 class="heading">Message Me</h1>
      <form class="form" @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button class="button" type="submit" :disabled="!isFormValid">Send</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const baseUrl =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? `${import.meta.env.VITE_BACKEND_SERVER_URL}`
    : `${import.meta.env.VITE_BOHATER_FINAL_BACKEND_SERVER_URL}`;

axios.defaults.baseURL = baseUrl;
console.log('baseUrl: ', baseUrl);
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

const name = ref('');
const email = ref('');
const message = ref('');

const isValidEmail = emailAddress => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailAddress);
};

const isFormValid = computed(() => {
  return name.value.trim() && isValidEmail(email.value) && message.value.trim();
});

const sendEmail = async () => {
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  const sendEmailPromise = axios.post(`${apiEndpoint}`, formData);

  toast.promise(sendEmailPromise, {
    pending: 'Message sending...',
    success: {
      render({ data }) {
        return `Message sent successfully 👌`;
      },
    },
    error: {
      render() {
        return `Error Please try again later. or message me directly to: ${
          import.meta.env.VITE_PAGE_OWNER_EMAIL
        }`;
      },
      autoClose: false,
      toastStyle: {
        background: 'rgba(150, 1, 5, 0.9)',
        color: '#fff',
      },
    },
  });

  if ((await sendEmailPromise).status === 200) {
    name.value = '';
    email.value = '';
    message.value = '';
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.heading {
  text-align: center;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 650px;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

label {
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

input,
textarea {
  color: #000;
  display: flex;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: rgba(210, 231, 255, 0.8);
}

textarea {
  height: 150px;
}

.button:disabled {
  background: #cccccc;
  cursor: not-allowed;
  border: 1px solid #999999;
  color: #666666;
}
</style>
