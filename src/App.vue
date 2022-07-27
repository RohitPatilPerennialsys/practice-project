<template>
  <HeaderCompo />
  <SearchBarCompo />
  <NewsCompo />
</template>

<script>
import HeaderCompo from "./components/HeaderCompo.vue";
import SearchBarCompo from "./components/SearchBarCompo.vue";
import NewsCompo from "./components/NewsCompo.vue";

export default {
  name: "App",
  components: {
    HeaderCompo,
    SearchBarCompo,
    NewsCompo,
  },
};
</script>

<style></style>
