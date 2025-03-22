<script setup>
const news = [
  {
    id: 1,
    title: "Teknologi AI Terbaru di 2025",
    slug: "teknologi-ai-terbaru-2025",
    excerpt: "Perkembangan terbaru dalam dunia kecerdasan buatan yang akan mengubah industri.",
    image: "https://source.unsplash.com/600x400/?technology,ai"
  },
  {
    id: 2,
    title: "Pasar Saham Mengalami Kenaikan Drastis",
    slug: "pasar-saham-meningkat-2025",
    excerpt: "Indeks saham utama mengalami lonjakan signifikan dalam beberapa pekan terakhir.",
    image: "https://source.unsplash.com/600x400/?finance,stocks"
  },
  {
    id: 3,
    title: "Tren Fashion Musim Panas Tahun Ini",
    slug: "tren-fashion-2025",
    excerpt: "Warna dan desain pakaian yang akan mendominasi musim panas tahun ini.",
    image: "https://source.unsplash.com/600x400/?fashion,summer"
  },
  {
    id: 4,
    title: "Mobil Listrik dengan Jarak Tempuh Terpanjang",
    slug: "mobil-listrik-jarak-tempuh",
    excerpt: "Produsen otomotif mengembangkan teknologi baterai terbaru untuk mobil listrik.",
    image: "https://source.unsplash.com/600x400/?car,electric"
  },
  {
    id: 5,
    title: "Startup Teknologi yang Harus Diwaspadai",
    slug: "startup-teknologi-2025",
    excerpt: "Daftar startup yang berpotensi mengubah industri teknologi di masa depan.",
    image: "https://source.unsplash.com/600x400/?startup,innovation"
  },
  {
    id: 6,
    title: "Pola Makan Sehat untuk Hidup Lebih Panjang",
    slug: "pola-makan-sehat",
    excerpt: "Bagaimana makanan sehat dapat membantu meningkatkan usia harapan hidup.",
    image: "https://source.unsplash.com/600x400/?food,healthy"
  }
];

</script>

<template>
  <section class="bg-slate-50 m-3 rounded-2xl">
    <div class="p-5 md:p-13 mb-5">
      <h4 class="font-handrawn text-xl text-purple-800">Read My Articles!</h4>
      <h2 class="text-3xl font-medium mb-1">Sharing is Carrying, Thinking is Pusing</h2>
      <p class="max-w-[50em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis sequi mollitia eaque architecto maxime nesciunt iste reiciendis repellat consequuntur, voluptate placeat veniam dolorem fuga, quod numquam voluptatum? Dolorum, commodi?</p>

      <div class="grid grid-cols-4 mt-8 gap-5 perspective-[1500px]">
        <div v-for="(item, index) in news" :key="item.id" class="col-span-2 md:col-span-2 lg:col-span-1 bg-white border-2 border-white hover:border-slate-900 cursor-pointer transition-all rounded-2xl p-5 hover:translate-z-10 hover:rotate-y-0 hover:shadow-[5px_5px_0px_0px_#000] active:shadow-[5px_5px_0px_0px_#000]">
          <img src="https://placehold.co/160x90" alt="" class="block aspect-video w-full rounded-2xl object-cover overflow-hidden">
          <div class="mt-3 mb-3">
            <h6 class="text-sm/4 md:text-lg/6 mb-1 font-medium">{{ item.title }}</h6>
            <p class="line-clamp-2 text-xs md:text-sm text-slate-500">{{ item.excerpt }}</p>
          </div>
          <div class="grid grid-cols-2 items-center overflow-hidden bg-slate-50 rounded-xl">
            <div class="flex items-center justify-center p-1 px-2 hover:bg-purple-100 m-1 rounded-lg gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10.2443 17.7517C10.25 17.6247 10.4589 17.574 10.5213 17.6847C10.8144 18.2041 11.3129 18.9669 11.8784 19.3143C12.4439 19.6617 13.351 19.7597 13.9465 19.7851C14.0735 19.7909 14.1231 19.9998 14.0123 20.0621C13.493 20.3552 12.7313 20.8538 12.3839 21.4193C12.0365 21.9848 11.9384 22.8919 11.9131 23.4874C11.9073 23.6143 11.6972 23.6639 11.6361 23.5532C11.3429 23.0338 10.8444 22.2721 10.2777 21.9248C9.71225 21.5774 8.80516 21.4793 8.21082 21.4539C8.08387 21.4481 8.03309 21.2381 8.14388 21.1769C8.66321 20.8838 9.42605 20.3853 9.77342 19.8186C10.1196 19.2531 10.2189 18.346 10.2443 17.7517Z" fill="black"/>
                  <path d="M19.7249 16.5976C19.7145 16.4707 19.4941 16.4176 19.4271 16.5261C19.2286 16.8527 18.9424 17.245 18.6227 17.4412C18.3031 17.6374 17.8241 17.7136 17.4433 17.7436C17.3163 17.7528 17.2633 17.9744 17.3717 18.0402C17.6972 18.2387 18.0907 18.5249 18.2869 18.8446C18.4831 19.1643 18.5593 19.6443 18.5893 20.0252C18.5985 20.1521 18.8201 20.2041 18.8859 20.0956C19.0844 19.7701 19.3706 19.3766 19.6903 19.1816C20.0099 18.9865 20.49 18.9081 20.8709 18.8792C20.9978 18.8688 21.0497 18.6484 20.9413 18.5815C20.6158 18.383 20.2223 18.0967 20.0272 17.7771C19.8322 17.4574 19.7537 16.9785 19.7249 16.5976Z" fill="#EFE7FF"/>
                  <path d="M15.352 3.31088L15.0728 2.95773C13.9914 1.59248 13.4513 0.909272 12.8223 1.00968C12.1945 1.11123 11.8933 1.92831 11.2921 3.56362L11.1363 3.986C10.9655 4.45109 10.88 4.68306 10.7162 4.85386C10.5523 5.02466 10.3284 5.11352 9.88063 5.2924L9.47325 5.45513L9.18819 5.57053C7.80332 6.12448 7.10626 6.43954 7.01625 7.0512C6.92161 7.70324 7.58174 8.26181 8.90199 9.37779L9.24359 9.6663C9.61981 9.98367 9.80677 10.1429 9.9141 10.3587C10.0226 10.5745 10.0376 10.8238 10.0676 11.3224L10.0953 11.7759C10.2038 13.5301 10.2569 14.4072 10.8281 14.7096C11.3982 15.0119 12.1068 14.5399 13.524 13.5947L13.891 13.3501C14.2938 13.0812 14.4946 12.9461 14.7254 12.9104C14.9562 12.8746 15.1882 12.9381 15.6556 13.0673L16.0791 13.185C17.7213 13.6397 18.5419 13.8671 18.9885 13.402C19.4363 12.9369 19.2135 12.0864 18.7692 10.3864L18.6538 9.94674C18.528 9.46319 18.4646 9.22199 18.4992 8.9831C18.5338 8.74421 18.663 8.53417 18.9216 8.11524L19.1558 7.7344C20.0618 6.26182 20.5153 5.52552 20.2222 4.93464C19.9279 4.34607 19.082 4.29183 17.3901 4.18681L16.9516 4.15911C16.4715 4.12911 16.2314 4.11411 16.0226 4.00332C15.8137 3.89253 15.6602 3.69864 15.3532 3.31088" fill="black"/>
                  <path d="M8.58004 14.0714C6.11381 15.2762 4.06073 17.1851 3.28636 19.4655C2.4185 14.0333 3.62334 10.525 5.55409 8.34378C5.72028 8.68423 5.93724 8.96582 6.13112 9.18625C6.53504 9.64326 7.11438 10.1326 7.70296 10.63L8.1265 10.9877L8.32269 11.1551C8.32846 11.2289 8.33423 11.3166 8.34 11.4286L8.37462 11.9883C8.42078 12.7442 8.46695 13.4817 8.58004 14.0714Z" fill="#EFE7FF"/>
                </svg>
              </div>
              <div class="font-handrawn text-purple-800">14000</div>
            </div>
            <div class="flex items-center justify-center p-1 px-2 hover:bg-purple-100 m-1 rounded-lg gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39175 4.39175C2 5.78231 2 8.02194 2 12.5V19.1334C2 20.1903 3.27894 20.7211 4.02706 19.9729L6.57663 17.4234C6.66213 17.3379 6.70488 17.2951 6.7595 17.2726C6.81413 17.25 6.87469 17.25 6.997 17.25H13.875C16.0885 17.25 17.1953 17.25 18.0669 16.8878C19.2307 16.406 20.1555 15.4816 20.6378 14.3181C21 13.4453 21 12.3385 21 10.125C21 7.9115 21 6.80475 20.6378 5.93312C20.3994 5.35665 20.0497 4.83279 19.6088 4.39146C19.1679 3.95013 18.6443 3.59998 18.0681 3.361C17.1953 3 16.0885 3 13.875 3H11.5C7.02194 3 4.78231 3 3.39175 4.39175Z" fill="#EFE7FF"/>
                  <path d="M7.34375 8.34378H15.6563M7.34375 11.9063H13.2813" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="font-handrawn text-purple-800">14000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>