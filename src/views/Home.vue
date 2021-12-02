<template>
	<ContactForm />
	<TodoList />
	<Quizapp />
</template>


<script>
import ContactForm from '../components/ContactForm.vue';
import Quizapp from '../components/Quizapp.vue';
import TodoList from '../components/TodoList.vue';


export default {
	components: {
		ContactForm,
		Quizapp,
		TodoList,
	},
};
</script>


<style>
</style>