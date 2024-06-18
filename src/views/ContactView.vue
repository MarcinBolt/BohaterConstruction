<template>
  <main>
    <v-container class="contact-container">
      <h1 class="heading">Get In Touch</h1>
      <v-card class="form-card" theme="dark">
        <v-card-title class="text-h5">Send Me a Message</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="isValid">
            <v-text-field
              label="Name"
              class="text-field"
              v-model="name"
              :rules="nameRules"
              required
              variant="outlined"
            ></v-text-field>
            <v-text-field
              label="Email"
              class="text-field"
              v-model="email"
              :rules="emailRules"
              required
              variant="outlined"
            ></v-text-field>
            <v-textarea
              label="Message"
              class="text-field mb-0"
              v-model="message"
              :rules="messageRules"
              required
              variant="outlined"
              rows="5"
              auto-grow
            >
            </v-textarea>
            <v-switch
              label="Send a copy to the provided email"
              v-model="sendCopyToClient"
              color="#3aacfd"
              class="pb-0 pt-0 pr-4"
              hide-details
            ></v-switch>
            <v-btn :disabled="!isValid" color="primary" class="send-button mt-6" @click="sendEmail">
              Send
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </main>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const baseUrl =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? `${import.meta.env.VITE_BACKEND_SERVER_URL}`
    : `${import.meta.env.VITE_BOHATER_FINAL_BACKEND_SERVER_URL}`;

axios.defaults.baseURL = baseUrl;
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

// Reactive form state
const state = reactive({
  name: '',
  email: '',
  message: '',
  isValid: false,
  sendCopyToClient: false,
});

// Extract refs from reactive state
const { name, email, message, isValid, sendCopyToClient } = toRefs(state);

// Form validation rules
const nameRules = [
  v => !!v || 'Name is required',
  v => v.length <= 25 || 'Name must be less than 25 characters',
];
const emailRules = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
const messageRules = [
  v => !!v || 'Message is required',
  v => v.length <= 2000 || 'Message must be less than 2000 characters',
];

// Form ref
const form = ref(null);
const resetForm = () => {
  name.value = '';
  email.value = '';
  message.value = '';
  form.value.resetValidation();
};

// Send email function (replace with your logic)
const sendEmail = async () => {
  if (form.value.validate()) {
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
      sendCopyToClient: !!sendCopyToClient.value,
    };

    const sendEmailPromise = axios.post(`${apiEndpoint}`, formData);

    toast.promise(sendEmailPromise, {
      pending: 'Message sending...',
      success: {
        render({ data }) {
          resetForm();
          return `Message sent successfully 👌`;
        },
      },
      error: {
        render() {
          return `Error Please try again later. or message me directly at: ${
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
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: auto;
}

.heading {
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
}

.form-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(9, 5, 20, 0.733);
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid #782497d7;
}

.v-text-field {
  margin-bottom: 15px;
}

.send-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 35px;
  margin: 0 auto;
  font-size: 1em;
  font-weight: 500;
  line-height: 1em;
  text-transform: capitalize;
  color: #fff;
  border: 1px solid #075389;
  background: linear-gradient(to bottom, #2496e9, #1a6edc);
  cursor: pointer;
  transition: all 0.25s;
}

.send-button:hover,
.send-button:focus {
  color: #fff;
  border: 1px solid #f43ffebe;
  background: linear-gradient(to bottom, #3aacfd, #477bff, #a131fc);
}

.send-button:focus,
.send-button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
