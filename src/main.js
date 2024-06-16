import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(Vue3Toasity, {
  position: 'bottom-right',
  autoClose: '5000',
  transition: 'slide',
  closeOnClick: 'true',
  pauseOnHover: 'true',
  pauseOnFocusLoss: 'true',
  closeOnEsc: 'true',
  toastStyle: {
    background: 'rgba(88, 18, 145, 0.85)',
    color: 'white',
    borderRadius: '8px',
    padding: '12px 16px',
    border: '1px solid #be6efb',
  },
});
app.mount('#app');
