<template>
   <div class="slideshow">

      <div class="slideshow__slides">
         <figure class="slideshow__slide">
            <img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
            <figcaption v-if="showCaption" class="slideshow__caption">
               {{ currentSlide.caption }}
            </figcaption>
         </figure>
      </div>

      <div class="slideshow__buttons">
         <button @click="previousImage" class="slideshow__button">Previous</button>
         <button @click="nextImage" class="slideshow__button">Next</button>
      </div>
      
   </div>
</template>

<script>
   export default {
      data() {
         return {
            index: 0,
            showCaption: false,
            slides: [
               { title: 'nature', caption: 'Nature', file: 'assets/bilde1.jpeg' },
               { title: 'nature', caption: 'Nature', file: 'assets/bilde2.jpeg' },
               { title: 'nature', caption: 'Nature', file: 'assets/bilde3.jpeg' },
            ],
         };
      },

      computed: {
         currentSlide() {
            return this.slides[this.index];
         }
      },

      methods: {
         previousImage() {
            this.index = (this.index === 0) ? this.slides.length - 1 : this.index - 1;
         },

         nextImage() {
            this.index = (this.index === this.slides.length - 1) ? 0 : this.index + 1;
         },

         goToIndex(index) {
            this.index = index;
         }
      }
   };
</script>

<style>
</style>