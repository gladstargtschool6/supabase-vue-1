import Vue from 'vue'
import Vuex from 'vuex'
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid'

const supabase = createClient(
  process.env.VUE_APP_SUPABASE_URL,
  process.env.VUE_APP_SUPABASE_KEY
)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:{}
  },
  mutations: {
    ADD_LIST(state, newList) {
      Vue.set(state.lists, newList.id, newList);
    },
    ADD_TASK(state, args) {
      state.lists[args.listId].tasks.push(args.newTask);
    },
    UPDATE_TASK(state, args){
      for (let i in state.lists[args.listId].tasks){
        if (args.taskId == state.lists[args.listId].tasks[i].id){
          state.lists[args.listId].tasks[i].complete = args.newState
          return
        }
      }
    }
  },
  actions: {
    subscribeToListChanges({ commit }){
      const lists = supabase
      .from('lists')
      .on('INSERT', payload => {
        commit('ADD_LIST', payload.new);
      })
      .subscribe()
    },
    subscribeToTasksChanges({state, commit}, list_id){
      supabase
          .from(`tasks:list_id=eq.${list_id}`)
          .on('INSERT', (payload) => {
            commit('ADD_TASK', {newTask:payload.new, listId:list_id});
          })
          .on('UPDATE', (payload) => {
            commit('UPDATE_TASK', {listId:list_id, taskId:payload.new.id, newState:payload.new.complete})
          })
          .subscribe()
    },
    async fetchLists({ commit }){
      try {
        let { body: lists } = await supabase
          .from('lists')
          .select(`*, tasks(*)`)
        for( let i in lists){
          commit('ADD_LIST', lists[i]);
        }
      } catch (error) {
        console.log('error', error)
      }
    },
    async createList({commit}, listName){
      try {
        let { body } = await supabase.from('lists').insert([{ uuid: uuidv4(), name:listName }])
        return body[0]
      } catch (error) {
        console.log('error', error)
      }
    },
    async addTask({commit}, args){
      try {
        let { body } = await supabase.from('tasks').insert([{ task_text:args.task_text, list_id:args.list_id }])
        return body
      } catch (error) {
        console.log('error', error)
      }
    },
    async changeTaskStatus({commit}, args){
      try {
        let { body } = await supabase.from('tasks').eq('id', args.taskId).update({complete: args.checked})
        return body
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})
