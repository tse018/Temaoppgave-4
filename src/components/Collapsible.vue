<template>
	<div class="collapsible">
		<div class="collapsible__top-container">
			<button
				@click="toggleDetails"
				:class="`collapsible__arrow fa-lg fas fa-chevron-circle-right${
					!collapsed ? 'fas fa-caret-square-down' : ' '
				}`"
			>
				<div class="collapsible__title">
					{{ title }}
				</div>
			</button>
		</div>

		<div class="collapsible__components" v-if="!collapsed">
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
		},
	},

	data() {
		return {
			collapsed: true,
		};
	},

	methods: {
		toggleDetails() {
			this.collapsed = !this.collapsed;
		},
	},
};
</script>

<style>
.collapsible {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 550px;
}

.collapsible__top-container {
	background: #efefef;
	border-radius: 2px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.collapsible__arrow {
	display: inline-block;
	padding: 0.8em 1em;
}

.collapsible__title {
	display: inline-block;
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	margin-left: 1rem;
	font-size: 1.5rem;
}

/* @media (min-width: 500px) {
	.contact {
		background: red;
	} */
</style>
