import { createApp } from "vue";

import Card from "./components/Cards.vue";

export default function placeCards(element) {
  const app = createApp(Card);
  app.mount(element);
}
