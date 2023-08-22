<template>
  <div
    class="z-[51] bg-white fixed w-full flex justify-center py-[14px] pl-[30px] pr-[21px]"
  >
    <div class="flex flex-row justify-between sm:max-w-[1200px] w-full">
      <img src="/logo.png" class="logo w-[160px] h-[31px]" alt="Company logo" />
      <nav class="">
        <button class="sm:hidden">
          <img src="/burger.png" alt="" class="w-[19px] h-[12px]" />
        </button>
        <ul class="sm:flex hidden gap-6 text-primary">
          <li v-for="(item, index) in navigations" :key="index">
            <a :href="`/${item.value}`" class="text">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
  
  <script setup>
const navigations = [
  { name: "Who we are", value: "#who-we-are" },
  { name: "Our Values", value: "#our-values" },
  { name: "The Perks", value: "#the-perks" },
  { name: "Contact", value: "#contact" },
];
</script>
  
  <style lang="scss" scoped>
</style>