<template>
      <div :class="`todo-item ${task.done ? 'todo-item__done' : ''}`">

      <button @click="eventDone" class="todo-item__button" aria-label="Done">
         <TodoIcons :font="'done'" /> 
      </button>

      <div class="todo-item__writeTask">
         <!-- 
            :ref is added so it can be used to register what task input user write
            and returns an object.
            won´t show up in HTML inspector, its just a Vue thing
         -->

         <input :ref="task.id" type="text" v-model="task.text" placeholder="Add a new task" />

      </div>

      <button @click="eventRemove" class="todo-item__button" aria-label="Remove">
         <TodoIcons :font="'remove'" />
      </button>

</div>
</template>

<script>
   import TodoIcons from '../components/TodoIcons.vue';

   export default {
      components: {
         TodoIcons,
      },

      // sending tasks as objects because of $refs - returns an object
      props: {
         task: { type: Object },
      },

      // $refs document.querySelector task.id and focus... need to ask Alejandro
      mounted() {
         this.$refs[this.task.id].focus();
      },

      /*
         emmit allows you to pass custom made events up to different components.
         Mostly been used to notify the parent component that something have changed,
         in this case we want to update TodoList tasks.
      */
      update() {
         this.$emit('update', this.task);
      },

      /*
         done and remove events whenever user click on buttons made in TodoIcons component
      */
      methods: {
         eventDone() {
            this.$emit('done', this.task);
         },

         eventRemove() {
            this.$emit('remove', this.task);
         },
      },
   };
</script>

<style>
   .todo-item {
      display: flex;
   }

   .todo-item__task {
      flex-grow: 2;
   }

</style>