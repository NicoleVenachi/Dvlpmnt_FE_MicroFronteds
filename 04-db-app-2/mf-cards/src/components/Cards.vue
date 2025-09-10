<template>
  <div>
    <h1 class="text-center font-bold text-5xl">DB MF</h1>

    <div
      v-for="character in characters"
      :key="character.id"
      class="m-4 p-4 border rounded"
    >
      <h2 class="text-2xl font-semibold">
        {{ character.name }} | {{ character.race }}
      </h2>
      <img
        loading="lazy"
        :src="character.image"
        :alt="character.name"
        width="200"
        height="200"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const characters = ref([]);

const apiBaseURL = "https://dragonball-api.com/api/characters";
const getCharacters = async () => {
  const response = await fetch(apiBaseURL);
  const data = await response.json();
  console.log(data);
  characters.value = data.items;
};

onMounted(async () => {
  await getCharacters();
});
</script>
