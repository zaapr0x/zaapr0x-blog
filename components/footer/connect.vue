<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-base font-semibold">Connect With Me</p>
    <p class="dark:text-zinc-300">
      {{ footerData.authorInterest }}
    </p>

    <a
      :href="`mailto: ${seoData.mailAddress}`"
      class="block text-center w-full bg-[#99e7ac] dark:bg-[#bafeca] p-2 rounded-lg text-[#2a2a2a] mt-3 text-sm"
    >
      Touch Me
    </a>
  </div>
</template>
