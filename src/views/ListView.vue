<template>
  <Card>
    <router-link to="/" class="back">back</router-link>
    <h3>{{((list.name)? list.name: "un-named list")}}</h3>
    <ul>
      <li v-bind:key="task.id" v-for="task in list.tasks">
        <input type="checkbox" @click="updateStatus($event, task.id)" v-model="task.complete" >{{task.task_text}}</li>
      <li><input v-model="newTaskText">
      <Btn @click.native="newTask" text="Add" />
      </li>
    </ul>
  </Card>
</template>

<script>

import { mapActions, mapState } from "vuex";
import Btn from "../components/Btn";
import Card from "../components/Card";
export default {
  components:{Btn, Card},
  data:function(){
    return {
      newTaskText:""
    }
  },
  computed: {
   ...mapState(["lists"]),
   list:function(){
     if (this.$route.params.id in this.lists){
      return this.lists[this.$route.params.id]
     }else{
       return {name:"loading", tasks:[]}
     }
   }
  },
  created(){
    this.subscribeToTasksChanges(this.$route.params.id)
  },
  methods:{
    ...mapActions(['subscribeToTasksChanges', 'addTask', 'changeTaskStatus']),
    newTask(){
      this.addTask({task_text:this.newTaskText, list_id:this.list.id});
      this.newTaskText = ""
    },
    updateStatus(e, taskId){
      this.changeTaskStatus({checked:e.target.checked, taskId: taskId})
    }
  }
}
</script>