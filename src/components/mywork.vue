<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

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
      height: 600,
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
const categories = [
  { id: "study-case" ,title: "Study Case", description: "Provides an in-depth look at the process, including behind-the-scenes insights, analytical journey, system flow, user journey, and solution discovery." },
  { id: "ui" ,title: "UI", description: "Showcases the user interface design created for this case." },
  { id: "tech-stack" ,title: "Tech Stack", description: "Details the technologies used and the roles involved in this case." },
  { id: "live-demo" ,title: "Live Demo", description: "Experience the demo firsthand with interactive visuals and functionality." }
]
const selectedCategory = ref(null);
const getCategory = () => {
  return categories.find(item => item.id === selectedCategory.value);
}
</script>
<template>
  <div class="m-3">
    <div class="p-5 md:p-13 mb-5">
      <h2 class="font-handrawn text-2xl mb-2">My Works</h2>
      <div class="max-w-[25em]">All my work is a lovely journey; the more I learn, the more I realize how little I know.</div>
      
      <div class="mt-4">
        <div class="flex items-center gap-1 cursor-pointer">
          <div v-for="(item, index) in categories" 
              :key="item.id"
              class="group relative cursor-pointer"
              @click="selectedCategory = item.id">

            <!-- Kategori -->
            <div class="mb-2 inline-block p-1 px-2 font-handrawn text-lg bg-slate-50 hover:bg-purple-100 rounded-full whitespace-nowrap">
              {{ item.title }}
            </div>

            <!-- Tooltip Deskripsi -->
            <div v-if="item.description" 
                :class="['absolute z-[4] mt-[-0.5em] w-fit flex items-start gap-2 invisible group-hover:visible group-active:visible', index > 2 ? 'end-0 me-[1em]' : 'ms-[1em] ']">
              
              <!-- Ikon -->
              <div v-if="index <= 2">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" viewBox="0 0 33 35" fill="none">
                  <path d="M1.39527 1.3347C0.994525 2.68733 0.994525 4.19024 1.19489 5.64306C1.39527 7.14597 1.8461 8.59879 2.39712 10.0015C3.44906 12.6567 4.90174 15.1114 6.70507 17.3157C10.6123 22.0248 15.8219 25.4314 21.5325 27.5355C23.7365 28.3371 25.9406 28.9382 28.2449 29.4392C27.6938 29.0384 27.0927 28.5375 26.4916 28.0365C24.6382 26.4835 22.8349 24.7802 21.1818 22.9767C20.8813 22.626 20.9314 22.0749 21.0816 21.6742C21.1317 21.4738 21.5325 20.7724 21.833 21.1231C23.436 22.8264 25.1391 24.4796 26.9425 25.9825C27.8441 26.734 28.7458 27.4353 29.6475 28.1367C30.0983 28.4874 30.5491 28.838 31.05 29.1386C31.3005 29.339 31.551 29.4893 31.8014 29.6897C32.0018 29.7899 32.2022 30.0404 32.4025 29.9402C32.6029 29.8901 32.7031 29.9903 32.8033 30.1406C32.9536 30.341 33.0037 30.7918 33.0037 30.9421C32.9536 31.393 32.8033 31.894 32.4025 32.0944C28.7959 33.948 24.7885 34.9499 20.731 35C20.5807 35 20.4805 34.7495 20.4304 34.6493C20.3803 34.3988 20.3803 34.1483 20.4304 33.8979C20.5306 33.5973 20.731 33.0462 21.1317 33.0462C23.7866 32.9961 26.3914 32.5452 28.8961 31.6936C23.1855 30.6415 17.6252 28.6377 12.8164 25.3813C7.95739 22.0749 3.8498 17.4159 1.59564 11.9553C0.142952 8.34831 -0.558344 4.44073 0.543693 0.633343C0.643878 0.382857 0.944433 -0.218309 1.29508 0.0822745C1.69582 0.33276 1.49545 1.03412 1.39527 1.3347Z" fill="#231F20"/>
                </svg>
              </div>

              <div v-if="index > 2">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" viewBox="0 0 33 35" fill="none">
                  <path d="M31.6121 1.3347C32.0128 2.68733 32.0128 4.19024 31.8124 5.64306C31.6121 7.14597 31.1612 8.59879 30.6102 10.0015C29.5583 12.6567 28.1056 15.1114 26.3023 17.3157C22.395 22.0248 17.1854 25.4314 11.4749 27.5355C9.27079 28.3371 7.06671 28.9382 4.76246 29.4392C5.31347 29.0384 5.91458 28.5375 6.51569 28.0365C8.36912 26.4835 10.1725 24.7802 11.8255 22.9767C12.1261 22.626 12.076 22.0749 11.9257 21.6742C11.8756 21.4738 11.4749 20.7724 11.1743 21.1231C9.57134 22.8264 7.86819 24.4796 6.06486 25.9825C5.1632 26.734 4.26153 27.4353 3.35987 28.1367C2.90904 28.4874 2.4582 28.838 1.95727 29.1386C1.70681 29.339 1.45635 29.4893 1.20589 29.6897C1.00552 29.7899 0.80515 30.0404 0.60478 29.9402C0.404409 29.8901 0.304219 29.9903 0.204034 30.1406C0.0537566 30.341 0.00366346 30.7918 0.00366346 30.9421C0.053756 31.393 0.204039 31.894 0.60478 32.0944C4.21144 33.948 8.21884 34.9499 12.2763 35C12.4266 35 12.5268 34.7495 12.5769 34.6493C12.627 34.3988 12.627 34.1483 12.5769 33.8979C12.4767 33.5973 12.2763 33.0462 11.8756 33.0462C9.22069 32.9961 6.61588 32.5452 4.11126 31.6936C9.8218 30.6415 15.3821 28.6377 20.191 25.3813C25.0499 22.0749 29.1575 17.4159 31.4117 11.9553C32.8644 8.34831 33.5657 4.44073 32.4636 0.633343C32.3634 0.382857 32.0629 -0.218309 31.7122 0.0822745C31.3115 0.33276 31.5119 1.03412 31.6121 1.3347Z" fill="#231F20"/>
                </svg>
              </div>

              <!-- Teks Deskripsi -->
              <div :class="['w-full min-w-[15em] mt-3 text-slate-900 rounded-2xl text-sm p-4 bg-slate-50 border border-slate-900', index > 2 ? 'order-first' : '']">
                {{ item.description }}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
    <div class="">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(work, index) in works" :key="index" class="">
          <div class="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
            <img :src="work.image" :alt="work.title+' Image'" class="block w-100 w-full object-cover h-full h-100">

            <div class="absolute md:translate-y-[190%] translate-y-[0%] md:group-hover:translate-y-[0%] md:group-active:translate-y-[0%] transition-all flex mt-auto flex-col bg-white/30 backdrop-blur-sm justify-end end-0 bottom-0 start-0 p-6 m-6 rounded-2xl border-2 border-slate-900 shadow-own"> <!-- absolute hover:bg-linear-to-b from-transparent to-slate-900 -->
              <div class="flex items-start gap-2 mt-[-3.8em] md:mt-[-4.5em] ms-[-1em]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="65" class="w-[34px] h-[55px] md:w-[44px] md:h-[65px]" viewBox="0 0 74 95" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.1727 20.5074C54.6766 19.2613 47.9777 20.3277 42.7317 22.7027C33.9739 26.6636 29.3177 34.1907 27.0407 39.9407C36.0016 38.3938 43.5057 43.6985 46.2007 50.0697C48.478 55.4525 47.5601 61.5697 41.7437 65.5697C32.064 72.2299 20.2557 63.9447 18.9237 51.1987C16.4198 53.562 13.912 56.812 11.5096 61.1323C5.13464 72.6013 6.24014 88.5663 6.39244 90.9843C6.50572 92.707 5.19714 94.1913 3.47444 94.3046C1.75174 94.414 0.267439 93.1054 0.154139 91.3866C-0.0177411 88.6874 -1.07246 70.8986 6.04474 58.0976C10.3377 50.3788 15.0369 45.5626 19.5837 42.8086C21.3064 36.0586 26.7478 23.0816 40.1497 17.0156C45.2356 14.7109 51.4857 13.3789 59.1417 13.8203C56.2433 11.9961 52.4269 9.43753 47.1417 5.66803C45.7394 4.66803 45.4112 2.71493 46.4152 1.30863C47.4152 -0.0936686 49.3683 -0.421869 50.7746 0.582071C65.4936 11.0741 68.5126 11.9181 72.3406 14.0391C73.1765 14.5 73.7547 15.3203 73.9109 16.2618C74.0671 17.2032 73.7859 18.1602 73.1453 18.8712C67.2859 25.3556 66.7078 24.9571 61.9423 35.0082C61.204 36.5629 59.3407 37.2309 57.7782 36.4926C56.2235 35.7543 55.5555 33.891 56.2938 32.3285C59.5321 25.4926 60.9891 23.0746 63.1727 20.5165L63.1727 20.5074ZM25.1377 47.0274C24.5284 53.0782 27.0986 58.4414 30.9307 60.7074C33.126 62.0082 35.751 62.1058 38.2041 60.4184C42.2822 57.6137 41.501 52.809 38.5557 49.6064C35.5479 46.3369 30.6182 44.7666 25.1417 47.0244L25.1377 47.0274Z" fill="black"/>
                  </svg>
                </div>
                <div class="font-handrawn flex items-center gap-1 text-sm md:text-lg">
                  <span class="p-1 px-2 bg-purple-100 rounded-full whitespace-nowrap">Study Case</span>
                  <span class="p-1 px-2 bg-purple-100 rounded-full whitespace-nowrap">UI</span>
                  <span class="p-1 px-2 bg-purple-100 rounded-full whitespace-nowrap">Techstack</span>
                  <span class="p-1 px-2 bg-purple-100 rounded-full whitespace-nowrap">Live Demo</span>
                </div>
              </div>
              <h2 class="text-lg md:text-xl text-slate-900 font-bold">{{ work.title }}</h2>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="p-8 rounded-2xl flex flex-col overflow-hidden bg-slate-900 text-white w-100 w-full h-full">
            <div class="font-handrawn text-2xl md:text-3xl mb-4 text-purple-400">See More My Works</div>
            <div class="font-semibold text-xl md:text-3xl">My work will be updated every week. Once I complete a project, I will update it here!</div>
            <a href="" class="mt-auto flex items-center justify-between p-3 px-4 w-full bg-purple-400 rounded-2xl">
              <span class="font-handrawn text-2xl">Go to Works Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="76" height="16" viewBox="0 0 106 46" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M92.348 19.9379H47.5437C44.9 19.9379 6.35712 18.8383 2.87852 19.8005C0.791359 20.2128 -0.739224 22.5495 0.373927 25.0236C1.62622 28.0476 10.5314 27.0854 15.958 27.0854C30.429 27.0854 44.9 27.6352 59.6492 27.6352L93.1829 27.3603C90.4 32.5835 77.8771 41.1054 83.582 45.0915C87.0606 47.7031 89.0086 43.9919 90.2609 42.6174C95.2701 36.9819 99.3052 32.0337 103.897 26.1233C109.463 18.8383 103.34 19.5256 93.0438 10.4538C91.0957 8.66694 83.4428 0.832224 82.4688 0.41987C79.6859 -0.954642 76.9031 1.24458 77.1814 4.13105C77.4596 7.70479 91.6523 18.5634 92.348 19.9379Z" fill="black"/>
              </svg>
            </a>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>