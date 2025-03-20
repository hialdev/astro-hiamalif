<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const works = [
  {title: 'Enterprice Resource System for Construction & Building Company - Sahara', image: '/showcase/erpsahara.webp'},
  {title: 'Human Resource Information System for Outsourcing Company - Infomedia', image: '/showcase/gojobs.webp'},
  {title: 'Super Site Company with Multiple Brands - Artisan Kuliner Group', image: '/showcase/artisan.webp'},
  {title: 'Landing Page Management for Islamic Travel and Tour', image: '/showcase/goehajj.webp'},
  {title: 'Fellowship / Schoolarship Publication and Management System', image: '/showcase/esqfellowship.webp'},
  {title: 'AI Chatbot with Sarcasm Personality - Sarcathic', image: '/showcase/sarchatic.webp'},
  {title: 'Portofolio Management System - Personal Site', image: '/showcase/portosite.webp'},
]

const carouselConfig = {
  gap: 15,
  autoplay: 4000,
  width: "content",
  pauseAutoplayOnHover: false,
  mouseWheel: true,
  wrapAround: false,
  breakpoints: {
    0: {
      itemsToShow: 1,
      height: 350,
    },
    800: {
      itemsToShow: 2,
      height: 600,
    }
  }
}
</script>
<template>
  <div class="m-3">
    <div class="p-5 md:p-13">
      <h2 class="font-handrawn text-2xl mb-2">My Works</h2>
      <div class="max-w-[25em]">All my work is a lovely journey; the more I learn, the more I realize how little I know.</div>
    </div>
    <div class="ps-3">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(work, index) in works" :key="index" class="mb-0 ">
          <div class="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img :src="work.image" :alt="work.title+' Image'" class="block w-100 w-full aspect-[16/9 !important] object-contain h-full h-100">

            <div class="absolute translate-y-[130%] group-hover:translate-y-[0%] group-active:translate-y-[0%] transition-all flex mt-auto flex-col bg-white/30 backdrop-blur-sm justify-end end-0 bottom-0 start-0 p-6 m-6 rounded-2xl border-2 border-slate-900 shadow-own"> <!-- absolute hover:bg-linear-to-b from-transparent to-slate-900 -->
              <h2 class="text-lg md:text-2xl text-slate-900 font-medium">{{ work.title }}</h2>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="p-8 rounded-2xl flex flex-col overflow-hidden bg-slate-900 text-white w-100 w-full aspect-video h-[325px] md:h-[525px]">
            <div class="font-handrawn text-2xl md:text-3xl mb-4 text-purple-400">See More My Works</div>
            <div class="font-semibold text-xl md:text-3xl">My work will be updated every week. Once I complete a project, I will update it here!</div>
            <a href="" class="mt-auto flex items-center justify-between p-2 px-4 w-100 bg-purple-400 rounded-2xl">
              <span class="font-handrawn text-2xl">Go to Works Page</span>
              <img src="/icons/arrowsprinkle.webp" alt="Go to Works Page Arrow" class="block" />
            </a>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>