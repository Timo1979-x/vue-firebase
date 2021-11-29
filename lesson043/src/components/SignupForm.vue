<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" @input="imp" />
    <label>password:</label>
    <input type="password" required v-model="password" />
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web develop</option>
      <option value="designer">Web designer</option>
    </select>
    <div class="terms" required>
      <input type="checkbox" id="terms" v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>
    <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="alice" v-model="names" />
      <label>Alice</label>
    </div>
    <div>
      <input type="checkbox" value="mike" v-model="names" />
      <label>Mike</label>
    </div>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div
      class="pill"
      v-for="(skill, i) in skills"
      :key="skill"
      @click="delSkill(i)"
    >
      {{ skill }}
    </div>
  </form>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "mario",
      password: "",
      role: "",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    imp() {
      console.log("input");
    },
    addSkill(e) {
      console.log(e.key);
      if (e.key != ",") return;
      let newSkill = this.tempSkill.trim().toUpperCase().slice(0, -1);
      this.tempSkill = "";
      if (newSkill == "" || this.skills.includes(newSkill)) {
        return;
      }
      this.skills.push(newSkill);
    },
    delSkill(i) {
      this.skills.splice(i, 1);
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
