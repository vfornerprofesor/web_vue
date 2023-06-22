<template>
  
  <router-link class="unit-link" :to="link_page">
        <div class="unit">
            <img :src="link_img" alt="" class="unit-img img-fluid">
            <br>
            <button v-if="title" class="btn btn-primary unit-title">{{ title }}</button>
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
 .unit {
    display: inline-block;
    align-items: center;
 }

   .unit-title {
    width: 100%;
 }
   </style>
   