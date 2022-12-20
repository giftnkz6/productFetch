<template>
  <div class="container">
      <div class="row">
          <h1 class="display-1">Admin</h1>
      </div>
  </div>
  <!-- <table>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Surname</th>
      <th>Email Address</th>
    </tr>
    <tr v-for="result in results" :key="result.name">
      <td>{{ result.id }}</td>
      <td>{{ result.firstName }}</td>
      <td>{{ result.surname}}</td>
      <td>{{ result.email}}</td>
    </tr>
  </table> -->
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Surname</th>
      <th scope="col">Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="result in results" :key="result.id">
      <td>{{ result.id }}</td>
      <td>{{ result.firstName }}</td>
      <td>{{ result.surname}}</td>
      <td>{{ result.email}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["results"]),
  },
  methods: {
    ...mapActions(["fetchAllResults"]),
  },
  created() {
    this.fetchAllResults();
  },
};
</script>