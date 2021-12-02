<template>
   <div class="todo">
      <div class="todo__header">
         <h1 class="todo__title">
            {{ title }}
         </h1>
      </div>

      <div class="todo__main">
         <div class="todo__items">
            <div class="todo__task" v-for ="(task, index) in pendingTasks" :text="task.text" :done ="task.done" :key="task.id" />
         </div>

         <div class="todo__itemsDone">
            <div class="todo__taskDone" v-for="(task, index) in doneTasks" :text="task.text" :done="task.done" :key="task.id" />
         </div>
      </div>

      <div class="todo__footer">
         <button @click ='addTask' class="todo__addTask">
            <svg viewBox="0 0 183 183" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="91.5" cy="91.5" r="91.5" fill="#717171"/>
               <rect x="85" y="41" width="13" height="100" rx="6.5" fill="#E5E5E5"/>
               <rect x="142" y="84" width="13" height="100" rx="6.5" transform="rotate(90 142 84)" fill="#E5E5E5"/>
            </svg>
         </button>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            title: 'To Do',

            tasks: [
               { text: 'Drive to the moon',        done: false},
               { text: 'Turn up the temprature',   done: false},
               { text: 'Learn how to use vue',     done: false},
               { text: 'Consult about the future', done: false},
               { text: 'Finish tema 4 project',    done: false},
               { text: 'Buy delicious food',       done: true},
               { text: 'Drive to the moon',        done: true},
               { text: 'Drive to the moon',        done: false},         
            ],
         };
      },

      computed: {
         pendingTasks() {
            return this.tasks.filter(task => task.done === false)
         },

         doneTasks() {
            return this.tasks.filter(task => task.done === true)
         },
      },

      methods: {
         addTask(text) {
            this.tasks.push({ id: this.id(), text: this.id(), done: false });
         },

         removeTask(id) {
            const taskIndex = this.tasks.findIndex(task => task.id === id);
            this.tasks.splice(taskIndex, 1);
         },

         markTaskDone(id) {   
            const taskIndex = this.tasks.findIndex(task => task.id === id);
            this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
         },

         id() {
            return Math.random().toString(36).slice(2);
         },
      },
   };
</script>

<style>
   .todo {
      position: absolute;
      width: 20vw;
      height: 70vh;
      bottom: 20px;
      right: 10px;
      background: #EEEE;
      border: 2px solid black;
   }

   .todo__title {
      position: relative;
      top: 10px;
      left: 20px;
   }

   .todo__main {
      position: relative;
      height: 75%;
      top: 20px;
   }

   .todo__items {
      position: relative;
      height: 50px;
      width: 100%;
      border: 2px solid grey;
      border-right: none;
      border-left: none;
   }

   .todo__itemsDone {
      position: relative;
      top: 200;
      height: 50px;
      width: 100%;
      border: 2px solid grey;
      border-right: none;
      border-left: none;
   }

   .todo__footer {
      position: relative;
      bottom: 20px;
   }

   .todo__addTask {
      position: absolute;
      width: 80px;
      height: 10px;
      right: 20px;
      cursor: pointer;
   }
</style>