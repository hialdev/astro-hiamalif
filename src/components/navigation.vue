<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

</script>

<template>
  <header class="fixed bottom-0 start-0 end-0 z-[9999] max-w-[fit-content] mx-auto flex jusitfy-center">
    <div class="inline-flex mx-auto justify-center items-center gap-4 m-5 p-4 bg-white rounded-2xl shadow-2xl">
      <div class="group flex items-center justify-center cursor-pointer relative">
        <div class="hidden group-hover:flex group-active:flex items-start gap-2 absolute bottom-0 end-0 ms-[-4.4em] mb-[2.3em]">
          <div class="font-handrawn text-2xl">Home</div>
          <img src="/icons/arrowskectch.webp" alt="Arrow Sketch Home Menu" class="block">
        </div>

        <div class="group-hover:hidden group-active:hidden absolute top-0 end-0 start-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path d="M3.33331 20.34C3.33331 16.525 3.33331 14.6183 4.19998 13.0383C5.06331 11.4566 6.64498 10.4766 9.80665 8.51331L13.14 6.44498C16.4816 4.36998 18.1533 3.33331 20 3.33331C21.8466 3.33331 23.5166 4.36998 26.86 6.44498L30.1933 8.51331C33.355 10.4766 34.9366 11.4566 35.8016 13.0383C36.6666 14.62 36.6666 16.525 36.6666 20.3383V22.875C36.6666 29.375 36.6666 32.6266 34.7133 34.6466C32.76 36.6666 29.6183 36.6666 23.3333 36.6666H16.6666C10.3816 36.6666 7.23831 36.6666 5.28665 34.6466C3.33498 32.6266 3.33331 29.3766 3.33331 22.875V20.34Z" fill="#EFE7FF"/>
            <path d="M18.75 30C18.75 30.3315 18.8817 30.6495 19.1161 30.8839C19.3505 31.1183 19.6685 31.25 20 31.25C20.3315 31.25 20.6495 31.1183 20.8839 30.8839C21.1183 30.6495 21.25 30.3315 21.25 30V25C21.25 24.6685 21.1183 24.3505 20.8839 24.1161C20.6495 23.8817 20.3315 23.75 20 23.75C19.6685 23.75 19.3505 23.8817 19.1161 24.1161C18.8817 24.3505 18.75 24.6685 18.75 25V30Z" fill="black"/>
          </svg>
        </div>
        <div class="invisible group-hover:visible group-active:visible">
          <DotLottieVue 
            loop 
            style="height: 30px; width: 30px"
            src="/lottie_icons/home.lottie"
            :play-on-hover="true"
          />
        </div>
      </div>
      <div class="group flex items-center justify-center cursor-pointer relative">

        <div class="hidden group-hover:flex group-active:flex items-start gap-2 absolute bottom-0 start-0 ms-[-6.4em] mb-[2.6em]">
          <div class="font-handrawn text-2xl whitespace-nowrap">My Works</div>
          <img src="/icons/arrowskectch.webp" alt="Arrow Sketch Home Menu" class="block">
        </div>

        <div class="group-hover:hidden group-active:hidden absolute top-0 end-0 start-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path d="M35 36.6666H26.6667V3.33331H35C35.442 3.33331 35.866 3.50891 36.1785 3.82147C36.4911 4.13403 36.6667 4.55795 36.6667 4.99998V35C36.6667 35.442 36.4911 35.8659 36.1785 36.1785C35.866 36.4911 35.442 36.6666 35 36.6666Z" fill="black"/>
            <path d="M23.3333 36.6666H4.99998C4.55795 36.6666 4.13403 36.4911 3.82147 36.1785C3.50891 35.8659 3.33331 35.442 3.33331 35V21.6666H23.3333V36.6666ZM23.3333 18.3333H3.33331V4.99998C3.33331 4.55795 3.50891 4.13403 3.82147 3.82147C4.13403 3.50891 4.55795 3.33331 4.99998 3.33331H23.3333V18.3333Z" fill="#EFE7FF"/>
          </svg>
        </div>
        <div class="invisible group-hover:visible group-active:visible">
          <DotLottieVue 
            loop
            style="height: 30px; width: 30px"
            src="/lottie_icons/portofolio.lottie"
            :play-on-hover="true"
          />
        </div>
      </div> 
      <div class="group flex items-center justify-center cursor-pointer relative">

        <div class="hidden group-hover:flex group-active:flex items-start gap-2 absolute bottom-0 start-0 me-[-6em] mb-[2.6em]">
          <img src="/icons/arrowskectch.webp" alt="Arrow Sketch Home Menu" class="block scale-x-[-1]">
          <div class="font-handrawn text-2xl whitespace-nowrap">My Blog</div>
        </div>

        <div class="group-hover:hidden group-active:hidden absolute top-0 end-0 start-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7896 17.705C34.7181 15.8302 35.6984 14.812 35.9263 13.6064C36.0246 13.0979 36.0246 12.5767 35.9263 12.0683C35.6816 10.7738 34.5717 9.69538 32.3476 7.54072L32.3276 7.52138C30.1168 5.3796 29.0096 4.30695 27.6787 4.07038C27.1544 3.97654 26.6169 3.97654 26.0926 4.07038C24.8426 4.29257 23.7881 5.25035 21.8348 7.14202C22.1594 7.32022 22.5167 7.666 23.0465 8.1787L23.0465 8.17871L31.782 16.6324C32.2562 17.0913 32.5922 17.4165 32.7896 17.705Z" fill="#EFE7FF"/>
            <path d="M19.4664 9.10013L6.15795 21.9496C5.64521 22.4447 5.38998 22.6911 5.22818 22.997C5.06411 23.3028 5.00486 23.6482 4.88636 24.3391L3.10886 34.6297C2.99036 35.3206 2.92883 35.6683 3.13621 35.8685C3.34358 36.0687 3.70364 36.0093 4.4192 35.8949L15.0796 34.1787C15.7929 34.0643 16.1507 34.0071 16.4697 33.8487C16.7842 33.6924 17.0394 33.446 17.5522 32.9509L30.8606 20.1014C31.6194 19.3687 32 19.0013 32 18.5458C32 18.0904 31.6194 17.7229 30.8606 16.9903L22.6887 9.10013C21.9298 8.36744 21.5492 8 21.0775 8C20.6058 8 20.2252 8.36744 19.4664 9.10013Z" fill="black"/>
          </svg>
        </div>
        <div class="invisible group-hover:visible group-active:visible">
          <DotLottieVue 
            loop
            style="height: 30px; width: 30px"
            src="/lottie_icons/myblog.lottie"
            :play-on-hover="true"
          />
        </div>
      </div> 
    </div>
  </header>
</template>
