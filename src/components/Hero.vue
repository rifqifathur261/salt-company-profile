<template>
  <div>
    <div class="relative w-full pt-[59px]" :class="'h-[518px] sm:h-screen '">
      <img
        class="absolute w-screen object-cover sm:bottom-0"
        src="/hero-img.png"
        alt=""
      />
      <img class="absolute bottom-0 h-[300px] w-screen" src="/bg.png" alt="" />
      <div
        class="absolute bottom-0 text-white pb-[55px] sm:pb-[95px] px-[41px] flex justify-center w-full"
      >
        <div class="sm:max-w-[1200px]">
          <div class="text-[36px] font-medium w-56 leading-none">
            Discover Your Wonder
          </div>
          <div class="mt-4 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </div>
      <a
        href="#who-we-are"
        class="hover:cursor-pointer z-50 shadow-md -bottom-5 right-0 left-0 mx-auto bg-white rounded-full absolute w-[40px] h-[40px] flex justify-center items-center"
      >
        <img class="w-[18px] h-[16px]" src="/scroll.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup>
</script>