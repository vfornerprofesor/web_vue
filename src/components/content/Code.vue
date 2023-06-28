<template>
    <pre>
      <code :class="`language-${language}`">{{ formattedCode }}</code>
    </pre>
  </template>
  
  <script>
  import hljs from 'highlight.js/lib/core';
  
  // Importa los lenguajes que deseas utilizar
  import javascript from 'highlight.js/lib/languages/javascript';
  import python from 'highlight.js/lib/languages/python';
  // ... y otros lenguajes que necesites
  
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('python', python);
  // Registra los demás lenguajes que hayas importado
  
  export default {
    props: {
      language: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        formattedCode: ''
      };
    },
    mounted() {
      this.highlightCode();
    },
    updated() {
      this.highlightCode();
    },
    methods: {
      highlightCode() {
        debugger;
        //const code = this.$slots.default()[0].children.trim();
        if(this.$slots.default().length == 1) {

            this.formattedCode = this.$slots.default()[0].children.trim();
        }

        // Utiliza la función `highlight` en lugar de `highlightBlock`
        //this.formattedCode = hljs.highlight(code, { language: this.language }).value;
      }
    }
  };
  </script>
  