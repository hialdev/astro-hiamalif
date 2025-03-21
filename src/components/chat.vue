<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { ref } from 'vue';

const isClicked = ref(false);

const chats = ref([
  // { is_user: 1, message: "Hey! How's your day going?", timestamp: "2025-03-20 10:00:01" },
  // { is_user: 0, message: "Pretty good! Working on some code. You?", timestamp: "2025-03-20 10:00:05" },
  // { is_user: 1, message: "Nice! I'm trying to learn Vue and Astro.", timestamp: "2025-03-20 10:00:10" },
  // { is_user: 1, message: "It seems interesting but a bit confusing.", timestamp: "2025-03-20 10:00:12" },
  // { is_user: 0, message: "Yeah, the learning curve can be tricky.", timestamp: "2025-03-20 10:00:15" },
  // { is_user: 1, message: "Exactly! Any tips to get started faster?", timestamp: "2025-03-20 10:00:18" },
  // { is_user: 0, message: "Start with small projects and use the docs a lot!", timestamp: "2025-03-20 10:00:22" },
  // { is_user: 1, message: "That makes sense. What are you building now?", timestamp: "2025-03-20 10:00:27" },
  // { is_user: 1, message: "Still working on that web app?", timestamp: "2025-03-20 10:00:30" },
  // { is_user: 0, message: "Yeah, refining the UI with Tailwind.", timestamp: "2025-03-20 10:00:35" },
  // { is_user: 1, message: "Tailwind is amazing! So much faster than writing CSS.", timestamp: "2025-03-20 10:00:40" },
  // { is_user: 1, message: "Which component library are you using?", timestamp: "2025-03-20 10:00:44" },
  // { is_user: 0, message: "I'm using shadcn/ui. It's simple but powerful!", timestamp: "2025-03-20 10:00:48" },
  // { is_user: 1, message: "I've heard about it! Is it better than Bootstrap?", timestamp: "2025-03-20 10:00:52" },
  // { is_user: 1, message: "Or would you still recommend Bootstrap?", timestamp: "2025-03-20 10:00:54" },
  // { is_user: 0, message: "It depends. Bootstrap is great for quick layouts, but Tailwind is more flexible.", timestamp: "2025-03-20 10:00:58" },
  // { is_user: 1, message: "Got it! I'll try Tailwind first then.", timestamp: "2025-03-20 10:01:02" },
  // { is_user: 1, message: "By the way, do you use animations in Vue?", timestamp: "2025-03-20 10:01:06" },
  // { is_user: 0, message: "Yes! Vue has built-in transition components.", timestamp: "2025-03-20 10:01:09" },
  // { is_user: 1, message: "Oh nice! I'll check that out.", timestamp: "2025-03-20 10:01:12" },
  // { is_user: 1, message: "I also need to make an image slider. Any good libraries?", timestamp: "2025-03-20 10:01:16" },
  // { is_user: 0, message: "Swiper.js is solid! It works well with Vue.", timestamp: "2025-03-20 10:01:20" },
  // { is_user: 1, message: "Awesome! I'll try integrating it.", timestamp: "2025-03-20 10:01:24" },
  // { is_user: 1, message: "Thanks for the help! You're a lifesaver.", timestamp: "2025-03-20 10:01:28" },
  // { is_user: 0, message: "No worries! Happy coding!", timestamp: "2025-03-20 10:01:32" }
])

const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} detik yang lalu`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} menit yang lalu`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} jam yang lalu`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} hari yang lalu`;
};

const message = ref("")

const sendMessage = () => {
  let isReply = message.value.startsWith("/r")
  const obj_chat = { is_user: !isReply, message: isReply ? message.value.replace(/^\/r\s/, "") : message.value, timestamp: Date.now() }
  chats.value.push(obj_chat)
  message.value = ""
}

</script>

<template>
  <div :class="['fixed flex flex-col items-end end-0 bottom-0 m-2 z-[10]', isClicked ? 'start-0' : '']">
    <div v-if="isClicked" class="flex flex-col rounded-3xl rounded-br-none flex-1 bg-white shadow-2xl w-full max-w-[40em] p-5 start-0 end-0 h-full max-h-[86.5vh]">
      <div class="flex items-center gap-2 mb-5">
        <img src="/me.jpg" alt="Chat Image for Me" class="aspect-square rounded-full w-[3em]">
        <div>
          <div class="font-semibold">Aleeyah</div>
          <div class="text-xs text-slate-400">Personal Assistant ( but its still Me 🗿)</div>
        </div>
      </div>

      <div class="flex-1 overflow-auto">
        <div class="bg-slate-50 text-slate-500 p-3 text-xs mb-3">
          Start Conversation with me Now! I will reply you within a minute. Your conversation will be privated and stored for 3 days. Dont hesitate Ask me Anything! except how to understand the w0m4N 🗿
        </div>
        <div v-for="(chat, index) in chats" :key="index" class="">
          <div v-if="chat.is_user" class="rounded-3xl p-4 border rounded-br-none bg-slate-50 mb-2 text-xs ms-10">
            <div>
              {{ chat.message }}
            </div>
            <div class="text-[10px] text-slate-500">{{ timeAgo(chat.timestamp) }}</div>
          </div>

          <div v-if="!chat.is_user" class="rounded-3xl p-4 rounded-bl-none bg-slate-900 text-white mb-2 text-xs me-10">
            <div>
              {{ chat.message }}
            </div>
            <div class="text-[10px] text-slate-300">{{ timeAgo(chat.timestamp) }}</div>
          </div>
        </div>
      </div>

      <div class="flex items-end gap-3 mt-3">
        <textarea v-model="message" id="" class="flex-1 shadow-own border-2 text-xs p-3 rounded-xl bg-slate-100" placeholder="Type Message.." rows="3"></textarea>
        <button @click="sendMessage" class="cursor-pointer p-3 bg-slate-900 text-purple-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><defs><path id="lsiconSendFilled0" d="M12.97 2.67a.5.5 0 0 0-.64-.64l-11 4a.5.5 0 0 0-.016.934l4.433 1.773l2.9-3.09l.707.707l-2.98 3.176l1.662 4.156a.5.5 0 0 0 .934-.015z"/></defs><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><use href="#lsiconSendFilled0"/><use href="#lsiconSendFilled0"/></g></svg>
        </button>
      </div>
    </div>

    <div class="flex items-center jsustify-center m-3">
      <div class="group flex items-center justify-center cursor-pointer relative">
        <div v-if="!isClicked" class="hidden group-hover:flex group-active:flex items-end gap-2 absolute bottom-0 start-0 ms-[-4.4em] mb-[3.8em]">
          <div class="font-handrawn text-2xl">Discuss Anything!</div>
          <img src="/icons/arrowskectch.webp" alt="Arrow Sketch Home Menu" class="block">
        </div>

        <div v-if="!isClicked" class="group-hover:hidden group-active:hidden absolute top-0 end-0 start-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
            <path d="M6.30005 31.7625C6.30005 25.0094 8.9827 18.5329 13.7578 13.7578C18.533 8.98264 25.0095 6.29999 31.7626 6.29999C38.5156 6.29999 44.9921 8.98264 49.7673 13.7578C54.5424 18.5329 57.2251 25.0094 57.2251 31.7625V52.9823C57.2251 53.969 57.2251 54.4623 57.1169 54.8666C56.9722 55.4061 56.6882 55.8981 56.2932 56.2931C55.8982 56.6881 55.4062 56.9722 54.8666 57.1168C54.4624 57.225 53.9691 57.225 52.9824 57.225H31.7626C25.0095 57.225 18.533 54.5424 13.7578 49.7672C8.9827 44.9921 6.30005 38.5156 6.30005 31.7625Z" fill="#EFE7FF"/>
            <path d="M20.6227 26.9882H42.9024ZM20.6227 36.5367H36.5368Z" fill="#EFE7FF"/>
            <path d="M20.6227 26.9882H42.9024M20.6227 36.5367H36.5368" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-if="!isClicked" @click="isClicked = true" class="invisible group-hover:visible group-active:visible">
          <DotLottieVue 
            loop 
            :play-on-hover="true"
            style="height: 63px; width: 63px"
            src="/lottie_icons/chat.lottie"
          />
        </div>
        <div v-if="isClicked" @click="isClicked = false" class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
            <path d="M6.30005 31.7625C6.30005 25.0094 8.9827 18.5329 13.7578 13.7578C18.533 8.98264 25.0095 6.29999 31.7626 6.29999C38.5156 6.29999 44.9921 8.98264 49.7673 13.7578C54.5424 18.5329 57.2251 25.0094 57.2251 31.7625V52.9823C57.2251 53.969 57.2251 54.4623 57.1169 54.8666C56.9722 55.4061 56.6882 55.8981 56.2932 56.2931C55.8982 56.6881 55.4062 56.9722 54.8666 57.1168C54.4624 57.225 53.9691 57.225 52.9824 57.225H31.7626C25.0095 57.225 18.533 54.5424 13.7578 49.7672C8.9827 44.9921 6.30005 38.5156 6.30005 31.7625Z" fill="black"/>
            <path d="M24 23.5L39.5 39ZM24 39L39.5 23.5Z" fill="#EFE7FF"/>
            <path d="M24 23.5L39.5 39M24 39L39.5 23.5" stroke="#EFE7FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
    </div>
  </div>
</template>