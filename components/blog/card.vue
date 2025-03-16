<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group m-2 overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300">
    <div
      class="sm:h-48 md:h-40 w-full m-auto object-cover object-center group-hover:scale-[1] transition-all duration-500"
    >
      <NuxtImg
        :src="image"
        :alt="alt"
        class="h-full w-full object-cover object-center rounded-[4px] group-hover:scale-[0.90] transition-all duration-500"
      />
    </div>
    <div class="">
      <div class="text-black dark:text-zinc-300 pt-3 pb-2">
        <div class="flex items-center gap-1 flex-wrap">
          <template v-for="tag in tags" :key="tag">
            <span class="bg-gray-200 dark:bg-[#2a2a2a] rounded-md px-2 py-1 font-light text-sm">{{
              tag
            }}</span>
          </template>
        </div>
      </div>
      <NuxtLink :to="path">
        <h2
          class="line-clamp-2 text-md font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-[#bafeca] dark:group-hover:opacity-80"
        >
          {{ title }}
        </h2>
        <p class="text-sm text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div
          class="text-sm flex group-hover:underline opacity-60 group-hover:opacity-80 dark:group-hover:opacity-80 items-center py-2"
        >
          <p>Read More</p>
          <LogoArrow />
        </div>
      </NuxtLink>
    </div>
  </article>
</template>
