<template>
    <div class="jumbotron">
        <h1 class="display-4">{{ title }}</h1>
        <p v-if="subtitle" class="lead">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style>
  .jumbotron {
    background-color: var(--main-color);
    color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    text-align: center;
    border-radius: 0;
  }
  </style>