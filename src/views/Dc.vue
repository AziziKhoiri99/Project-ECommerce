<template>
  <div class="container">
    <div>
      <table
        class="table table-success table-striped"
        v-for="data in users"
        :key="data.id"
      >
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">No Hp</th>
            <th scope="col">Nama Toko</th>
            <th scope="col">Gender</th>
            <th scope="col">TTL</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Irvan_ibra</td>
            <td>Baim</td>
            <td>irvndibhm354@gmail.com</td>
            <td>(+62) 8964 6344 200</td>
            <td>Pdi.Ip</td>
            <td>Male</td>
            <td>3 Mei 2005</td>
          </tr>
          <tr>
            <th>2</th>
            <td>{{ data.username }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.hp }}</td>
            <td>{{ data.toko }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.tanggal }}</td>
            <td>
              <button @click="del(user)" type="button">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <a href="/link" class="btn btn-primary my-2">Kembali</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        username: "",
        name: "",
        email: "",
        hp: "",
        toko: "",
        gender: "",
        tanggal: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.username = "";
        this.form.name = "";
        this.form.email = "";
        this.form.hp = "";
        this.form.toko = "";
        this.form.gender = "";
        this.form.tanggal = "";
      });
    },
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
        this.load();
        let index = this.data.indexOf(form.name);
        this.data.splice(index, 1);
      });
    },
  },
};
</script>