<template>
	<header class="header">
		<div class="header__container">
			<div class="header__logo">#Logo</div>
			<nav class="nav">
				<img class="nav__hamburger-menu" v-bind:class="{ toggle: !toggle }" @click="hamburgerOnClick" src="../../assets/hamburger-menu.svg" alt="" />

				<img class="nav__hamburger-close" v-bind:class="{ toggle: toggle }" @click="hamburgerOnClick" src="../../assets/hamburger-close.svg" alt="" />
				
				<ul
					@click="hamburgerOnClick"
					class="nav__links-container"
					v-bind:class="{ toggle: toggle }"
				>
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li>
						<router-link to="/contactform">Contact form</router-link>
					</li>
					<li>
						<router-link to="/quizapp">Quiz app</router-link>
					</li>
					<li>
						<router-link to="slideshow">Slideshow</router-link>
					</li>
					<li>
						<router-link to="sorttable">Sort table</router-link>
					</li>
					<li>
						<router-link to="/todolist">Todo list</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			toggle: true,
			isTrue: true,
			isFalse: false,
		};
	},
	methods: {
		hamburgerOnClick() {
			if (this.toggle) {
				this.toggle = this.isFalse;
			} else {
				this.toggle = this.isTrue;
			}

			console.log(this.toggle);
		},
	},
};
</script>

<style>
.header {
	background-color: var(--primary);
	padding: 1rem;
	margin-bottom: 4rem;
}

.header__container {
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header__logo {
	font-weight: bold;
}

/* Hamburger menu icons */
.nav__hamburger-menu {
	display: none;
}

.nav__hamburger-close {
	display: none;
	width: 44px;
}

.nav__links-container {
	display: flex;
	gap: 1rem;
	justify-content: center;
}

a {
	color: black;
	font-weight: bold;
	text-decoration: none;
}
a:hover {
	color: #7a7a7a;
	text-decoration: underline;
}

@media (max-width: 660px) {
	.nav__hamburger-menu {
		width: 44px;
	}
	.nav__links-container {
		position: absolute;
		z-index: 900;
		top: 75;
		left: 0;
		padding: 1rem 0 0 0;
		background-color: var(--primary);
		width: 100%;
		height: 100vh;
		display: none;
		text-align: center;
	}

	.nav__links-container li + li {
		margin-top: 1rem;
	}

	.nav__hamburger-menu {
		display: none;
	}

	.nav__hamburger-close {
		display: none;
	}

	.toggle {
		display: block;
	}
}
</style>
