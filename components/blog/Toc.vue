<script setup lang="ts">
const { path } = useRoute()
const articles = await queryCollection('content').path(path).first()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end">
    <div class="border dark:border-[#2a2a2a] p-3 rounded-md min-w-[200px] dark:bg-[#181818]">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">Table Of Content</h1>
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-xs mb-3 hover:underline"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
