<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<template>
  <div class="fixed end-0 bottom-0 m-5 z-[9999]">
    <div class="flex items-center jsustify-center">
      <div class="group flex items-center justify-center cursor-pointer relative">
        <div class="hidden group-hover:flex items-start gap-2 absolute bottom-0 start-0 ms-[-4.4em] mb-[3.8em]">
          <div class="font-handrawn text-2xl whitespace-nowrap">Chat Me!</div>
          <img src="/icons/arrowskectch.webp" alt="Arrow Sketch Home Menu" class="block">
        </div>

        <div class="group-hover:hidden absolute top-0 end-0 start-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
            <path d="M6.30005 31.7625C6.30005 25.0094 8.9827 18.5329 13.7578 13.7578C18.533 8.98264 25.0095 6.29999 31.7626 6.29999C38.5156 6.29999 44.9921 8.98264 49.7673 13.7578C54.5424 18.5329 57.2251 25.0094 57.2251 31.7625V52.9823C57.2251 53.969 57.2251 54.4623 57.1169 54.8666C56.9722 55.4061 56.6882 55.8981 56.2932 56.2931C55.8982 56.6881 55.4062 56.9722 54.8666 57.1168C54.4624 57.225 53.9691 57.225 52.9824 57.225H31.7626C25.0095 57.225 18.533 54.5424 13.7578 49.7672C8.9827 44.9921 6.30005 38.5156 6.30005 31.7625Z" fill="#EFE7FF"/>
            <path d="M20.6227 26.9882H42.9024ZM20.6227 36.5367H36.5368Z" fill="#EFE7FF"/>
            <path d="M20.6227 26.9882H42.9024M20.6227 36.5367H36.5368" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="invisible group-hover:visible">
          <DotLottieVue 
            loop 
            :play-on-hover="true"
            style="height: 63px; width: 63px"
            src="./../../public/lottie_icons/chat.lottie"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>