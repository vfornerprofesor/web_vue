import { createApp } from 'vue';
import App from './App.vue'


//STYLES
import './styles/general.css'
import './styles/blocks.css'
import './styles/buttons.css'

//ROUTER
import './router/router.js'
import router from './router/router.js';


const app = createApp(App);
app.use(router);
app.mount('#app');