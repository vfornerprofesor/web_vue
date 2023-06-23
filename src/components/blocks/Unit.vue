<template>
  
  <router-link class="unit-link" :to="getLinkPage(link_page)">
        <div class="unit">
            <!--<img :src="link_img" alt="" class="unit-img img-fluid">-->
            <img :src="getImageLink(img_name)" alt="" class="unit-img img-fluid" />
            <br>
            <button v-if="title" class="btn btn-primary unit-title">{{ title }}</button>
        </div>

    </router-link>
</template>
   
   <script>
   import img from '@/utils/img.js';
   import urls from '@/utils/urls.js';

   export default {
     name: 'UnitComponent',
     props: {
    link_page: {
      type: String
    },
    img_name: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    getImageLink(imageName) {
      const image = img[imageName];
      return image;
    },
    getLinkPage(linkPage) {
      const url = urls[linkPage];
      return url;
    }
  }
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
   