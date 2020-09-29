<template>
  <div id="app">
    <div class="logos">
      <img src="./assets/logo.png">
      <img src="./assets/supabase.png">
      <img src="./assets/swimm.png">
    </div>
    <router-view/>
  </div>
</template>
<script>

import { mapActions, mapState } from "vuex"
export default {
  created(){
    this.fetchLists()
    this.subscribeToListChanges()
  },
  methods:{
    ...mapActions(['fetchLists', 'subscribeToListChanges']),
  }
}
</script>

<style>

body, html{
  background-color:#2a2a2a;
  color:white;
  margin: 0;
}

a{
  color:white;
  text-decoration: none;
}

ul{
  list-style: none;
  padding:0;
}

li:last-child{
  margin-top:10px;
}


#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logos{
  position:absolute;
  top:20px;
  left:20px;
  
}

.logos img{
  height:30px;
  vertical-align: middle;
}
</style>
