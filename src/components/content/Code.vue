<template>
    <pre class="pre_code">
      <!--<code :class="`language-${language}`">{{ formattedCode }}</code>-->
      <!--<code  id="code_slot" :class="`language-${language}`"><slot></slot></code>-->
      <code  class="code_block" :class="`language-${language}`">
        {{ code }}
    </code>

    </pre>
</template>
  
<script>
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';


// Importa los lenguajes que deseas utilizar
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import html from 'highlight.js/lib/languages/xml';
import php from 'highlight.js/lib/languages/php';
// ... y otros lenguajes que necesites

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('html', html);
hljs.registerLanguage('php', php);
// Registra los demás lenguajes que hayas importado

export default {
    props: {
        code: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        }
    },
    mounted() {
        hljs.highlightAll();
    },
    methods: {
    }
};
</script>
  <style>
.pre_code {
    margin-bottom: 20px;
    padding: 0 !important;
    padding-block: 0 !important;
    display: grid;
}

.code_block { 
    border-radius: 5px;
    padding: 0 !important;
    margin: 0 !important;
}
</style>

<!--
<Code language="javascript" :code="code_1" />  
data() {
    return {
      code_1: `
      var a = 1;
      var b = 2;
      console.log(a + b);
      `,
      code_2: `
      def hello():
        print("Hola, mundo!")
        print('Hola, mundo!')

      hello()
`,
      code_3: `
      <div>
        <p>Hola</p>
      </div>
        `
    }
  },

-->