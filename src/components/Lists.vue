<template>
  <div class="hello">
    <h3>My Lists</h3>
    <ul>
      <li v-bind:key="list.id" v-for="list in lists">
        <router-link :to="`/list/${list.id}`" >{{((list.name)? list.name: "un-named list")}}</router-link></li>
      <li><input v-model="newListName">
        <Btn @click.native="newList" text="Add" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Btn from "./Btn"
export default {
  components:{Btn},
  data: function(){
    return {
      newListName:""
    } 
  },
  computed:{
    ...mapState(["lists"])
  },
  methods:{
    ...mapActions(['createList']),
    newList(){
      this.createList(this.newListName);
      this.newListName = "";
    }
  }
}
</script>