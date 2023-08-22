<template>
  <div id="our-values" class="flex justify-center">
    <div class="sm:max-w-[1200px] sm:flex sm:my-20">
      <div class="px-[40px] py-[48px] sm:flex-1">
        <div
          class="text-[36px] font-medium leading-none text-[#029FE4] text-center sm:text-start"
        >
          Our Core Values
        </div>

        <p
          class="text-[#777777] text-sm font-normal tracking-wider leading-relaxed mt-6"
        >
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>

        <div class="flex flex-col gap-4 sm:gap-0">
          <div
            class="flex flex-row mt-6 sm:mt-2"
            v-for="(item, index) in contents"
            :key="index"
          >
            <div
              class="w-16 sm:w-8 mt-4 -ml-4 sm:ml-0 mr-3 bg-[#747474] h-0.5"
            />
            <div>
              <div class="text-[24px] sm:text-[18px]">{{ item.title }}</div>
              <div class="text-[#777777] mt-[6px]">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end sm:items-end sm:flex-1 sm:py-[40px]">
        <img
          class="mt-10 sm:mt-0 object-cover h-[237px] w-[327px] sm:w-[627px] sm:h-[387px] object-left"
          src="/Core-Values-Illustration.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const contents = [
  {
    title: "Dedication",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Curiosity",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];
</script>
