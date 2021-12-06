<template>
	<div class="collapsible">
		<div class="collapsible__top-container">
			<button @click="toggleDetails" :class="`collapsible__arrow fas fa-chevron-circle-right${!collapsed ? 'fas fa-caret-square-down' : ' '}`"> 
			</button>

			<div class="collapsible__title">
				{{ title }}
			</div>

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
	width: 288px;
}

.collapsible__top-container {
	display: flex;
	align-items: center;
	background: #efefef;
	border-radius: 2px;
	padding: 0.5rem 1rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	margin-bottom: 1rem;
}

.collapisble__arrow {
	margin-right: 1rem;
	align-self: center;
}

.collapsible__title {
	font-weight: bold;
	margin-left: 1rem;
}
/* 

      Hard coding but works for now,
      I just want to get done with this

   */

/******* Contact form  **********/

/* .collapsible:nth-child(1) {
	position: relative;
	top: 10px;
	left: 20px;
}

.collapsible__title:nth-child(1) {
	position: relative;
	left: 50px;
	font-size: 30px;
}

.fa-chevron-circle-right:nth-child(1) {
	position: relative;
	left: 100px;
	font-size: 40px;
}

.fa-caret-square-down:nth-child(1) {
	position: relative;
	left: 100px;
	font-size: 40px;
} */

/****** Slide show *******/

/* .collapsible:nth-child(2) {
	position: absolute;
	top: 10px;
	left: 300px;
}

.collapsible__title:nth-child(2) {
	position: absolute;
	font-size: 30px;
}

.fa-chevron-circle-right:nth-child(2) {
	position: relative;
	left: 100px;
	font-size: 40px;
}

.fa-caret-square-down:nth-child(2) {
	position: relative;
	left: 100px;
	font-size: 40px;
} */

/******* Quiz ********/
/* .collapsible:nth-child(3) {
	position: absolute;
	top: 10px;
	left: 800px;
}

.collapsible__title:nth-child(3) {
	position: relative;
	left: 100px;
	font-size: 30px;
}

.fa-chevron-circle-right:nth-child(3) {
	position: relative;
	left: 100px;
	font-size: 40px;
}

.fa-caret-square-down:nth-child(3) {
	position: relative;
	left: 100px;
	font-size: 40px;
} */
</style>
