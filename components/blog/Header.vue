<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  description: string
  date: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  tags: () => [],
})
</script>

<template>
  <header>
    <h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl my-7 font-bold">
      {{ title || '' }}
    </h1>
    <NuxtImg
      :src="image || ''"
      :alt="alt || ''"
      width="100%"
      class="m-auto rounded-2xl shadow-lg h-48 lg:h-96 w-full content-center object-cover"
    />
    <p
      class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400"
    >
      {{ description }}
    </p>
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center font-semibold">
          <LogoDate />
          <p>{{ date || '' }}</p>
        </div>
        <div class="flex items-center gap-2 flex-wrap my-5">
          <LogoTag />
          <template v-for="tag in tags" :key="tag">
            <span class="bg-gray-200 dark:bg-[#2a2a2a] rounded-md px-2 py-1 font-semibold">{{
              tag
            }}</span>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
