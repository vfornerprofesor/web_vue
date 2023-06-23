<template>
    
    <iframe :src="link">

    </iframe>
  </template>
  
  <script>
  export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
  </script>
  