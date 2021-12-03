<template>
	<div class="todo">
		<div class="todo__header">
			<h1 class="todo__title">
            {{ title }}
         </h1>
		</div>

		<div class="todo__content">
			<div class="todo__items">
				<TodoItem @done-task="doneTask" @remove-task="removeTask" v-for="task in pendingTasks" :task="task" />
			</div>


			<div class="todo__items">
				<TodoItem @done-task="doneTask" @remove-task="removeTask" v-for="task in doneTasks" :task="task" />
			</div>

         <button @click="addTask" class="todo__add-new">
				<TodoIcon :icon="'add'" />
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
            title: 'To Do',
            tasks: [],
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
         addTask() {
            this.tasks.push({ id: this.create_id(), text: this.create_id(), done: false });
         },

         removeTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks.splice(taskIndex, 1);
         },

         doneTask(task) {
            const taskIndex = this.tasks.findIndex(task_in_tasks => task_in_tasks.id === task.id);
            this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
         },

         create_id() {
            return Math.random().toString(36).slice(2);
         },
      },
   };
</script>

<style>
   .todo {
      position: relative;
      width: 40vw;
		height: 80vh;
      top: 10px;
      left: 800px;
      border: 2px solid red;
   }

   .todo__header {
      position: relative;
      height: 60px;
   }

   .todo__title {
      position: relative;
      left: 20px;
      top: 10px;
   }

   .todo__content {
      position: relative;
      border: 2px solid red;
      height: 500px;
   }

   .todo__items {
      position: relative;
      height: 20px;
   }



   
</style>