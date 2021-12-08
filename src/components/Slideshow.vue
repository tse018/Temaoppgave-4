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
			
			<button @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`" class="slideshow__dot">
			</button>

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
				{ title: 'firstImage', caption: 'picture1', file: 'assets/Picture01.jpg' },
				{ title: 'secondImage', caption: 'picture2', file: 'assets/Picture02.jpg' },
				{ title: 'thirdImage', caption: 'picture3', file: 'assets/Picture03.jpg' },
				{ title: 'fourthImage', caption: 'picture4', file: 'assets/Picture04.jpg' },
				{ title: 'fifthImage', caption: 'picture5', file: 'assets/Picture05.jpg' },
				{ title: 'sixthImage', caption: 'picture6', file: 'assets/Picture06.jpg' },
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
	margin: 0 auto;
	position: relative;
	top: 1;
	max-width: 550px;
	bottom: 80px;
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
	z-index: 10;
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

.slideshow__container {
	border: 2px solid #e5e5e5;
}

.slideshow__img {
	object-fit: cover;
}

.slideshow__figcaption {
	position: absolute;
	width: 100%;
	bottom: 20;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 2rem;
	color: black;
	border: 2px inset white;
	border-right: none;
	border-left: none;
	background-color: var(--primary);
	padding: 1rem;
}
</style>
