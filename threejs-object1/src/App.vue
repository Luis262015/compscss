<script setup>
import ThreeJS1 from "./components/ThreeJS1.vue";
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <h1>
          The Next <br />
          Dimension
        </h1>
        <p>Journey into the next domension with this crazy</p>
      </div>
    </div>
    <ThreeJS1 />
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  font-family: "Poppins", sans-serif;
  color: white;
}
.container {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
}
.content {
  display: flex;
  gap: 5em;
  width: 100%;
  padding-top: 3em;
  position: relative;
}
.content:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid white;
  transform: scaleX(1);
}
h1 {
  font-size: 4rem;
  width: 50vw;
  line-height: 97%;
  text-align: right;
}
h1,
p {
  flex-basis: 0;
  flex-grow: 1;
  /* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */
}

p {
  font-size: 1.3rem;
  width: 40vw;
}
</style>
