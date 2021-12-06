<template>
	<div class="slideshow">
		<button @click="previousImage" class="slideshow__previous">
			<i class="fas fa-arrow-left fa-4x"></i>
		</button>

		<button @click="nextImage" class="slideshow__next">
			<i class="fas fa-arrow-right fa-4x"></i>
		</button>

		<div class="slideshow__information">
			<button
				@click="showDetails = !showDetails"
				class="slideshow__information--button"
			>
				<i class="fas fa-info fa-4x"></i>
			</button>
		</div>

		<figure class="slideshow__container">
			<img
				:src="currentSlide.file"
				:alt="currentSlide.title"
				class="slideshow__img"
			/>

			<figcaption v-if="showDetails" class="slideshow__figcaption">
				{{ currentSlide.caption }}
			</figcaption>
		</figure>

		<div class="slideshow__dots">
			<button
				@click="goToIndex(index)"
				v-for="(slide, index) in slides"
				:aria-label="`Go to image ${index + 1}`"
				class="slideshow__dot"
			></button>
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
				{ title: 'firstImage', caption: 'bilde1', file: 'assets/bilde1.jpeg' },
				{ title: 'secondImage', caption: 'bilde2', file: 'assets/bilde2.jpeg' },
				{ title: 'thirdImage', caption: 'bilde3', file: 'assets/bilde3.jpeg' },
				{ title: 'fourthImage', caption: 'bilde4', file: 'assets/bilde4.jpeg' },
				{ title: 'fifthImage', caption: 'bilde5', file: 'assets/bilde5.jpeg' },
				{ title: 'sixthImage', caption: 'bilde6', file: 'assets/bilde6.jpeg' },
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
	top: 10;
	width: 500px;
	bottom: 80px;
}

.slideshow__previous {
	position: absolute;
	top: 200px;
	left: 10;
	color: white;
	cursor: pointer;
}

.slideshow__next {
	position: absolute;
	top: 200px;
	left: 430px;
	color: white;
	cursor: pointer;
}

.slideshow__information {
	position: absolute;
	z-index: 100;
}

.slideshow__information--button {
	position: absolute;
	left: 20px;
	top: 10px;
	color: white;
	cursor: pointer;
}

.slideshow__container {
	height: 640px;
	width: 500px;
}

.slideshow__img {
	object-fit: fill;
	width: 100%;
	height: 100%;
}

.slideshow__figcaption {
	position: absolute;
	width: 100%;
	bottom: 20;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 40px;
	color: white;
	border: 2px inset white;
	border-right: none;
	border-left: none;
}
</style>
