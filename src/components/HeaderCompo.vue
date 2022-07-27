<template>
  <div class="header-wrapper">
    <h1 class="title">Vue News Search & Bookmark</h1>
    <div class="btn-wrapper">
      <p id="a" class="nav-active-item" @click="activeClass()">Top News</p>
      <p id="b" class="nav-item" @click="activeClass()">Bookmark</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCompo",
  methods: {
    activeClass: () => {
      let a = document.getElementById("a");
      let b = document.getElementById("b");
      console.log(a);
      if (a.className == "nav-item" && b.className == "nav-active-item") {
        a.className = "nav-active-item";
        b.className = "nav-item";
      } else if (
        a.className == "nav-active-item" &&
        b.className == "nav-item"
      ) {
        b.className = "nav-active-item";
        a.className = "nav-item";
      }
    },
  },
};
</script>

<style scoped>
a {
  all: unset;
  cursor: pointer;
}

a:visited {
  color: aqua;
}
.header-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #343a40;
  height: 75px;
}
.title {
  margin: 0px;
  color: white;
  font-size: 20px;
}
.btn-wrapper {
  display: flex;
}
.nav-item,
.nav-active-item {
  font-size: 15px;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
}
.nav-active-item {
  color: rgb(157, 157, 157);
}
</style>
