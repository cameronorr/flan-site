import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue3Material from 'vue3-material';

createApp(App)
    .use(store)
    .use(router)
    .use(Vue3Material)
    .mount('#app');
