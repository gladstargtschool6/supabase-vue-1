<template>
  <div class="hello">
    <h3>My Lists</h3>
    <ul>
      <li v-bind:key="list.id" v-for="list in lists">
        <router-link :to="`/list/${list.id}`" >{{((list.name)? list.name: "un-named list")}}</router-link></li>
      <li><input v-model="newListName"><button @click="newList">Add</button></li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      newListName:""
    } 
  },
  computed:{
    ...mapState(["lists"])
  },
  methods:{
    ...mapActions(['fetchLists', 'createList']),
    newList(){
      this.createList(this.newListName)
      this.newListName = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
