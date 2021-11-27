<template>
  <div class="app">
    <div class="pr">
      <div class="border1 row">
        <br />
        <center>
          <div
            style="
              border: 1px dotted black;
              margin-top: 20px;
              width: 450px;
              border-radius: 20px;
            "
          >
            <h3>Barang Yang Akan Di Jual</h3>
          </div>
        </center>
        <br /><br />
        <br /><br />
        <form class="aa" @submit.prevent="add">
          <input type="hidden" v-model="form.id" />
          <label for=""><b> Nama Barang : </b></label><br />
          <input
            style="width: 370px"
            type="text"
            required
            v-model="form.namaBarang"
            placeholder="Masukkan Nama Barang..."
          /><br /><br />
          <label for=""><b> Jumlah : </b></label><br />
          <input
            style="width: 370px"
            type="number"
            required
            v-model="form.jumlah"
            placeholder="Masukkan Jumlah..."
          /><br /><br />
          <label for=""><b> Harga : </b></label><br />
          <input
            style="width: 370px"
            type="text"
            required
            v-model="form.harga"
            placeholder="Masukkan Harga..."
          /><br /><br />
          <label for=""><b> Gambar : </b></label><br />
          <input
            style="width: 370px"
            type="text"
            required
            v-model="form.gambar"
            placeholder="Masukkan Gambar..."
          /><br /><br />
          <button
            type="submit"
            v-show="!updateSubmit"
            style="margin: auto; width: 370px"
          >
            <b> Tambahkan </b>
          </button>
          <!-- jika tidak update maka tombol update tidak muncul -->
          <button
            type="button"
            v-show="updateSubmit"
            @click="update(form)"
            style="margin: auto; width: 370px"
          >
            <b> Update </b>
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </form>
        <br />
      </div>
    </div>

    <br /><br />
    <h1><b>Barang Yang Telah Di Jual</b></h1>
    <br />
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
                @click="edit(user)"
                type="button"
              >
                Edit
              </button>
              <button
                style="background-color: dodgerblue"
                class="btn btn-outline-light"
                @click="del(user)"
                type="button"
              >
                Hapus
              </button>
            </center>
          </div>
        </div>
      </div>
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
        this.$router.push("/barang");
      } else {
        alert("Pembelian Gagal");
      }
    },
  },
};
</script>

<style scoped>
.app {
  border: 1px solid black none;
  background-color: dodgerblue;
  color: black;
  padding-top: 50px;
  margin-top: 20px;
}
.pr {
  display: flex;
  background-color: white;
  margin-left: 400px;
  margin-right: 400px;
  border-radius: 20px;
}
.border1 {
  background-color: none;
}
.border2 {
  width: 40%;
  padding: 30px;
}
table {
  border: 1px solid white;
  padding: 20px;
  width: 800px;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  text-align: center;
  background-color: dodgerblue;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.aa {
  margin-left: 75px;
}
.flex-container {
  padding-left: 20px;
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  border-radius: 20px;
  padding: 20px;
  font-size: 30px;
}
/* The heart of the matter */

.horizontal-scrollable > .row {
  overflow-x: auto;
  white-space: nowrap;
}

.horizontal-scrollable > .row > .col-xs-4 {
  display: inline-block;
  border: 1px solid white;
  float: none;
}
/* Decorations */

.col-xs-4 {
  color: white;
  font-size: 24px;
  padding-bottom: 20px;
  padding-top: 18px;
}

.col-xs-4:nth-child(2n + 1) {
  background: darkblue;
}

.col-xs-4:nth-child(2n + 2) {
  background: darkblue;
}
</style>