<template>
   <RouterView />
   <ContactForm />
</template>

<script>

import ContactForm from '../components/ContactForm.vue';

   export default {
      components: {
         ContactForm
      },
   };
</script>

<style>
   @import '../style/reset.css';
   @import '../style/variables.css';
   @import '../style/style.css';
</style>