<template>
   <div class="todo-item">
      <button @click="emitDone" class="todo-item__button" aria-label = "Done">
         <TodoIcons :icon="'done'" />
      </button>

      <div class="todo-list__item-task">
         {{ task.text }}
      </div>


      <button @click="emitRemove" class="todo-list__item-remove" aria-label="Remove">
         <TodoIcons :icon="'remove'" />
      </button>
   </div>
</template>

<script>

   import TodoIcons from '../components/TodoIcons.vue';

   export default {
      components: {
         TodoIcons
      },

      props: {
         task: { type: Object },
      },

      methods: {
         emitDone() {
            this.$emit('done-task', this.task);
         },

         emitRemove() {
            this.$emit('remove-task', this.task);
         },
      },
   };
</script>

<style>
</style>