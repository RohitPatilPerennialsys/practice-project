<template>
  <div class="card-wrapper">
    <div class="news-content">
      <img class="card-img" :src="urlToImage" />
      <div class="news-content-wrapper">
        <h1 class="news-title">
          {{ title }}
        </h1>
        <p class="news-source">{{ sourceName }}</p>
        <p class="news-description">
          {{ description }}
        </p>
        <div class="news-btn-wrapper">
          <a :href="url"> <button class="go-to-page-btn">Go to page</button></a>
          <img
            id="btn"
            @click="markingBookmark()"
            class="with-out-bookmark-img"
            src="../assets/bookmark.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="published-info-wrapper">
      <p>Published {{ publishedAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "urlToImage",
    "title",
    "sourceName",
    "description",
    "publishedAt",
    "url",
  ],
  methods: {
    markingBookmark: () => {
      let btn = document.getElementById("btn");
      if (btn.className == "with-out-bookmark-img") {
        btn.className = "with-bookmark-img";
      } else {
        btn.className = "with-out-bookmark-img";
      }
    },
  },
};
</script>

<style>
.card-wrapper {
  width: 300px;

  margin: 20px;
}
.card-img {
  height: 169px;
  width: 300px;
}
.news-content-wrapper {
  margin-left: 15px;
  margin-right: 15px;
}
.news-content {
  background-color: white;
  padding-bottom: 20px;
}
.news-title {
  margin: 0px;
  font-size: 20px;
}
.news-source {
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  margin-top: 5px;
  color: rgb(157, 157, 157);
}
.news-description {
  margin: 0;
  margin: 10px 0px 10px 0px;
}
.news-btn-wrapper {
  display: flex;
  justify-content: space-between;
}

.go-to-page-btn {
  background-color: black;
  width: 100px;
  margin: 0px;
  color: white;
}
.bookmark-news-btn {
  margin: 0px;
}
.with-out-bookmark-img,
.with-bookmark-img {
  width: 25px;
  height: 30px;
}
.with-bookmark-img {
  background-color: black;
}
.published-info-wrapper {
  border-top: 2px solid rgb(167, 167, 167);
  background-color: rgb(227, 226, 226);
}
.published-info-wrapper p {
  margin: 0;
  padding: 10px;
  padding-left: 15px;
  font-size: 10px;
  color: rgb(157, 157, 157);
  letter-spacing: 0.5px;
}
</style>
