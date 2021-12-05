<template>
   <div class="collapsible">
      <button @click="toggleDetails" class="collapsible__summary">
         <div :class="`collapsible__arrow ${ !collapsed ? 'collapsible__arrow--rotated' : '' }`">
            <svg viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M36 21L1.8571e-06 41.7846L3.67415e-06 0.21539L36 21Z" fill="black" />
            </svg>

            
            <div class="collapsible__title">
               {{ title }}
            </div>
            
         </div>
      </button>

      <div class="collapsible__details" v-if="!collapsed">
         <slot />
      </div>
   </div>
</template>

<script>
   export default {
      props: {
         title: {
            type: String,
            default: 'Click to read more',
         }
      },

      data() {
         return {
            collapsed: true
         };
      },

      methods: {
         toggleDetails() {
            this.collapsed = !this.collapsed
         }
      }
   };
</script>

<style>
   .collapsible {
      background: #eee;
      border-radius: 0.3em;
      display: flex;
      widows: 100vw;
      height: 10vh;
   }

   .collapsible__summary {
      flex-flow: row nowrap;
      align-items: center;
   }

   .collapsible__summary,
   .collapsible__details {
      padding: 0.5em;
   }

   .collapsible__arrow{
      padding-left: 1.7em;
      padding-top: 0;
      display: flex;
   }

   .collapsible__arrow--rotated {
      transform: rotate(90deg)
   }

</style>