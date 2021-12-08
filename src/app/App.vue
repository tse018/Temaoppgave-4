<template>
	
		<Header />
	<div class="wrapper">
		<RouterView />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	</div>
</template>

<script>
	import Header from '../components/Header.vue';
	
	export default {
		components: {
			Header
		}
	}
</script>

<style>
@import '../style/reset.css';
@import '../style/variables.css';
@import '../style/style.css';
</style>
