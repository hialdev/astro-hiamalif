<script setup>
import { ref } from 'vue';
import SelectTheme from './forms/select-theme.vue';
import Toggle from './forms/toggle.vue';
import { onClickOutside } from '@vueuse/core';

const isOpen = ref(false)
const dropdownRef = ref(null);
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="dropdownRef" class="fixed bottom-0 start-0 z-[1] h-auto m-5">
      <div v-if="isOpen" class="bg-white/75 backdrop-blur-md mb-3 bottom-0 start-0 min-w-[13em] rounded-xl">
        <div class="p-2">
          <ul class="flex flex-col gap-1">
            <li class="p-2 px-4 rounded-lg">
              <div class="font-handrawn mb-2">Select Theme</div>
              <SelectTheme :class="`bg-white rounded-xl`" />
            </li>
            <li class="p-2 px-4 rounded-lg">
              <div class="font-handrawn mb-2">Dark / Light Mode</div>
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
      <div @click="isOpen = !isOpen" :class="`inline-flex backdrop-blur-md items-center cursor-pointer justify-center p-3 bg-white/75 rounded-xl hover:text-purple-800 gap-3 relative ${isOpen ? 'text-purple-800' : ''}`">
        <svg :class="`hover:animate-spin ${isOpen ? 'animate-spin' : ''}`" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.965 2.809a1.51 1.51 0 0 0-1.401-.203a10 10 0 0 0-2.982 1.725a1.51 1.51 0 0 0-.524 1.313c.075.753-.058 1.48-.42 2.106c-.361.627-.925 1.106-1.615 1.417c-.458.203-.786.62-.875 1.113a10 10 0 0 0 0 3.44c.093.537.46.926.875 1.114c.69.31 1.254.79 1.616 1.416c.361.627.494 1.353.419 2.106c-.045.452.107.964.524 1.313a10 10 0 0 0 2.982 1.725c.471.169.996.093 1.4-.203c.615-.442 1.312-.691 2.036-.691s1.42.249 2.035.691c.37.266.89.39 1.401.203a10 10 0 0 0 2.982-1.725c.417-.349.57-.86.524-1.313c-.075-.753.057-1.48.42-2.106c.361-.627.925-1.105 1.615-1.416c.414-.188.782-.577.875-1.114a10.1 10.1 0 0 0 0-3.44a1.51 1.51 0 0 0-.875-1.113c-.69-.311-1.254-.79-1.616-1.417c-.362-.626-.494-1.353-.419-2.106a1.51 1.51 0 0 0-.524-1.313a10 10 0 0 0-2.982-1.725a1.51 1.51 0 0 0-1.4.203C13.42 3.25 12.723 3.5 12 3.5s-1.42-.249-2.035-.691" class="duoicon-secondary-layer" opacity="0.3"/><path fill="currentColor" fill-rule="evenodd" d="M9 12c0-2.309 2.5-3.753 4.5-2.598A3 3 0 0 1 15 12c0 2.309-2.5 3.753-4.5 2.598A3 3 0 0 1 9 12" class="duoicon-primary-layer"/></svg>
      </div>
  </div>
</template>