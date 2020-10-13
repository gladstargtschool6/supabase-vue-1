<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>

export default {
  props:['text']
}
</script>

<style scoped>
.card {
  background-color: #666;
  border-radius: 5px;
  padding: 10px;
}
</style>