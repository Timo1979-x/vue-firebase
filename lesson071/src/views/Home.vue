<template>
  <div class="home">home</div>
  <p>{{ name }} - {{ age }}</p>
  <button @click="handleClick">click me</button>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "Mario";
    let age = 20;

    const handleClick = () => console.log("you clicked me");
    return { age, name, handleClick };
  },
};
</script>
