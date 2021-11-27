<template>
  <div class="album py-5 bg-light">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Member Admin</h1>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img
              src="https://i.pinimg.com/originals/c6/2e/0d/c62e0d3e9a34c74e84a0f7f952ce3695.jpg"
              alt=""
              width="100%"
              height="225"
            />
            <hr />
            <div class="card-body">
              <p class="card-text" style="text-align: center">
                Irvanda Ibrahim
                <br />
                Admin Utama
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style=""></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NeU-jbwXHZ6q1leMCU4XdfxKVDPsu8evzg&usqp=CAU"
              alt=""
              width="100%"
              height="225"
            />
            <hr />
            <div class="card-body">
              <p class="card-text" style="text-align: center">
                Risqi Ramandika
                <br />
                Customer Servive
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img
              src="https://i.pinimg.com/originals/73/0f/2c/730f2c2aaa92463b6bc31e5f5edb190d.jpg"
              alt=""
              width="100%"
              height="225"
            />
            <hr />
            <div class="card-body">
              <p class="card-text" style="text-align: center">
                Mala
                <br />
                Reseller Produk
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"></div>
              </div>
            </div>
          </div>
        </div>
                <div class="col">
          <div class="card shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00Yzm2fIQq2DeITbHl3xT5MxUznsEw2__zw&usqp=CAU"
              alt=""
              width="100%"
              height="225"
            />
            <hr />
            <div class="card-body">
              <p class="card-text" style="text-align: center">
                Azizi Khori Abdilah
                <br />
                Creator Navbar
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
              <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Database Costumer</h1>
              <p class="lead text-muted">
                Menampilkan Data Costumer Yang Registrasi. Untuk Admin Bisa
                Mengahapus Data Tersebut
              </p>
              <p>
                <a href="/dc" class="btn btn-primary my-2">Tekan</a>
              </p>
            </div>
          </div>
        </section>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,32L30,32C60,32,120,32,180,53.3C240,75,300,117,360,138.7C420,160,480,160,540,138.7C600,117,660,75,720,96C780,117,840,203,900,224C960,245,1020,203,1080,170.7C1140,139,1200,117,1260,128C1320,139,1380,181,1410,202.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "link",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
};
</script>