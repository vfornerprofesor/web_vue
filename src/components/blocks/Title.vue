<template>
  <!--
    MOSTRA EL COMPONENT H1 SI EL NÚMERO ÉS 1, H2 SI ÉS 2...
    <component :is="`h${number}`">{{ title }}</component>
  -->
  <div v-if="number == 1" class="jumbotron">
    <h1 class="display-4">{{ title }}</h1>
    <p v-if="subtitle" class="lead">{{ subtitle }}</p>
  </div>

  <div v-if="number == 2" class="block_colored block_h2">
    <h2 :class="{ 'centered-text': centered }">{{ title }}</h2>
  </div>

  <div v-if="number == 3" class="block_black block_h3">
    <h3 :class="{ 'centered-text': centered }">{{ title }}</h3>
  </div>

  <div v-if="number == 4">
    <h4 :class="{ 'centered-text': centered }">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    number: {
      type: Number,
      required: true
    },
    centered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.centered-text {
  text-align: center;
}
.jumbotron {
    background-color: var(--main-color);
    color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    text-align: center;
    border-radius: 0;
  }
</style>