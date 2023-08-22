<template>
  <div id="the-perks" class="bg-primary flex justify-center">
    <div
      class="px-[20px] sm:px-[60px] py-[35px] sm:py-[80px] sm:max-w-[1200px]"
    >
      <div class="bg-white px-[28px] py-[42px]">
        <div class="text-[24px] font-bold text-primary">OUR SPECIALITY</div>
        <p class="font-light mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <div class="flex flex-col gap-4 justify-center">
          <div class="flex flex-col justify-center items-center my-6">
            <div class="flex flex-row">
              <img
                class="w-[121px] h-[121px]"
                :src="`/${contents[currentIndex].title.replace(' ', '-')}.png`"
                alt=""
              />
            </div>
            <div class="text-sm text-center mt-4">
              {{ contents[currentIndex].title }}
            </div>
          </div>

          <p class="font-light text-[#A7A7A7] text-center">
            {{ contents[currentIndex].desc }}
          </p>
        </div>

        <div class="flex justify-between items-center mt-10">
          <button
            @click="handlePrev()"
            class="w-[51px] h-[46px] flex justify-center items-center"
          >
            <Prev class="text-[#D2D2D2]" />
          </button>
          <div class="flex flex-row gap-4">
            <div
              v-for="item in contents.length"
              :key="item"
              class="w-3 h-3 rounded-full"
              :class="
                item - 1 == currentIndex
                  ? 'bg-white border-2  border-[#3D46A2]'
                  : 'bg-[#DAF3FC] border-none'
              "
            ></div>
          </div>
          <button
            @click="handleNext()"
            class="w-[51px] h-[46px] flex justify-center items-center"
          >
            <Next class="text-[#3D46A2]" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Next from "./icons/Next.vue";
import Prev from "./icons/Prev.vue";

const contents = [
  {
    title: "Speed Improvement",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
  },
  {
    title: "Accesories",
    desc: "Alias ad rerum veritatis laborum laudantium magnam ea quisquam voluptates, quo eius tenetur modi labore ex consequatur. ",
  },
  {
    title: "Exhaust",
    desc: "Repellendus tempora non quaerat, porro, architecto quam, ipsam illo ea aspernatur sit numquam odio in corporis. Voluptatem officia nostrum natus magni.",
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