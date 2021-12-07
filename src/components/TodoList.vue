<template>
   <div class="todo">
      <div class="todo__header">

         <div class="todo__title">
            {{ title }}
         </div>

         <button @click="addTask">
            <TodoIcons :font="'add'" />
         </button>
      </div>

      <div class="todo__content">
         <template v-if="tasks.length > 0 && seperatingLists">
            
            <div class="todo__items">

               <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" v-for="task in pendingTasks" :task="task" />

            </div>

            <hr class="todo__seperator" v-if="doneTasks.length > 0 && pendingTasks.length > 0" />

            <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" v-for="task in doneTasks" :task="task" />

         </template>

         <template v-else>

            <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" v-for="task in tasks" :task="task" />

         </template>
         
         <button v-if="tasks.length === 0" @click="addTask">Click to add a new task </button>
      </div>
   </div>
</template>


<script>
   import TodoIcons from '../components/TodoIcons.vue';
   import TodoItem from '../components/TodoItem.vue';

   export default {
      
      components: {
         TodoIcons,
         TodoItem,
      },

      data() {
         return {
            tasks: [],
            seperatingLists: true,
            title: "Todo list",
         };
      },

      computed: {
         pendingTasks() {
            return this.tasks.filter(task => task.done === false);
         },

         doneTasks() {
            return this.tasks.filter(task => task.done === true);
         },
      },

      methods: {
         addTask() {
            this.tasks.push({ id: this.createID(), text: '', done: false });
         },

         removeTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks.splice(taskIndex, 1);
         },

         doneTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
         },

         // 
         createID() {
            return Math.random().toString(36).slice(2);
         },
      },
   };
</script>

<style>
   .todo {
      margin: 0 auto;
      position: relative;
      width: 500px;
      height: 400px;
      border: 2px solid red;

   }

   .todo__header {
      display: flex;
   }

   .todo__content {
      overflow: scroll;
      display: flex;
   }
</style>