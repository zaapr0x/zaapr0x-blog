<script setup lang="ts">
import { aboutPage, footerData, navbarData, socialLinks } from '~/data'

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: footerData.aboutAuthor,
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/hi.png',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div class="col-span-5 max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">
              {{ aboutPage.title }}
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                :to="socialLinks.githubLink"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-[#2a2a2a] dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink
                :to="socialLinks.discordLink"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-[#2a2a2a] dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="radix-icons:discord-logo" size="1em" />
              </NuxtLink>
              <NuxtLink
                :to="socialLinks.twitterLink"
                target="_blank"
                class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-[#2a2a2a] dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg src="/hi.png" width="125" height="115" quality="50" class="rounded-md" />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          {{ aboutPage.description }}
        </h3>

        <p>{{ aboutPage.aboutMe }}</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg src="/hi.png" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
