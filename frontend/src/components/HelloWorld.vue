<script setup type="application/ecmascript">

import { ref } from 'vue'
import TestWorld from "@/components/TestWorld.vue";

import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";

const cols = ref([
  { field: "id", title: "ID", width: "90px", filter: false },
  { field: "name", title: "Name" },
  { field: "username", title: "Username" },
  { field: "email", title: "Email" },
  { field: "phone", title: "Phone" },
  { field: "date", title: "Date", type: "date" },
  { field: "active", title: "Active", type: "bool" },
  { field: "age", title: "Age", type: "number" },
  { field: "address.city", title: "Address" },
  { field: "company.name", title: "Company" },
]);

const rows = ref([
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    date: "Tue Sep 27 2022 22:19:57",
    age: 10,
    active: true,
  },
]);

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <TestWorld/>

  <vue3-datatable :rows="rows" :columns="cols"> </vue3-datatable>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
