<template>
   <div class="table-container">
      <button class="table__sort-button" @click="toggleSortOrder">
         Click here to sort table: {{ sort.key }} ({{ sort.order.toUpperCase() }})
      </button>
      <table class="table overflow-scrollbar">
         <thead class="table__header">
            <tr class="table__list">
               <td class="table__item">
                  <button class="table__click table__item--category-header" @click="sortBy('name')">
                     Name
                  </button>
               </td>
               <td class="table__item">
                  <button class="table__item--category-header" @click="sortBy('year')">
                     Year
                  </button>
               </td>
               <td class="table__item">
                  <button class="table__item--category-header" @click="sortBy('color')">
                     Color
                  </button>
               </td>
               <td class="table__item">
                  <button class="table__item--category-header" @click="sortBy('country')">
                     Country
                  </button>
               </td>
            </tr>
         </thead>
         <tbody class="table__value">
            <tr v-for="row in naturalSort">
               <td class="table__value--item" v-for="value in row">
                  {{ value }}
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>


<script>
   
   const mockData = `[{ "name": "Venture", "year": 1997, "color": "Khaki", "country": "Argentina" }, { "name": "Xterra", "year": 2006, "color": "Puce", "country": "Czech Republic" }, { "name": "Voyager", "year": 1992, "color": "Green", "country": "Guatemala" }, { "name": "C-MAX Hybrid", "year": 2013, "color": "Maroon", "country": "Russia" }, { "name": "Sable", "year": 1986, "color": "Maroon", "country": "Poland" }, { "name": "DTS", "year": 2011, "color": "Red", "country": "China" }, { "name": "E-Class", "year": 2001, "color": "Aquamarine", "country": "China" }, { "name": "Talon", "year": 1998, "color": "Green", "country": "Indonesia" }, { "name": "G", "year": 2004, "color": "Pink", "country": "China" }, { "name": "Tracker", "year": 1994, "color": "Crimson", "country": "Russia" }, { "name": "SC", "year": 2000, "color": "Fuscia", "country": "Portugal" }, { "name": "LS", "year": 2010, "color": "Khaki", "country": "China" }, { "name": "3 Series", "year": 1997, "color": "Indigo", "country": "Philippines" }, { "name": "Town Car", "year": 2006, "color": "Pink", "country": "China" }, { "name": "TT", "year": 2008, "color": "Indigo", "country": "China" }, { "name": "Sidekick", "year": 1992, "color": "Fuscia", "country": "Guinea" }, { "name": "I", "year": 1998, "color": "Purple", "country": "Portugal" }, { "name": "Impala", "year": 2002, "color": "Puce", "country": "Indonesia" }, { "name": "B-Series", "year": 2007, "color": "Yellow", "country": "Croatia" }, { "name": "L-Series", "year": 2000, "color": "Crimson", "country": "France" }]`;

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
            const orderValue = this.sort.order === 'asc' ? 1 : -1;

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
.table-container {
   max-width: var(--component-width);
   margin: 0 auto;
}

.table__sort-button {
   padding: 1em;
   max-width: var(--component-width);
   width: 100%;
   background-color: var(--component-button-background);
   color: var(--component-button-color);
   font-weight: bold;
   border-radius: 2px;
}

.table__sort-button:hover {
   background-color: var(--component-button-hover);
   cursor: pointer;
}

.table {
   height: 80vh;
   border-collapse: collapse;
   border-radius: 2px;
   border: var(--component-border)
}

.table__item--category-header{
   font-weight: bold;
   padding: 1rem;
}

.table {
   max-width: 550px;
	border: 2px solid #e5e5e5;
   width: 100%;
}

.table__value--item {
   border-bottom: 1px solid rgba(231, 231, 231, 0.63);
   padding: 1rem
}

.table__item {
  background-color: var(--primary);
  font-weight: bold;
}

@media (max-width: 395px) {
  .table__item--category-header{
   padding: 0.5rem;
}

   .table__value--item {
      padding: 1rem 0.5rem;
   }
}

</style>