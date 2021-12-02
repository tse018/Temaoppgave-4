<template>
	<ContactForm />
	<Slideshow />
	<TodoList />
	<Quizapp />
	<SortTable />
</template>


<script>
import ContactForm from '../components/ContactForm.vue';
import Slideshow from '../components/Slideshow.vue';
import SortTable from '../components/SortTable.vue';
import Quizapp from '../components/Quizapp.vue';
import TodoList from '../components/TodoList.vue';


export default {
	components: {
		ContactForm,
		Slideshow,
		Quizapp,
		SortTable,
		TodoList,
	},
};
</script>


<style>


</style>