<template>
  <div>
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan Registrasi</p>
      <br />
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username..."
        />
        <br />
        <label>Nama</label>
        <input
          type="text"
          name="name"
          v-model="name"
          class="form_login"
          placeholder="name sesuai nama lengkap..."
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          v-model="email"
          class="form_login"
          placeholder="Email..."
        />
        <label>No Hp</label>
        <input
          type="text"
          name="hp"
          v-model="hp"
          class="form_login"
          placeholder="hp..."
        />
        <label>Nama Toko</label>
        <input
          type="text"
          name="toko"
          v-model="toko"
          class="form_login"
          placeholder="toko..."
        />
        <form>
          <label><b>Gender &nbsp;&nbsp;&nbsp;&nbsp;: </b></label
          >&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            v-model="gender"
            id="gender"
            name="gender"
            value="male"
          />
          Male&nbsp;&nbsp;
          <input
            type="radio"
            v-model="gender"
            id="gender"
            name="gender"
            value="female"
          />
          Female
        </form>
        <br />
        <form action="">
          <label style=""><b>TTL &nbsp;:</b></label
          >&nbsp;&nbsp;&nbsp;
          <input type="date" v-model="tanggal" name="tanggal" />
        </form>
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        />
        <br />
        <input
          type="button"
          @click="login()"
          class="tombol_login"
          value="LOGIN"
        />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      hp: "",
      toko: "",
      gender: "",
      tanggal: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        name: this.name,
        email: this.email,
        hp: this.hp,
        toko: this.toko,
        gender: this.gender,
        tanggal: this.tanggal,
        password: this.password,
        role: "costumer",
      };
      const register = await axios.post("http://localhost:3000/users", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}

.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}

.kotak_login {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 350px;
  background: rgb(235, 235, 235);
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
}

label {
  font-size: 11pt;
}

.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.tombol_login {
  background: #46de4b;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}

.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>