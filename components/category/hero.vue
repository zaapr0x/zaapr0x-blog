<script setup lang="ts">
import { categoryPage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6 justify-self-center mt-4 sm:hidden">
        <div class="w-[300px]">
          <NuxtImg src="/me.png" quality="100" class="rounded-[50%] w-full object-contain" />
        </div>
      </div>
      <div class="px-6">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ categoryPage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ categoryPage.description }}
        </p>
      </div>
      <div class="px-6 justify-self-center mt-4 hidden sm:block">
        <div class="w-[300px]">
          <NuxtImg src="/me.png" quality="100" class="rounded-[50%] w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
