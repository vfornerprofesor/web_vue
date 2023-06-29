import { createApp } from 'vue';
import App from './App.vue'


//STYLES
import './styles/general.css'
import './styles/blocks.css'
import './styles/buttons.css'

//ROUTER
import './utils/router/router.js'
import router from './utils/router/router.js';

const highlightDirective = {
    mounted(el) {
      hljs.highlightAllUnder(el);
    },
  };

const app = createApp(App);
app.directive('highlight', highlightDirective);
app.use(router);
app.mount('#app');