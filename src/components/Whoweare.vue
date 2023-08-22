<template>
  <div id="who-we-are" class="px-[40px] py-[48px] sm:py-40 flex justify-center">
    <div class="sm:max-w-[1200px] sm:px-[40px] sm:py-[48px]">
      <div class="text-[36px] font-medium w-56 leading-none text-[#029FE4]">
        {{ contents[currentIndex].title }}
      </div>
      <div class="text-lg mt-3">{{ contents[currentIndex].sub_title }}</div>
      <p
        class="text-[#777777] text-sm font-normal tracking-wider leading-relaxed"
      >
        {{ contents[currentIndex].desc }}
      </p>

      <div class="flex justify-between items-center mt-20">
        <div class="text-[16px]">
          0{{ currentIndex + 1 }} <span class="text-grey text-[16px]">/ </span>
          <span class="text-grey text-[14px]">0{{ contents.length }}</span>
        </div>
        <div class="flex">
          <button
            @click="handlePrev()"
            class="w-[51px] h-[46px] bg-[#F1F1F1] flex justify-center items-center"
          >
            <Prev class="text-[#B6B6B6]" />
          </button>
          <button
            @click="handleNext()"
            class="w-[51px] h-[46px] bg-primary flex justify-center items-center"
          >
            <Next class="text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Prev from "./icons/Prev.vue";
import Next from "./icons/Next.vue";

const contents = [
  {
    title: "Who we are",
    sub_title: "Technology Company",
    desc: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "What we do",
    sub_title: "Professional Brand Management",
    desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "How we do",
    sub_title: "Strategize, Design, Collaborate",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
  },
];

const currentIndex = ref(0);

const handleNext = () => {
  if (currentIndex.value == 2) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = currentIndex.value + 1;
  }
};
const handlePrev = () => {
  if (currentIndex.value == 0) {
    currentIndex.value = 2;
  } else {
    currentIndex.value = currentIndex.value - 1;
  }
};
</script>