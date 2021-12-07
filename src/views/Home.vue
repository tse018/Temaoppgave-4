<template>
	<Collapsible v-model:title="titles.contact">
		<ContactForm />
	</Collapsible>

	<Collapsible v-model:title="titles.slideshow">
			<Slideshow />
		</Collapsible>

		<Collapsible v-model:title="titles.quiz">
			<Quizapp />
		</Collapsible> 
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import Slideshow from '../components/Slideshow.vue';
import SortTable from '../components/SortTable.vue';
import Quizapp from '../components/Quizapp.vue';
import TodoList from '../components/TodoList.vue';
import Collapsible from '../components/Collapsible.vue';

export default {
	components: {
		ContactForm,
		Slideshow,
		Quizapp,
		SortTable,
		TodoList,
		Collapsible,
	},

	data() {
		return {
			titles: {
				contact: 'Contact form',
				slideshow: 'Slide show',
				sorttable: 'Sort table',
				todo: 'Todo-list',
				quiz: 'Quiz',
			},
		};
	},
};
</script>
