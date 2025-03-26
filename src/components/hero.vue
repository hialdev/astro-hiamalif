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
  '/icons/tools/astro.png',
  '/icons/tools/python.png',
  '/icons/tools/redis.png',
  '/icons/tools/sqlite.png',
  '/icons/tools/postgre.png',
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
    <div class="p-5 md:p-13 m-3 rounded-2xl bg-slate-50 dark:bg-zinc-800 overflow-x-hidden">
      <div class="grid grid-cols-2 items-center justify-between">
        <div class="col-span-2 md:col-span-1 relative mb-8 md:mb-0">
          <div class="flex flex-col items-start">
            <h6 class="text-purple-800 dark:text-purple-400 font-handrawn mb-3 md:mb-5 text-xl">Let’s Know About Me</h6>
            <!-- <div class="w-[7em] animate-bouncein h-[4em] mb-3 bg-purple-100 rounded-3xl flex items-center justify-center">
              <DotLottieVue autoplay class="h-[24em] w-[20em] object-cover" src="./../../public/lottie_icons/hi.lottie" />
            </div> -->
            <h1 class="text-4xl md:text-5xl mb-0 max-w-[12em] font-semibold font-dmsans inline">Hello, Mate! 👋 Welcome to My Personal Space</h1>
          </div>
          <div class="flex items-center my-8">
            <img src="/me.jpg" width="170" height="170" alt="Foto aing" class="w-[100px] h-[100px] md:w-[170px] md:h-[170px] block aspect-square rounded-full">
            <img src="/icons/arrowsprinkle.webp" alt="Arrow Sprinkle" class="block ms-[-1em] w-content dark:invert">
            <div class="font-handrawn text-emerald-600 animate-wiggle text-2xl ms-[-1em] mt-[2em]">Open to Work!</div>
          </div>
          <div class="max-w-[30em] mb-5">
            Hi, I am <strong>Alif</strong>, you can call me <strong>AL</strong> because thats sounds cooler! Haha. I'm currently a <strong>Software Engineer</strong> with <strong>Fullstack Development</strong> ability (Front-end & Back-end) and over <strong>5 years</strong> of Experience
          </div>
          <a href="https://drive.google.com/file/d/11A6DeZu6x_gnYaLrVuLXGG2OpAKzwNHs/view?usp=sharing" target="_blank"  class="inline-flex items-center gap-2 px-4 py-1 mt-4 border-2 shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#f1f1f1] border-dark rounded-xl">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                <path d="M8.83334 8.33333C8.83334 7.58189 9.13185 6.86122 9.6632 6.32986C10.1946 5.79851 10.9152 5.5 11.6667 5.5H19.5V13.3333C19.5 14.35 19.9039 15.325 20.6228 16.0439C21.3417 16.7628 22.3167 17.1667 23.3333 17.1667H31.1667V31.6667C31.1667 32.4181 30.8682 33.1388 30.3368 33.6701C29.8055 34.2015 29.0848 34.5 28.3333 34.5H11.6667C10.9152 34.5 10.1946 34.2015 9.6632 33.6701C9.13185 33.1388 8.83334 32.4181 8.83334 31.6667V8.33333Z" fill="url(#paint0_linear_5_1037)" stroke="black"/>
                <path d="M21.6667 13.3333V6.00665C21.6665 5.92413 21.6909 5.84343 21.7367 5.77477C21.7824 5.70611 21.8476 5.65259 21.9238 5.62099C22 5.58939 22.0839 5.58114 22.1648 5.59728C22.2458 5.61342 22.3201 5.65322 22.3783 5.71165L30.955 14.2883C31.0134 14.3466 31.0532 14.4209 31.0694 14.5018C31.0855 14.5827 31.0773 14.6666 31.0457 14.7429C31.0141 14.8191 30.9605 14.8842 30.8919 14.93C30.8232 14.9758 30.7425 15.0001 30.66 15H23.3333C22.8913 15 22.4674 14.8244 22.1548 14.5118C21.8423 14.1993 21.6667 13.7753 21.6667 13.3333Z" fill="black"/>
                <path d="M14.1667 22.5H24.1667M14.1667 27.5H22.5" stroke="black" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_5_1037" x1="25" y1="13" x2="1" y2="50.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EFE7FF"/>
                    <stop offset="1" stop-color="#5926BF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="font-handrawn text-2xl">Save my CV</div>
          </a>
        </div>

        <div class="col-span-2 md:col-span-1 md:px-12 mx-auto relative rotate-x-20 rotate-z-5 rounded-3xl overflow-hidden">
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
          <div class="absolute top-0 end-0 start-0 bottom-0 rounded-[100px] mx-[-2.5em] my-[-1.5em] md:mx-[-3em] md:my-[-2em] bg-linear-to-t from-10% from-slate-50 dark:from-zinc-800 via-[#FFFFFF00] dark:via-[#21212100] to-slate-50 dark:to-zinc-800 to-90%"></div>
        </div>
      </div>
    </div>
  </section>
</template>