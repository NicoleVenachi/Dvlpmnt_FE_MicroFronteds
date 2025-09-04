<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-cards</div>
    <div>Framework: vue3</div>
    <cards></cards>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "./components/Cards.vue";

export default defineComponent({
  components: { Cards },
});
</script>
