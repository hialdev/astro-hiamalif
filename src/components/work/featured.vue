<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const featuredWorks = [
  {title: 'Enterprice Resource System for Construction & Building Company - Sahara', image: '/showcase/erpsahara.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'Human Resource Information System for Outsourcing Company - Infomedia', image: '/showcase/gojobs.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'Super Site Company with Multiple Brands - Artisan Kuliner Group', image: '/showcase/artisan.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'Landing Page Management for Islamic Travel and Tour', image: '/showcase/goehajj.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'Fellowship / Schoolarship Publication and Management System', image: '/showcase/esqfellowship.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'AI Chatbot with Sarcasm Personality - Sarcathic', image: '/showcase/sarchatic.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
  {title: 'Portofolio Management System - Personal Site', image: '/showcase/portosite.webp',
        tags: [
          {id:1, name: 'Study Case'},
          {id:2, name: 'UI'},
          {id:3, name: 'Techstack'},
          {id:4, name: 'Live Demo'},
  ]},
]

const carouselConfig = {
  gap: 15,
  autoplay: 4000,
  pauseAutoplayOnHover: false,
  mouseWheel: false,
  wrapAround: true,
  breakpoints: {
    0: {
      itemsToShow: 1,
      height: 500,
    },
    700: {
      itemsToShow: 1,
      height: 500,
    },
    800: {
      itemsToShow: 2,
      height: 550,
    }
  }
}
</script>

<template>
  <section class="m-3 rounded-2xl">
    <div class="">
      <Carousel v-bind="carouselConfig" class="">
        <Slide v-for="(fwork, index) in featuredWorks" :key="index" class="rounded-2xl overflow-hidden">
          <div class="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
            <img :src="fwork.image" :alt="fwork.title+' Image'" class="block w-100 w-full object-cover h-full h-100">

            <div class="absolute md:translate-y-[190%] translate-y-[0%] md:group-hover:translate-y-[0%] md:group-active:translate-y-[0%] transition-all flex mt-auto flex-col bg-white/30 backdrop-blur-sm justify-end end-0 bottom-0 start-0 p-6 m-6 rounded-2xl border-2 border-slate-900 shadow-own"> <!-- absolute hover:bg-linear-to-b from-transparent to-slate-900 -->
              <div class="flex items-start gap-2 mt-[-3.8em] md:mt-[-4.5em] ms-[-1em]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="65" class="w-[34px] h-[55px] md:w-[44px] md:h-[65px]" viewBox="0 0 74 95" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.1727 20.5074C54.6766 19.2613 47.9777 20.3277 42.7317 22.7027C33.9739 26.6636 29.3177 34.1907 27.0407 39.9407C36.0016 38.3938 43.5057 43.6985 46.2007 50.0697C48.478 55.4525 47.5601 61.5697 41.7437 65.5697C32.064 72.2299 20.2557 63.9447 18.9237 51.1987C16.4198 53.562 13.912 56.812 11.5096 61.1323C5.13464 72.6013 6.24014 88.5663 6.39244 90.9843C6.50572 92.707 5.19714 94.1913 3.47444 94.3046C1.75174 94.414 0.267439 93.1054 0.154139 91.3866C-0.0177411 88.6874 -1.07246 70.8986 6.04474 58.0976C10.3377 50.3788 15.0369 45.5626 19.5837 42.8086C21.3064 36.0586 26.7478 23.0816 40.1497 17.0156C45.2356 14.7109 51.4857 13.3789 59.1417 13.8203C56.2433 11.9961 52.4269 9.43753 47.1417 5.66803C45.7394 4.66803 45.4112 2.71493 46.4152 1.30863C47.4152 -0.0936686 49.3683 -0.421869 50.7746 0.582071C65.4936 11.0741 68.5126 11.9181 72.3406 14.0391C73.1765 14.5 73.7547 15.3203 73.9109 16.2618C74.0671 17.2032 73.7859 18.1602 73.1453 18.8712C67.2859 25.3556 66.7078 24.9571 61.9423 35.0082C61.204 36.5629 59.3407 37.2309 57.7782 36.4926C56.2235 35.7543 55.5555 33.891 56.2938 32.3285C59.5321 25.4926 60.9891 23.0746 63.1727 20.5165L63.1727 20.5074ZM25.1377 47.0274C24.5284 53.0782 27.0986 58.4414 30.9307 60.7074C33.126 62.0082 35.751 62.1058 38.2041 60.4184C42.2822 57.6137 41.501 52.809 38.5557 49.6064C35.5479 46.3369 30.6182 44.7666 25.1417 47.0244L25.1377 47.0274Z" fill="black"/>
                  </svg>
                </div>
                <div class="font-handrawn flex items-center gap-1 text-sm md:text-lg">
                  <span v-for="tag in fwork.tags" :key="tag.id" class="p-1 px-2 bg-gradient-to-r from-indigo-200 via-slate-100 to-purple-200 rounded-full whitespace-nowrap">{{ tag.name }}</span>
                </div>
              </div>
              <h2 class="text-lg md:text-xl text-slate-900 font-bold">{{ fwork.title }}</h2>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>