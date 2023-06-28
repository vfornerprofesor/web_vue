<template>
  <router-link class="unit-link" :to="getLinkPage(link_page_name)">
    <div :class="[existentClass, additionalClass]">
      <!--<img :src="link_img" alt="" class="unit-img img-fluid">-->
      <img :src="getImageLink(img_name)" alt="" class="unit-img" />
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
    link_page_name: {
      type: String
    },
    img_name: {
      type: String
    },
    title: {
      type: String
    },
    colored: {
      type: Boolean
    },
    existentClass:  {
      type: String,
      default: 'unit'
    },
    additionalClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    getImageLink(imageName) {
      const image = img[imageName];
      return image;
    },
    getLinkPage(linkPageName) {
      const url = urls[linkPageName];
      return url;
    }
  }
}
</script>
   
<style scoped>
.unit {
  text-align: center;
  display: inline-block;
  align-items: center;
}

.unit-img {
  height: 12em;
  /*max-width: 12em;*/
}

.unit-title {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 15em;
  margin: 1em auto;
}

.unit-title:link,
.unit-title:visited,
.unit-title:hover,
.unit-title:active,
.unit-link:link,
.unit-link:visited,
.unit-link:hover,
.unit-link:active {
  text-decoration: none;
}</style>
   