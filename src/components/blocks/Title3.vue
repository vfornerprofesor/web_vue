<template>
  <div class="block_black block_h3">
      <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
name: 'Title3Component',
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