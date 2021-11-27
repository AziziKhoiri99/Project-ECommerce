<template>
  <div class="app">
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col" v-for="user in barang" :key="user.id">
          <div class="p-3 border bg-light">
            <img :src="user.gambar" width="180px" height="180px" /><br />
            <p>
              <b> {{ user.namaBarang }} </b><br />
              Harga &nbsp; : Rp.{{ user.harga }}<br />Jumlah : {{ user.jumlah }}
            </p>
            <center>
              <button
                style="background-color: dodgerblue"
                class="btn btn-outline-light"
                @click="f()"
                type="button"
              >
                Beli
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="container horizontal-scrollable">
        <div class="row text-center">
          <div class="col-xs-4" v-for="user in barang" :key="user.id">
            <img :src="user.gambar" width="200px" height="200px" /><br />
            <p>
              <b> {{ user.namaBarang }} </b><br />
              Harga &nbsp; : Rp.{{ user.harga }}<br />Jumlah : {{ user.jumlah }}
            </p>
            <center>
              <button
                style="background-color: dodgerblue"
                class="btn btn-outline-light"
                @click="f()"
                type="button"
              >
                Beli
              </button>
            </center>
          </div>
        </div>
      </div>
    </div> -->
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
        namaBarang: "",
        jumlah: "",
        harga: "",
        gambar: "",
      },
      barang: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/barang")
        .then((res) => {
          this.barang = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/barang/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.namaBarang = ""),
          (this.form.jumlah = ""),
          (this.form.harga = "");
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namaBarang = user.namaBarang;
      this.form.jumlah = user.jumlah;
      this.form.harga = user.harga;
      this.form.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/barang/" + form.id, {
          namaBarang: this.form.namaBarang,
          jumlah: this.form.jumlah,
          harga: this.form.harga,
          gambar: this.form.gambar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namaBarang = "";
          this.form.jumlah = "";
          this.form.harga = "";
          this.form.gambar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/barang/" + user.id).then((res) => {
        this.load();
        let index = this.barang.indexOf(form.namaBarang);
        this.barang.splice(index, 1);
      });
    },
    f() {
      let beli = confirm(
        "Apakah anda igin membeli prodak ini klik Ok untuk melanjutkan"
      );
      if (beli) {
        alert(
          "Ok sedang di Proses dan jangan lupa pilih berapa yang anda inginkan.."
        );
        this.$router.push("/beli");
      } else {
        alert("Pembelian Gagal");
      }
    },
  },
};
</script>

<style scoped>
</style>