import { createApp } from 'vue';
import App from './App.vue'


//STYLES
import './styles/general.css'
import './styles/blocks.css'
import './styles/buttons.css'

//HIGHLIGHT
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);

// Importa el estilo CSS de highlight.js
import 'highlight.js/styles/default.css';

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