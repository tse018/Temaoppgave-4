<template>
   <button @click="toggleSortOrder">
      Sort: {{ sort.key }} ({{ sort.order.toUpperCase() }})
   </button>

   <table>
      <thead>
         <tr>
            <td>
               <button @click="sortBy('name')"> 
                  Name
               </button>
            </td>

            <td>
               <button @click="sortBy('year')"> 
                  Year
               </button>
            </td>

            <td>
               <button @click="sortBy('color')"> 
                  Color
               </button>
            </td>

            <td>
               <button @click="sortBy('country')"> 
                  Country
               </button>
            </td>
         </tr>
      </thead>

      <tbody>
         <tr v-for="row in naturalSort">
            <td v-for="value in row">
               {{ value }}
            </td>
         </tr>
      </tbody>
   </table>
</template>



<script>
   
   const mockData = `[{"name": "Venture", "year": 1997, "color": "Khaki", "country": "Argentina"},]`;

   export default {
      data() {
         return {
            sort: {
               key: 'name',
               order: 'asc',
            },

            content: JSON.parse(mockData),
         };
      },

      created() {
         const query = this.$route.query;

         if (query.sort) {
            this.sort.key = query.sort;
         }

         if (query.order) {
            this.sort.order = query.order;
         }
      },

      computed: {
         alphabeticalSort() {
            const key = this.sort.key;
            const orderValue = this.sort.order === 'asc' ? 1 : -1;

            function compareFunction(a, b) {
               if (a[key] > b[key]) {
                  return 1;
               } else if (a[key] < b[key]) {
                  return -1;
               } else {
                  return 0
               }
            }

            return this.content.sort((a, b) => compareFunction(a,b) * orderValue);
         },

         naturalSort() {
            const key = this.sort.key;
            const orderValue = this.sort.otder === 'asc' ? 1 : -1;

            function compareFunction(a, b) {
               a = a[key].toString();
               b = b[key].toString();

               return a.localeCompare(b, undefined, { numeric: true });
            }

            return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
         },
      },

      methods: {
         sortBy(key) {
            this.sort.key = key;
            this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
         },

         toggleSortOrder() {
            this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
            this.$route.push({ query: { ...this.$route.query, order: this.sort.order } })
         },
      },
   };
</script>


<style>
   table {
      position: absolute;
      width: 100vw;
      border-collapse: collapse;
   }


</style>