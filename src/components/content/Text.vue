<template>
  <div>
    <p :style="elementStyles" v-html="formatText(text)"></p>
  </div>
</template>
  
<script>
import mixin from '@/utils/mixin.js';

export default {
  name: 'Text',
  mixins: [mixin],
  props: {
    text: {
      type: String,
      required: true
    },
  },
  methods: {
    formatText(text) {
      // Reemplaza los asteriscos (*) por etiquetas <strong> para el texto en negrita
      const formattedText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
      // Reemplaza los corchetes [] por etiquetas <a> para los enlaces
      const finalText = formattedText.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2">$1</a>'
      );
      return finalText;
    }
  },

};
</script>
<!--
      text="Este es un ejemplo de texto *en negrita* con un [enlace](https://www.ejemplo.com)."

-->