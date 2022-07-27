<template>
  <div class="search-bar-wrapper">
    <select>
      <option value="US">US</option>
      <option value="Philippines">Philippines</option>
    </select>
    <select>
      <option value="Business">Business</option>
      <option value="Technology">Technology</option>
    </select>

    <input type="text" placeholder="Keywords (Optional)" />
    <button>
      <img
        class="search-img"
        src="../assets/pngkey.com-lupa-png-872187.png"
        alt=""
      />
    </button>
    <!-- <img class="search-img" src="../assets/arrows.png" alt="" /> -->
    <button></button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-bar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a8a8a8;
  flex-wrap: wrap;
}
select {
  width: 150px;
  height: 30px;
  margin: 25px;
  margin-left: 0;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(133, 133, 133);
}

input {
  border-style: none;
  width: 150px;
  height: 30px;
  margin: 25px;
  margin-left: 0;
  margin-top: 15px;
  border-radius: 5px;
}
button {
  appearance: none;
  padding: 0;
  margin: 15px 10px 25px 0px;
  width: 30px;
  height: 30px;
  background-color: black;
  border: none;
}
.search-img {
  width: 15px;
  height: 17px;
}
</style>
