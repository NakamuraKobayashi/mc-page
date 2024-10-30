<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { useHead } from '@vueuse/head';
import { marked } from 'marked';

useHead({
  title: "FAQ | AniKenji's Minecraft Server",
  meta: [{ name: 'og:title', content: "FAQ | AniKenji's Minecraft Server" }],
});

const list: { question: string; answer: string }[] = [
  {
    question: 'What version should i use to play with?',
    answer:
      `If it's Java, you can access it from 1.9 or higher. The server will run with the version specified as "Original version" [on the home page](/)`,
  },
  {
    question: 'Can I play on mobile/iPad?',
    answer: 'You can absolutely play with mobile devices playing Bedrock version 1.20+',
  },
  {
    question: 'Is the server online 24/7?',
    answer:
      'Our server is always online 24/7 so everyone can participate and build their houses (except when the power goes out).',
  },
  {
    question: `I don't want people to be able to see where I am on the map. Can I turn it off?`,
    answer:
      `Ughhhh, if it's was before, you can do that but we change to BlueMap instead of Dynmap so you can't hide your location on map`,
  },
  { question: 'Why do you make this website?', answer: 'Why not? XD' },
];
</script>

<template>
  <section class="max-w-7xl mx-auto p-10">
    <div class="flex items-center font-semibold text-4xl text-black dark:text-white">
      <QuestionMarkCircleIcon class="hidden md:block w-28 mr-4" />
      <h2>
        Frequently Asked Questions
        <br />
        <span class="text-3xl text-neutral-600 dark:text-neutral-400">If you have anymore question, please contact us in Discord</span>
      </h2>
    </div>
    <div v-for="(item, i) in list" :key="i" id="list" class="mt-10">
      <p
        class="mb-4 font-semibold text-lg md:text2xl dark:text-gray-100"
        v-html="marked.parse('Q: ' + item.question)"
      ></p>
      <p
        class="md:text-lg text-neutral-600 dark:text-neutral-300"
        v-html="marked.parse('A: ' + item.answer)"
      ></p>
    </div>
  </section>
</template>

<style>
#list a {
  @apply text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-2;
}
</style>
