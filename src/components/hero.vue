<script setup>
import { computed } from 'vue';
import Herocarousel from './herocarousel.vue';

const imagesUrl = [
  '/icons/tools/androidstudio.png',
  '/icons/tools/axios.png',
  '/icons/tools/bootstrap.png',
  '/icons/tools/bun.png',
  '/icons/tools/capacitor.png',
  '/icons/tools/css.png',
  '/icons/tools/figma.png',
  '/icons/tools/flutter.png',
  '/icons/tools/go.png',
  '/icons/tools/html5.png',
  '/icons/tools/react.png',
  '/icons/tools/js.png',
  '/icons/tools/typescript.png',
  '/icons/tools/laravel.png',
  '/icons/tools/mongodb.png',
  '/icons/tools/mysql.png',
  '/icons/tools/nuxt.png',
  '/icons/tools/nextjs.png',
  '/icons/tools/python.png',
  '/icons/tools/redis.png',
  '/icons/tools/sqlite.png',
  '/icons/tools/tailwind.png',
  '/icons/tools/vscode.png',
  '/icons/tools/vue.png',
  '/icons/tools/svelte.png',
  '/icons/tools/lynxjs.png',
]

const chunkArray = (array, parts) => {
  let result = [];
  let size = Math.ceil(array.length / parts);
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const chunkedImages = computed(() => chunkArray(imagesUrl, 3));
console.log(chunkedImages);
</script>

<template>
  <section class="">
    <div class="p-5 md:p-13 m-3 rounded-2xl bg-slate-50 overflow-x-hidden">
      <div class="grid grid-cols-2 items-center justify-between">
        <div class="col-span-2 md:col-span-1 relative mb-8 md:mb-0">
          <div class="flex flex-col items-start">
            <h6 class="text-purple-800 font-handrawn mb-3 md:mb-5 text-xl">Let’s Know About Me</h6>
            <!-- <div class="w-[7em] animate-bouncein h-[4em] mb-3 bg-purple-100 rounded-3xl flex items-center justify-center">
              <DotLottieVue autoplay class="h-[24em] w-[20em] object-cover" src="./../../public/lottie_icons/hi.lottie" />
            </div> -->
            <h1 class="text-4xl md:text-5xl mb-0 max-w-[12em] font-semibold text-dark font-dmsans inline">Hello Mate! 👋, Welcome to My Personal Room</h1>
          </div>
          <div class="flex items-center my-8">
            <img src="/me.jpg" width="170" height="170" alt="Foto aing" class="w-[100px] h-[100px] md:w-[170px] md:h-[170px] block aspect-square rounded-full">
            <img src="/icons/arrowsprinkle.webp" alt="Arrow Sprinkle" class="block ms-[-1em] w-content">
            <div class="font-handrawn text-emerald-600 animate-wiggle text-2xl ms-[-1em] mt-[2em]">Open to Work!</div>
          </div>
          <div class="max-w-[30em] mb-5">
            Hi, I am <strong>Alif</strong>, you can call me <strong>AL</strong> because thats sounds cooler! Haha. I'm currently a <strong>Gen Z</strong> and <strong>Software Engineer</strong> with <strong>Fullstack Development</strong> ability (Front-end & Back-end) and over <strong>5 years</strong> of Experience
          </div>
          <a href="" class="inline-flex items-center gap-2 px-4 py-1 mt-4 border-2 shadow-own border-dark rounded-xl">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8.33334 8.33333C8.33334 7.44928 8.68453 6.60143 9.30965 5.97631C9.93477 5.35119 10.7826 5 11.6667 5H19.5833C19.6938 5 19.7998 5.0439 19.878 5.12204C19.9561 5.20018 20 5.30616 20 5.41667V13.3333C20 14.2174 20.3512 15.0652 20.9763 15.6904C21.6014 16.3155 22.4493 16.6667 23.3333 16.6667H31.25C31.3605 16.6667 31.4665 16.7106 31.5446 16.7887C31.6228 16.8668 31.6667 16.9728 31.6667 17.0833V31.6667C31.6667 32.5507 31.3155 33.3986 30.6904 34.0237C30.0652 34.6488 29.2174 35 28.3333 35H11.6667C10.7826 35 9.93477 34.6488 9.30965 34.0237C8.68453 33.3986 8.33334 32.5507 8.33334 31.6667V8.33333Z" fill="#7246E9" fill-opacity="0.29"/>
                <path d="M21.6667 13.3333V6.00665C21.6665 5.92413 21.6909 5.84343 21.7367 5.77477C21.7824 5.70611 21.8476 5.65259 21.9238 5.62099C22 5.58939 22.0839 5.58114 22.1648 5.59728C22.2458 5.61342 22.3201 5.65322 22.3783 5.71165L30.955 14.2883C31.0134 14.3466 31.0532 14.4209 31.0694 14.5018C31.0855 14.5827 31.0773 14.6666 31.0457 14.7429C31.0141 14.8191 30.9605 14.8842 30.8919 14.93C30.8232 14.9758 30.7425 15.0001 30.66 15H23.3333C22.8913 15 22.4674 14.8244 22.1548 14.5118C21.8423 14.1993 21.6667 13.7753 21.6667 13.3333Z" fill="black"/>
                <path d="M14.1667 22.5H24.1667M14.1667 27.5H22.5" stroke="black" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="font-handrawn text-2xl">Save my CV</div>
          </a>
        </div>

        <div class="col-span-2 md:col-span-1 mx-auto relative rotate-x-20 rotate-z-10 rounded-3xl overflow-hidden">
          <!-- <div class="flex items-center justify-center">
            <img src="" alt="" class="block aspect-square object-content">
          </div> -->
          <div class="grid grid-cols-3 gap-4 origin-center rotate-10">
            <Herocarousel v-for="(datas, index) in chunkedImages" 
              :key="index"
              :images="datas"
              :autoplay="500 + index * 250" 
            />
          </div>
          <div class="absolute top-0 end-0 start-0 bottom-0 rounded-[100px] mx-[-2.5em] my-[-1.5em] md:mx-[-3em] md:my-[-2em] bg-linear-to-t from-10% from-slate-50 via-[#FFFFFF00] to-slate-50 to-90%"></div>
        </div>
      </div>
    </div>
  </section>
</template>