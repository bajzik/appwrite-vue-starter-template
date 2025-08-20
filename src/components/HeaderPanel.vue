<template>
  <Toolbar class="w-full">
    <template #start>
      <div class="font-bold">Vue 3 + AppWriter Starter Template</div>
    </template>
    <template #center>
      <div class="flex gap-x-2 items-center">
        <div class="text-sm mr-5">Build with</div>
        <div v-tooltip.bottom="'Vue 3 + Composition API'">
          <VueIcon class="fill-emerald-500 w-5" />
        </div>
        <div v-tooltip.bottom="'TypeScript'">
          <TypeScriptIcon class="fill-sky-600 w-5" />
        </div>
        <div v-tooltip.bottom="'VITE'">
          <ViteIcon class="fill-indigo-500 w-5" />
        </div>
        <div v-tooltip.bottom="'TailWind CSS'">
          <TailwindIcon class="fill-cyan-500 w-5" />
        </div>
        <Divider layout="vertical" />
        <div v-tooltip.bottom="'ESLint'">
          <ESLintIcon class="fill-indigo-700 w-5" />
        </div>
        <div v-tooltip.bottom="'Prettier'">
          <PrettierIcon class="fill-amber-400 w-5" />
        </div>
        <Divider layout="vertical" />
        <div v-tooltip.bottom="'AppWrite'">
          <AppWriteIcon class="fill-rose-500 w-5" />
        </div>
      </div>
    </template>

    <template #end>
      <div class="flex gap-x-2 items-center">
        <a
          href="https://github.com/bajzik/appwrite-vue-starter-template"
          target="_blank"
        >
          <GitHubIcon class="fill-neutral-900 w-5" />
        </a>
        <Divider layout="vertical" />
        <img
          src="https://img.shields.io/github/stars/bajzik/appwrite-vue-starter-template?style=for-the-badge&label=STARS&labelColor=ffffff&color=ffffff
"
        />
      </div>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import AppWriteIcon from "./icons/AppWriteIcon.vue";
import VueIcon from "./icons/VueIcon.vue";
import ViteIcon from "./icons/ViteIcon.vue";
import TypeScriptIcon from "./icons/TypeScriptIcon.vue";
import ESLintIcon from "./icons/ESLintIcon.vue";
import PrettierIcon from "./icons/PrettierIcon.vue";
import TailwindIcon from "./icons/TailwindIcon.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";
</script>

<style scoped></style>
