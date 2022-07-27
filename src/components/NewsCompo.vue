<template>
  <div class="news-compo-wrapper">
    <NewsCard
      v-for="message in displayMessages"
      :key="message.name"
      :title="message.title"
      :sourceName="message.sourceName"
      :urlToImage="message.urlToImage"
      :url="message.url"
      :description="message.description"
      :publishedAt="message.publishedAt"
    ></NewsCard>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
export default {
  components: {
    NewsCard,
  },
  computed: {
    displayMessages() {
      return this.$store.getters["allmeassages"];
    },
  },
  methods: {
    loadMessages() {
      this.$store.dispatch("getMessage");
    },
  },
  created() {
    this.loadMessages();
  },
};
</script>

<style>
.news-compo-wrapper {
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
