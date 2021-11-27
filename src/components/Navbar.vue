<template>
  <div>
    <div>
      <img
        src="https://id.360buyimg.com/Indonesia/amZzL3Q5NC83Ni8yNTIzMzI1NTE4LzEyNTU5OS9lNzc3NDMzMS82MTdmZGY2Y044NzJiMGIzYQ.jpg"
        alt=""
        width="100%"
        style="max-height: 100px"
      />
    </div>
        <div class="nav justify-content-end bg-light">
      <a class="nav-link active" aria-current="page" href="/reg" v-if="logout === null">
        <i class="fas fa-lock"></i> Daftar &nbsp; |</a
      >
      <a class="nav-link" href="/login" v-if="logout === null">
        <i class="fas fa-user"></i> Masuk &nbsp; |</a
      >
      <a class="nav-link" href="/" v-if="logout !== null" @click="out">
        <i class="fas fa-sign-out-alt"></i> Keluar &nbsp; |</a
      >
      <a href="//vip.jd.id/" class="nav-link">JD Loyalty &nbsp; |</a>
      <a href="/costumer" class="nav-link" v-if="roles === 'costumer'"
        >Toko Anda &nbsp; |</a
      >
      <a href="/beli" class="nav-link" v-if="roles === 'costumer'"
        >Pesanan Saya &nbsp; |</a
      >
      <a href="/profil" class="nav-link" v-if="roles === 'costumer'"
        >Profile &nbsp; |</a
      >
      <a href="/dc" class="nav-link" v-if="roles === 'admin'"
        >Profile Costumer &nbsp; |</a
      >
      <a href="/link" class="nav-link" v-if="roles === 'admin'"
        >Profile &nbsp; |</a
      >
      <a href="//www.jd.id/help/homepage.html" target="_blank" class="nav-link"
        >Bantuan &nbsp; |</a
      >
      <a href="//affiliate.jd.id/" class="nav-link" target="_blank"
        >Affiliate &nbsp; |
      </a>
      <a href="//seller.jd.id" target="_blank" class="nav-link"
        >Seller &nbsp; |
      </a>
      <a href="//www.jd.com/id" class="nav-link" target="_blank"
        >JD.com Main Site &nbsp; |</a
      >
      <a class="nav-link" href="#">Unduh Aplikasi &nbsp;</a>
    </div>
 <header class="section-header">
    <section class="header-main border-bottom">
        <div class="container-xxl">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-3 col-md-12">
                    <a href="/" class="brand-wrap">
                       <img src="https://www.marketeers.com/wp-content/uploads/2021/03/JDID_4.png" alt="" width="100%" style="max-height: 100px" >
                    </a> <!-- brand-wrap.// -->
                </div>
                <div class="col-xl-6 col-lg-5 col-md-6">
                    <div class="input-group w-100 ps-5">
                      <input type="text" class="form-control" placeholder="I'm shopping for ..." aria-label="Recipient's username" aria-describedby="basic-addon2" style="background-color: lightgray">
                      <button class="btn btn-primary input-group-text" id="basic-addon2"><i class="fas fa-search"></i></button>
                    </div>
                  <!-- search-wrap .end// -->
                </div> <!-- col.// -->
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="widgets-wrap float-end">
                        <div class="widget-header">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span class="notify">1</span>                                    
                                </div>
                                <small class="text"> Cart </small>
                            </a>
                        </div>
                    </div> <!-- widgets-wrap.// -->
                </div> <!-- col.// -->
            </div> <!-- row.// -->
        </div> <!-- container.// -->
    </section> <!-- header-main .// -->
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    out() {
      sessionStorage.clear();
    },
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
  },
  userRole() {
    return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
  },
};
</script>

<style scoped>
a {
  font-size: 90%;
  color: black;
  padding: 5px;
  font-weight: 300;
}
</style>