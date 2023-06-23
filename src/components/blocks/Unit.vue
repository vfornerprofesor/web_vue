<template>
  
  <router-link class="unit-link" :to="link_page">
        <div class="unit">
            <!--<img :src="link_img" alt="" class="unit-img img-fluid">-->
            <img :src="getImageLink(link_img)" alt="" class="unit-img img-fluid" />
            <br>
            <button v-if="title" class="btn btn-primary unit-title">{{ title }}</button>
        </div>

    </router-link>
</template>
   
   <script>
   import image1 from '@/img/logo.png';
   import image2 from '@/img/css.png';
   import image3 from '@/img/html.png';
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
  },
  methods: {
    getImageLink(imageName) {
      // Array con los nombres de las imágenes y sus enlaces correspondientes
      const imageLinks = [
        { name: 'imagen1', link: image1 },
        { name: 'imagen2', link: image2 },
        { name: 'imagen3', link: image3 },
        // Agrega más elementos al array según necesites
      ];

      // Busca el enlace de la imagen según su nombre
      const image = imageLinks.find(image => image.name === imageName);

      // Devuelve el enlace de la imagen o un enlace por defecto si no se encuentra
      return image ? image.link : 'ruta/a/imagen-por-defecto.jpg';
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
   