<template>
   <div class="todo">
      <div class="todo__header">
         
         <div class="todo__title">
            {{ title }}
         </div>

         <!-- if font-icon is been clicked, method addTask will run -->
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

            <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" :task="task" v-for="task in doneTasks" />

         </template>

         <template v-else>

            <!-- custom made events from emit - TodoItem triggers whenever user click on
                  update, done or remove and each emit runs method functions
            -->
            <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" :task="task" v-for="task in tasks"/>

         </template>
         
         <!-- if tasks array is empty, shows this code -->
         <button v-if="tasks.length === 0" @click="addTask">
            Click to add a new task
         </button>

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
         // pendingTasks filter task array and returns a new array of undone tasks
         pendingTasks() {
            return this.tasks.filter(task => task.done === false);
         },

         // doneTasks filter task array and returns a new array of all the done tasks
         doneTasks() {
            return this.tasks.filter(task => task.done === true);
         },
      },

      methods: {
         // tasks get random id and added to the tasks array
         addTask() {
            this.tasks.push({ id: this.createTaskID(), text: '', done: false });
         },

         removeTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks.splice(taskIndex, 1);
         },

         doneTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
         },

         // makes random id, fancyyyyyy
         createTaskID() {
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