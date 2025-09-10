<template>
  <div>
    <h1 class="title">DB MF</h1>

    <div class="container">
      <div class="wrapper">
        <div class="grid">
          <div v-for="character in characters" :key="character.id" class="card">
            <div class="card-content">
              <img
                loading="lazy"
                :src="character.image"
                :alt="character.name"
                class="card-image"
                width="200"
                height="200"
              />
              <div class="card-footer">
                <div>
                  <h3 class="name">
                    <a href="#">
                      <span aria-hidden="true" class="link-span"></span>
                      {{ character.name }}
                    </a>
                  </h3>
                  <p class="affiliation">
                    {{ character.affiliation }}
                  </p>
                </div>
                <p class="race">
                  {{ character.race }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style>
.title {
  text-align: center;
  font-weight: bold;
  font-size: 3rem; /* ≈ text-5xl */
  margin: 1rem 0;
}

.container {
  background-color: white;
}

.wrapper {
  max-width: 72rem; /* lg:max-w-7xl */
  margin: 0 auto;
  padding: 4rem 2rem; /* py-16 px-4 */
}

@media (min-width: 640px) {
  .wrapper {
    padding: 6rem 1.5rem; /* sm:py-24 sm:px-6 */
  }
}

@media (min-width: 1024px) {
  .wrapper {
    max-width: 72rem; /* lg:max-w-7xl */
    padding: 0 2rem; /* lg:px-8 */
  }
}

.grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem 1.5rem; /* gap-y-10 gap-x-6 */
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem; /* xl:gap-x-8 */
  }
}

.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #d1d5db; /* tailwind border gray-300 */
  border-radius: 0.25rem;
}

.card-content {
  position: relative;
}

.card-image {
  width: 100%;
  height: auto;
  background-color: #e5e7eb; /* bg-gray-200 */
  border-radius: 0.375rem;
  object-fit: contain;
  aspect-ratio: 1 / 1;
  transition: opacity 0.2s ease;
}

.card-content:hover .card-image {
  opacity: 0.75;
}

.card-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.name {
  font-size: 0.875rem; /* text-sm */
  color: #374151; /* text-gray-700 */
}

.affiliation {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280; /* text-gray-500 */
}

.race {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827; /* text-gray-900 */
}

.link-span {
  position: absolute;
  inset: 0;
}
</style>
