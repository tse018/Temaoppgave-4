<template>
	<RouterView />
	<ContactForm />
	<Quizapp />
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import Quizapp from '../components/Quizapp.vue';

export default {
	components: {
		ContactForm,
		Quizapp,
	},
};
</script>

<style>
@import '../style/reset.css';
@import '../style/variables.css';
@import '../style/style.css';
</style>
