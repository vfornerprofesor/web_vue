<template>
    <div class="block_colored block_h2">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Title2Component',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

  </style>