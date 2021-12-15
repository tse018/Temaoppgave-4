<template>
   <div class="todo">
      <p @click="addTask" class="todo__empty-tasks" v-if="this.tasks.length === 0"> Your Tasks Are Empty, Click To Add New Task</p>

      <div class="todo__content ">

            <template v-if="tasks.length > 0 && seperatingLists">
               <div class="todo__items-container">
                  <div class="todo__items">
                     <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" v-for="task in pendingTasks" :task="task" />
                  </div>
                </div>
               <!-- <hr class="todo__seperator" v-if="doneTasks.length > 0 && pendingTasks.length > 0" /> -->
               <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" :task="task" v-for="task in doneTasks" />
            </template>
     

         <template v-else>
            <!-- custom made events from emit - TodoItem triggers whenever user click on
                  update, done or remove and each emit runs method functions -->
            <TodoItem @update="updateTask" @done="doneTask" @remove="removeTask" :task="task" v-for="task in tasks"/>
         </template>
         
         <!-- if tasks array is empty, shows this code -->
         <!-- <button v-if="tasks.length === 0" @click="addTask">
            Click to add a new task
         </button> -->
      </div>
      
      <!-- if font-icon is been clicked, method addTask will run -->
      <div class="todo__add-task-container">
               <button class="todo__add-task" @click="addTask">
                  <div class="todo__add-task--items-container">
                     <TodoIcons :font="'add'" />
                    Add Task
                  </div>
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
      position: relative;
      margin: 0 auto;
      max-width: var(--component-width);
      min-height: 400px;
      border: var(--component-border);
      background-color: var(--primary);
   }

   .todo__empty-tasks {
      font-size: 2rem;
      color: rgb(134, 134, 134);
      padding: 20% 5%;
   }

   .todo__add-task {
      position: absolute;
      bottom: 0;
      background-color: black;
      color: #E5E5E5;
      padding: 0.6rem;
      width: 100%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 4px 4px rgba(202, 202, 202, 0.1);
      margin-bottom: 1rem;
   }

   .todo__add-task--items-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
      font-weight: bold;
   }

   .todo__add-task:hover {
      cursor: pointer;
      background-color: rgb(59, 59, 59);
   }

   .todo__add-task--icon {
      position: absolute;
      left: 1rem;
   }

   .task {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      width: 100%;
      background-color: var(--primary);
      border-bottom: 1px solid rgba(0, 0, 0, 0.151);
   }

   .todo__left-task-container {
      display: flex;
      align-items: center;
   }

   .todo__input {
      border: none;
      width: 100%;
      background-color: var(--primary);
      outline: none;
      margin-left: 1rem;
   }

   .todo__done-task {
      color: rgb(44, 44, 44);
   }

   .todo__done-task:hover {
      color: rgb(117, 117, 117);
   }

   .todo__remove-task {
       align-self: flex-end;
       color: rgb(51, 51, 51);
    }

    .todo__remove-task:hover {
       color: rgb(117, 117, 117);
    }
   
   .todo__items-container {
      border-bottom: 2px solid black;
      margin-bottom: 1rem;
   }
      
   .task:focus-within {
         border-radius: 2px;
   }


   .task__done input{
     text-decoration: line-through;
     color: rgb(124, 124, 124);
   }
</style>