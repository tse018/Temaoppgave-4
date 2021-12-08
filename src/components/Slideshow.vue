<template>
	<div class="slideshow">
		<button @click="previousImage" class="slideshow__previous">
			<i class="fas fa-arrow-left fa-3x"></i>
		</button>

		<button @click="nextImage" class="slideshow__next">
			<i class="fas fa-arrow-right fa-3x"></i>
		</button>

		<div class="slideshow__information">
			<button @click="showDetails = !showDetails" class="slideshow__information--button">
				<i class="fas fa-info fa-3x"></i>
			</button>
		</div>

		<figure class="slideshow__container">
			<img :src="currentSlide.file" :alt="currentSlide.title" class="slideshow__img" />

			<figcaption v-if="showDetails" class="slideshow__figcaption">
				{{ currentSlide.caption }}
			</figcaption>
		</figure>

		<div class="slideshow__dots">
			<button @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`" class="slideshow__dot"></button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 0,
			showDetails: false,
			slides: [
				{ title: 'Lake in the forest', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture01.jpg' },
				{ title: 'Forest tree tops', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture02.jpg' },
				{ title: 'Bulgy looking mountains with grass', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture03.jpg' },
				{ title: 'Thick green forest', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture04.jpg' },
				{ title: 'Cabin in a field of white flowers', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture05.jpg' },
				{ title: 'River beach in the forest', caption: 'Beautiful lake in the forest - Canada', file: 'assets/Picture06.jpg' },
			],
		};
	},

	computed: {
		currentSlide() {
			return this.slides[this.index];
		},
	},

	methods: {
		previousImage() {
			this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
		},

		nextImage() {
			this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
		},

		goToIndex(index) {
			this.index = index;
		},
	},
};
</script>

<style>
.slideshow {
	position: relative;
	top: 0;
	margin: 0 auto;
	max-width: var(--component-width);
	border: var(--component-border)
}

.slideshow__previous {
	position: absolute;
	top: 45%;
	left: 5%;
	color: white;
	cursor: pointer;
	opacity: 0.5;
}

.slideshow__previous:hover {
	opacity: 1;
}

.slideshow__next {
	position: absolute;
	top: 45%;
	right: 5%;
	color: white;
	cursor: pointer;
	opacity: 0.5;
}

.slideshow__next:hover {
	opacity: 1;
}

.slideshow__information {
	position: absolute;
	right: 15%;
}

.slideshow__information--button {
	position: absolute;
	left: 20px;
	top: 10px;
	color: white;
	cursor: pointer;
	opacity: 0.7;
}

.slideshow__information--button:hover {
	opacity: 1;
}

.slideshow__figcaption {
	position: absolute;
	bottom: 20;
	right: 0;
	width: 100%;
	text-align: center;
	font-size: 1rem;
	color: rgb(73, 73, 73);
	opacity: 0.9;
	background-color: var(--primary);
	padding: 1rem;
}
</style>
