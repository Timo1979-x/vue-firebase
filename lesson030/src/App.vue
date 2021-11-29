<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal1">
    <Modal theme="sale" @close="showModal1 = false">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModal2">
    <Modal @close="showModal2 = false">
      <h1>This is second modal</h1>
    </Modal>
  </teleport>
  <p>Welcome!</p>
  <button @click="showModal1 = true">Open modal 1</button>
  <button @click="showModal2 = true">Open modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      title: "My first Vue app :)",
      showModal1: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  components: { Modal },
};
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
