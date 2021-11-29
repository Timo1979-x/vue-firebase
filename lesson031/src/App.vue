<template>
  <h1>Ninja reaction timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay"></Block>
</template>

<script>
import Block from "./components/Block.vue";
export default {
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 1000 + Math.random() * 3000;
      // console.log(this.delay);
    },
  },
  components: { Block },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
