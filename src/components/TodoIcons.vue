<template>
   <!-- mounting font icons with attribue done, add and remove for emit/events -->
   <i class="todo__done-task far fa-check-circle fa-2x" v-if="font === 'done'"></i>

   <i class="todo__add-task--icon fas fa-plus fa-2x" v-else-if="font === 'add'"></i>

   <i class="todo__remove-task fas fa-minus-circle fa-2x" v-else-if="font === 'remove'"></i>
</template>

<script>
   export default {
      // props - sending font values as String to TodoItem and TodoList components
      props: {
         font: { type: String },
      }
   }
</script>

<style>

   .fa-check-circle {
      cursor: pointer;
   }

   .fa-plus {
      cursor: pointer;
   }

   .fa-minus-circle {
      cursor: pointer;
   }

</style>