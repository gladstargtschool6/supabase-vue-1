<template>
  <div class="about">
    <h1>This is an list page {{list.name}}</h1>
    <ul>
      <li v-bind:key="task.id" v-for="task in list.tasks">
        <input type="checkbox" @click="updateStatus($event, task.id)" v-model="task.complete" >{{task.task_text}}</li>
      <li><input v-model="newTaskText"><button @click="newTask">Add</button></li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex"
export default {
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
