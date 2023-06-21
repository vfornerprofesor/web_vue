<template>
  
  <router-link class="unit-link" :to="link_page">
        <div class="unit">
            <img :src="link_img" alt="">
            <h3 v-if="title" class="btn btn-primary unit-title">{{ title }}</h3>
        </div>

    </router-link>
</template>
   
   <script>
   export default {
     name: 'UnitComponent',
     props: {
    link_page: {
      type: String
    },
    link_img: {
      type: String
    },
    title: {
      type: String
    }
  }
     // Puedes agregar métodos o lógica adicional aquí si es necesario
   }
   </script>
   
   <style scoped>
 
   </style>
   