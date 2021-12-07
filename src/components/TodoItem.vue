<template>
   <!-- if task is done, then put it in task__done, 
      otherwise don´t do anything 
   -->
   <div :class="`task ${task.done ? 'task__done' : ''}`">

      <!-- emit methods gets triggered whenever user clicks on font-icon   -->
      <button @click="eventDone" class="task__button" aria-label="Done">
         <TodoIcons :font="'done'" /> 
      </button>

      <div class="task__writeTask">
      <!-- 
         :ref is added so it can be used to register what task input user write
         and returns as a object.
      -->

         <input :ref="task.id" type="text" v-model="task.text" placeholder="Add a new task" />

      </div>

      <!-- emit method gets triggered whenever user clicks on font-icon  -->

      <button @click="eventRemove" class="task__button" aria-label="Remove">
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

      // $refs document.querySelector task.id input in HTML and focus... need to ask Alejandro
      mounted() {
         this.$refs[this.task.id].focus();
      },

      /*
         emmit allows you to pass custom made events up to different components.
         Mostly been used to notify the parent component that something have changed,
         in this case we want to update todolist tasks by removing, add or update the task.
      */

      update() {
         this.$emit('update', this.task);
      },

      methods: {
         // eventDone custom made event triggers when user click on done-button, which is specified in TodoIcons component
         eventDone() {
            this.$emit('done', this.task);
         },
         // eventRemove custom made event trigger when user click on remove-button, which is specified in TodoIcons component
         eventRemove() {
            this.$emit('remove', this.task);
         },
      },
   };
</script>

<style>
</style>