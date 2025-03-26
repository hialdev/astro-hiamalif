<script setup>
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';

const themes = ref([
  { code: 'handrawn', title: 'Handrawn Border Theme', image: 'https://placehold.co/160x90?text=Handrawn' },
  { code: 'minimalist', title: 'Minimalist Modern Theme', image: 'https://placehold.co/160x90?text=Minimalist' },
  { code: 'gradient', title: 'Gradient Theme', image: 'https://placehold.co/160x90?text=Gradient' },
]);

const selectedTheme = ref('handrawn');
const currentTheme = computed(() => themes.value.find(theme => theme.code === selectedTheme.value) || {});

// Menyimpan status dropdown (terbuka/tidak)
const isOpen = ref(false);

// Menutup dropdown saat klik di luar elemen
const dropdownRef = ref(null);
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

// Fungsi untuk memilih tema
const selectTheme = (theme) => {
  selectedTheme.value = theme.code;
  isOpen.value = false; // Tutup dropdown setelah memilih
};
</script>

<template>
  <div ref="dropdownRef" class="relative w-full">
    <!-- Selected Theme (Button) -->
    <div class="rounded-xl w-full p-2 border-2 min-w-[18em] cursor-pointer flex items-center justify-between" @click="isOpen = !isOpen">
      <div class="flex items-center gap-2">
        <img :src="currentTheme.image" :alt="`Image ${currentTheme.title} Theme`" class="block max-h-[3em] aspect-video rounded-xl">
        <div class="text-xs">{{ currentTheme.title }}</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 12L31 24L19 36"/></svg>
    </div>

    <!-- Dropdown List -->
    <div v-if="isOpen" class="absolute overflow-hidden bottom-full left-0 w-full bg-white shadow-lg border-2 rounded-xl z-50 my-2">
      <div v-for="theme in themes" :key="theme.code" 
        @click="selectTheme(theme)" 
        class="flex items-center gap-2 p-2 cursor-pointer hover:bg-purple-50">
        <img :src="theme.image" :alt="`Image ${theme.title} Theme`" class="block max-h-[3em] aspect-video rounded-xl">
        <div class="text-xs">{{ theme.title }}</div>
      </div>
    </div>
  </div>
</template>
