<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  images: Array,
  autoplay: Number,
})

const carouselConfig = {
  dir: 'ttb',
  wrapAround: true,
  itemsToShow: 4,
  snapAlign: 'center',
  height: '500px',
  gap: 4,
  autoplay: props.autoplay,
}

</script>
<template>
  <div class="">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(image, index) in images" :key="index" class="mb-0">
        <img :src="image" :alt="'carousel Image ' + index" class="w-[7em] h-[7em] object-contain p-3 rounded-2xl bg-white aspect-square dark:bg-stone-200">
      </Slide>
    </Carousel>
  </div>
</template>
