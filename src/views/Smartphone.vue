<template>
  <div class="smarthphone">
    <div class="card-group">
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q4Mi8yMjYvMjcwODczNTg4Ny83MjQ2MS9kNGFiYmE3YS81ZmY0MjQzNk5lMjY2ODVkNQ.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>SAMSUNG Galaxy A12 [6/128GB] - Black</h5>
                  <p>⭐⭐⭐⭐⭐ 5 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 2,499,000</p>
                      <p>: Cicilan 18 Bulan, Rp104,167 / Bulan</p>
                      <p>: 1 tahun garansi resmi</p>
                      <p>: 6/128 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q4Mi8yMjYvMjcwODczNTg4Ny83MjQ2MS9kNGFiYmE3YS81ZmY0MjQzNk5lMjY2ODVkNQ.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">SAMSUNG Galaxy A12 [6/128GB] - Black</h5>
          <p class="card-text">
            Rp2,499,000 <br /><del> Rp2,699,000 </del>&nbsp; -7% <br />
            ⭐⭐⭐⭐⭐(1459)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q4NS8yNi8xNTQ0OTk2ODYvMTg1OTgwLzFiOTY5YWExLzYxNDk2NjRjTjhlNTIzYzhj.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>SAMSUNG Galaxy A52s - Awesome Black</h5>
                  <p>⭐⭐⭐⭐⭐ 9 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 6,499,000</p>
                      <p>: Cicilan 24 Bulan, Rp120,153 / Bulan</p>
                      <p>: 1,5 tahun garansi resmi</p>
                      <p>: 8/256 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q4NS8yNi8xNTQ0OTk2ODYvMTg1OTgwLzFiOTY5YWExLzYxNDk2NjRjTjhlNTIzYzhj.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">
            SAMSUNG Galaxy A52s [8/256GB] 5G - Awesome Black
          </h5>
          <p class="card-text">
            Rp6,499,000 <br />
            ⭐⭐⭐⭐(538)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q3OS8yNTkvOTI5ODM4NDYyOC81MjI3Mi8yODM1NzFlNC82MTBhNGM0NE5lMDk0MWUyMQ.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>REALME C 11 (2021) 2+32 - GREY</h5>
                  <p>⭐⭐⭐⭐⭐ 4 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 1,249,000</p>
                      <p>: Cicilan 12 Bulan, Rp105,132 / Bulan</p>
                      <p>: 1 tahun garansi resmi</p>
                      <p>: 3/32 GB GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q3OS8yNTkvOTI5ODM4NDYyOC81MjI3Mi8yODM1NzFlNC82MTBhNGM0NE5lMDk0MWUyMQ.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">REALME C 11 (2021) 2+32 - GREY</h5>
          <p class="card-text">
            Rp1,249,000 <br /><del> Rp1,299,000 </del>&nbsp; -4% <br />
            ⭐⭐⭐⭐⭐(2673)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3QxMDAvOTUvMjgyMDM4NjY5MC80OTQ4Mi80ZjA5MjMwOS82MTg4ZTVlYk5hNjU0MzkxZg.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>Iphone 12 Pro Max 256GB - Silver</h5>
                  <p>⭐⭐⭐⭐⭐ 10 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 18,499,000</p>
                      <p>: Cicilan 24 Bulan, Rp 360,167 / Bulan</p>
                      <p>: 2 tahun garansi resmi</p>
                      <p>: 64/256 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3QxMDAvOTUvMjgyMDM4NjY5MC80OTQ4Mi80ZjA5MjMwOS82MTg4ZTVlYk5hNjU0MzkxZg.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Iphone 12 Pro Max 256GB - Silver</h5>
          <p class="card-text">
            Rp18,499,000 <br /><del> Rp22,999,000 </del>&nbsp; -20% <br />
            ⭐⭐⭐⭐(749)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>
    </div>
    <br />
    <div class="card-group">
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal17"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q3OS8xMzMvNzI2ODI0Mjc4Mi83MzU1My84NDAxZmYxMi82MGMzOWZhNE43MWEzNGQ0ZQ.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>VIVO Y12S 2021 3/32 NEW Blue 3/32GB</h5>
                  <p>⭐⭐⭐⭐⭐ 5 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 1,709,000</p>
                      <p>: Cicilan 16 Bulan, Rp102,143 / Bulan</p>
                      <p>: 1 tahun garansi resmi</p>
                      <p>: 3/32 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q3OS8xMzMvNzI2ODI0Mjc4Mi83MzU1My84NDAxZmYxMi82MGMzOWZhNE43MWEzNGQ0ZQ.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">VIVO Y12S 2021 3/32 NEW Blue 3/32GB</h5>
          <p class="card-text">
            Rp1,709,000 <br /><del> Rp1,799,000 </del>&nbsp; -5% <br />
            ⭐⭐⭐⭐(732)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal17"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal18"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q4Mi84NS84Nzc2MDczNTk2LzgxODYyMi9hMmQxM2I5Zi82MGVkNTQ1ME4wOTBkZGUwMw.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>SAMSUNG Galaxy A22 LTE [6/128GB] - Light Green</h5>
                  <p>⭐⭐⭐⭐⭐ 7 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 2,775,000</p>
                      <p>: Cicilan 12 Bulan, Rp120,167 / Bulan</p>
                      <p>: 1 tahun garansi resmi</p>
                      <p>: 6/128 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q4Mi84NS84Nzc2MDczNTk2LzgxODYyMi9hMmQxM2I5Zi82MGVkNTQ1ME4wOTBkZGUwMw.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">
            SAMSUNG Galaxy A22 LTE [6/128GB] - Light Green
          </h5>
          <p class="card-text">
            Rp2,775,000 <br /><del> Rp2,999,000 </del>&nbsp; -7% <br />
            ⭐⭐⭐⭐(584)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal18"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal19"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q3My8yMDQvMTAxNzYwNDU4MTEvMTQxMTIwL2EzODc3Zjc2LzYxMWExZjNkTmQzZTgxNzdk.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>REALME C21Y - 4+64GB - Cross Blue</h5>
                  <p>⭐⭐⭐⭐⭐ 4 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 1,699,000</p>
                      <p>: Cicilan 12 Bulan, Rp116,275 / Bulan</p>
                      <p>: 1 tahun garansi resmi</p>
                      <p>: 4/64 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q3My8yMDQvMTAxNzYwNDU4MTEvMTQxMTIwL2EzODc3Zjc2LzYxMWExZjNkTmQzZTgxNzdk.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">REALME C21Y - 4+64GB - Cross Blue</h5>
          <p class="card-text">
            Rp1,699,000 <br /><del> Rp1,799,000 </del>&nbsp; -6% <br />
            ⭐⭐⭐⭐⭐(3594)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal19"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal20"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ~ Description ~
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="clearfix">
                <img
                  src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q3My80Mi8yNjg5OTkwNTQyLzc1MzUyLzhjYWI0MGYvNWZmNDI0NTdONGE5OTg2MTU.jpg.dpg.webp"
                  class="col-md-6 float-md-end mb-3 ms-md-3"
                  alt=""
                />

                <div class="border2">
                  <h5>SAMSUNG Galaxy A12 [6/128GB] - Black</h5>
                  <p>⭐⭐⭐⭐⭐ 5 Review</p>

                  <div class="deskripsi" style="display: flex">
                    <div class="p1">
                      <p>Harga</p>
                      <p>Cicilan</p>
                      <br />
                      <p>Garansi</p>
                      <br />
                      <p>Capacity</p>
                    </div>
                    <div class="p2" style="margin-left: 20px">
                      <p>: Rp 2,499,000</p>
                      <p>: Cicilan 24 Bulan, Rp122,276 / Bulan</p>
                      <p>: 1,5 tahun garansi resmi</p>
                      <p>: 6/128 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="troli">Tambah ke Troli
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://id.360buyimg.com/Indonesia/s220x220_/amZzL3Q3My80Mi8yNjg5OTkwNTQyLzc1MzUyLzhjYWI0MGYvNWZmNDI0NTdONGE5OTg2MTU.jpg.dpg.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">SAMSUNG Galaxy A12 [6/128GB] - Green</h5>
          <p class="card-text">
            Rp2,499,000 <br /><del> Rp2,699,000 </del>&nbsp; -7% <br />
            ⭐⭐⭐⭐⭐(2254)
          </p>
        </div>
        <div class="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal20"
            style="margin-left: 55px"
          >
            Lebih Detail
          </button>
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
      users: [],
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
          this.users = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    troli() {
      alert("Barang berhasil ditambahkan ke Troli");
    },
  },
};
</script>