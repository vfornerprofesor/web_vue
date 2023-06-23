<template>
    
    <iframe :src="link" :style="[componentStyle, extraStyle]">

    </iframe>
  </template>
  
  <script>
  export default {
  props: {
    link: {
      type: String,
      required: true
    },
    extraStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      componentStyle: {
        //backgroundColor: 'blue',
      }
    };
  }
}
  </script>
  