<template>
  <Card>
    <h3>My Lists</h3>
    <ul>
      <li v-bind:key="list.id" v-for="list in lists">
        <router-link :to="`/list/${list.id}`" >{{((list.name)? list.name: "un-named list")}}</router-link></li>
      <li><input v-model="newListName">
        <Btn @click.native="newList" text="Add" />
      </li>
    </ul>
  </Card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Btn from "./Btn";
import Card from "./Card";

export default {
  components:{Btn, Card},
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
