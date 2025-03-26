<script setup>
const props = defineProps({
  datas : Array,
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl my-4 p-4 ">
    <div v-for="(work, index) in props.datas" :key="index" class="bg-white dark:bg-stone-950 rounded-3xl p-4 border-2 md:shadow-none md:hover:shadow-[5px_5px_0px_0px_#000]  md:dark:hover:shadow-[5px_5px_0px_0px_#f1f1f1] hover:shadow-[5px_5px_0px_0px_#000] dark:hover:shadow-[5px_5px_0px_0px_#f1f1f1] dark:active:shadow-[5px_5px_0px_0px_#f1f1f1] active:shadow-[5px_5px_0px_0px_#000]">
      <div class="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
        <img :src="work.image" :alt="work.title+' Image'" class="block w-100 mb-4 rounded-2xl w-full object-cover aspect-video">
        
        <div class="p-4">
          <div class="font-handrawn mb-2 flex items-center gap-1 text-sm">
            <span v-for="tag in work.tags" :key="tag.id" class="p-1 px-2 bg-gradient-to-r from-indigo-200 via-slate-100 to-purple-200 rounded-full dark:text-stone-900 whitespace-nowrap">{{ tag.name }}</span>
          </div>
          <h2 class="text-lg/6 md:text-xl text-slate-900 dark:text-stone-100 font-medium">{{ work.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>