<template>
  <button>{{text}}</button>
</template>

<script>

export default {
  props:['text']
}
</script>

<style scoped>
  button{
    border:1px solid #24b47e;
    color:white;
    background-color:black;
    cursor:pointer;
    margin:0px 5px;
    border-radius: 5px;
    padding:0px 15px;
  }

  button:hover{
    background-color:#666;
  }
</style>
