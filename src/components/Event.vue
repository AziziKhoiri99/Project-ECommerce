<template>
    <div class="container-xxl">
    <!-- ========================= SECTION MAIN  ========================= -->
    <section class="section-main padding-y">
    <main class="card">
        <div class="card-body">
    
    <div class="row">
        <aside class="col-lg col-md-3 flex-lg-grow-0">
            <nav class="nav-home-aside">
                <h3 class="title-category bg-primary text-white text-center p-2">Kategori</h3>
                <ul class="menu-category bg-blue p-2 text-white">
                    <li><a href="/fashion">Fashion and clothes</a></li>
                    <li><a href="/kecantikan">Beauty and Cosmetic</a></li>
                    <li><a href="/elektronik">Electronics and tech</a></li>
                    <li><a href="/smarthphone">Digital and Smartphone</a></li>
                    <li class="has-submenu"><a href="#">More items</a>
                        <ul class="submenu text-black">
                            <li><a href="#">Submenu name</a></li>
                            <li><a href="#">Great submenu</a></li>
                            <li><a href="#">Another menu</a></li>
                            <li><a href="#">Some others</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside> <!-- col.// -->
        <div class="col-md-9 col-xl-7 col-lg-7">
    
    <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
          <img src="assets/images/banners/slide1.jpg" alt="First slide"> 
    </div>
    <div class="carousel-item">
          <img src="assets/images/banners/slide2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
          <img src="assets/images/banners/slide3.jpg" alt="Third slide">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->	
    
        </div> <!-- col.// -->
        <div class="col-md d-none d-lg-block flex-grow-1">
            <aside class="special-home-right">
                <h6 class="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                
                <div class="card-banner border-bottom">
                  <div class="py-3" style="width:80%">
                    <h6 class="card-title">Men clothing</h6>
                    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                  </div> 
                  <img src="assets/images/items/1.jpg" height="80" class="img-bg">
                </div>
    
                <div class="card-banner border-bottom">
                  <div class="py-3" style="width:80%">
                    <h6 class="card-title">Winter clothing </h6>
                    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                  </div> 
                  <img src="assets/images/items/2.jpg" height="80" class="img-bg">
                </div>
    
                <div class="card-banner border-bottom">
                  <div class="py-3" style="width:80%">
                    <h6 class="card-title">Home inventory</h6>
                    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                  </div> 
                  <img src="assets/images/items/6.jpg" height="80" class="img-bg">
                </div>
    
            </aside>
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    
        </div> <!-- card-body.// -->
    </main> <!-- card.// -->
    
    </section>
    <!-- ========================= SECTION MAIN END// ========================= -->
    
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
    
    <!-- =============== SECTION DEAL =============== -->
    <div class="w">
		<div class="rechargePay_wrap J-floor" id="virtual_floor">
			<div class="rechargePay_title clearfix" size="7">
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|1" class="rp_title cur base-head "
					style="width:14%" data-urlType="IFRAME" data-url="//www.jd.id/pulsa/quickEntry/1">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAA1wAAABMALh39OwAAApo.png">
						<div class="config-icon  pay_saleIcon "></div>
					</div>
					<div class="pay_text">Isi Pulsa</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|2" class="rp_title  base-head "
					style="width:14%" data-urlType="IFRAME" data-url="//www.jd.id/pulsa/quickEntry/2">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAA6gAAAA8AFvCmlQAAAy0.png">
						<div class="config-icon  pay_saleIcon "></div>
					</div>
					<div class="pay_text">Paket Data</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|3" class="rp_title  " style="width:14%"
					data-urlType="NORMAL" data-url="https://www.jd.id/tiket-pesawat/">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAAUAAAAAcAO_jBIwAABUE.png">
						<div class="config-icon  pay_saleIcon "></div>
					</div>
					<div class="pay_text">Flight</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|4" class="rp_title  " style="width:14%"
					data-urlType="NORMAL" data-url="//www.jd.id/pln">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAAggAAAB4ANMSkiwAAAtQ.png">
						<div class="config-icon  pay_newIcon "></div>
					</div>
					<div class="pay_text">Tagihan</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|5" class="rp_title  " style="width:14%"
					data-urlType="NORMAL" data-url="https://www.jd.id/hotel/ ">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAAyQAAAAQAN-6EwgAAAlI.png">
						<div class="config-icon  pay_saleIcon "></div>
					</div>
					<div class="pay_text">Hotel</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|6" class="rp_title  " style="width:14%"
					data-urlType="NORMAL"
					data-url="https://www.jd.id/promotion/JD-Enjoy-Vacation/uVMrV46a53bgzYb8VZmoJAH3dLr.html">
					<div class="pay_icon">
						<img
							src="//id.360buyimg.com/Indonesia/amZzL3Q2Ny8xNTIvMjM5MjQxODk1My8xMjk5L2Y1ZTJhNzIyLzVmYjc4NzI1TjA0YWFlN2Yy.png">
						<div class="config-icon  pay_saleIcon "></div>
					</div>
					<div class="pay_text">Buy Now, Vacation Later</div>
					<div class="pay_line"></div>
				</a>
				<a target="_blank" clstag="pageclick|keycount|epi_home_virtual|7" class="rp_title  " style="width:14%"
					data-urlType="IFRAME" data-url="https://www.jd.id/virtual/googlePlay/index.html">
					<div class="pay_icon">
						<img src="//id.360buyimg.com/Indonesia/nHBfsgAAQQAAAAMAM-wSewAABEE.png">
						<div class="config-icon  pay_newIcon "></div>
					</div>
					<div class="pay_text">Kode Voucher Google Play</div>
					<div class="pay_line"></div>
				</a>
			</div>
			<div class="rechargePay_cont">
				<div class="cont show">
	
				</div>
			</div>
		</div>
	</div>
    <section class="padding-bottom">
     <div class="card card-deal">
         <div class="col-heading content-body">
          <header class="section-heading">
           <h3 class="section-title">Deals and offers</h3>
           <p>Hygiene equipments</p>
         </header><!-- sect-heading -->
         <div class="timer">
           <div> <span class="num">04</span> <small>Days</small></div>
           <div> <span class="num">12</span> <small>Hours</small></div>
           <div> <span class="num">58</span> <small>Min</small></div>
           <div> <span class="num">02</span> <small>Sec</small></div>
         </div>
       </div> <!-- col.// -->
       <div class="row no-gutters items-wrap">
        <div class="col-md col-6">
         <figure class="card-product-grid card-sm">
          <a href="#" class="img-wrap"> 
           <img src="assets/images/items/3.jpg"> 
          </a>
          <div class="text-wrap p-3">
               <a href="#" class="title">Summer clothes</a>
               <span class="badge badge-danger"> -20% </span>
          </div>
       </figure>
     </div> <!-- col.// -->
     <div class="col-md col-6">
       <figure class="card-product-grid card-sm">
        <a href="#" class="img-wrap"> 
         <img src="assets/images/items/4.jpg"> 
       </a>
       <div class="text-wrap p-3">
         <a href="#" class="title">Some category</a>
         <span class="badge badge-danger"> -5% </span>
       </div>
     </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="#" class="img-wrap"> 
       <img src="assets/images/items/5.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title">Another category</a>
       <span class="badge badge-danger"> -20% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="#" class="img-wrap"> 
       <img src="assets/images/items/6.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title">Home apparel</a>
       <span class="badge badge-danger"> -15% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="#" class="img-wrap"> 
       <img src="assets/images/items/7.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title text-truncate">Smart watches</a>
       <span class="badge badge-danger"> -10% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    </div>
    </div>
    
    </section>
    <!-- =============== SECTION DEAL // END =============== -->
    
    <!-- =============== SECTION 2 =============== -->
    <section class="padding-bottom">
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Electronics</h4>
    </header>
    
    <div class="card card-home-category">
    <div class="row no-gutters">
        <div class="col-md-3">
        
        <div class="home-category-banner bg-light-orange">
            <h5 class="title">Machinery items for manufacturers</h5>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
            <img src="assets/images/items/14.jpg" class="img-bg">
        </div>
    
        </div> <!-- col.// -->
        <div class="col-md-9">
    <ul class="row no-gutters bordered-cols">
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Well made electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/7.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Another demo text for item stuff goes here  </h6>
            <img class="img-sm float-right" src="assets/images/items/8.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/9.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Group of electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/10.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>	
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/11.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/12.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/1.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
    
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="#" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="assets/images/items/2.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
    </ul>
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    </div> <!-- card.// -->
    </section>
    <!-- =============== SECTION 2 END =============== -->
    
    
    
    <!-- =============== SECTION REQUEST =============== -->
    <!-- <section class="padding-bottom">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Request for Quotation</h4>
    </header>
    
    <div class="row">
        <div class="col-md-8">
    <div class="card-banner banner-quote overlay-gradient" style="background-image: url('assets/images/banners/banner9.jpg');">
      <div class="card-img-overlay white">
        <h3 class="card-title">An easy way to send request to suppliers</h3>
        <p class="card-text" style="max-width: 400px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt.</p>
        <a href="" class="btn btn-primary rounded-pill">Learn more</a>
      </div>
    </div>
        </div> col //
        <div class="col-md-4">
    
    <div class="card card-body">
        <h4 class="title py-3">One Request, Multiple Quotes</h4>
        <form>
            <div class="form-group">
                <input class="form-control" name="" placeholder="What are you looking for?" type="text">
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input class="form-control" placeholder="Quantity" name="" type="text">
                    
                    <select class="custom-select form-control">
                        <option>Pieces</option>
                        <option>Litres</option>
                        <option>Tons</option>
                        <option>Gramms</option>
                    </select>
                </div>
            </div>
            <div class="form-group text-muted">
                <p>Select template type:</p>
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" value="option1">
                   <span class="form-check-label">Request price</span>
                </label>
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" value="option2">
                  <span class="form-check-label">Request a sample</span>
                </label>
            </div>
            <div class="form-group">
                <button class="btn btn-warning">Request for quote</button>
            </div>
        </form>
    </div>
    
        </div> col //
    </div> row // 
    </section> -->
    <!-- =============== SECTION REQUEST .//END =============== -->
    
    
    <!-- =============== SECTION ITEMS =============== -->
    <section  class="padding-bottom-sm">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Recommended items</h4>
    </header>
    
    <div class="row row-sm">
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/2.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/3.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/4.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/5.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/7.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/9.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/4.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/5.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="card card-sm card-product-grid">
                <a href="#" class="img-wrap"> <img src="assets/images/items/7.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    </section>
    <!-- =============== SECTION ITEMS .//END =============== -->
    
    
    <!-- =============== SECTION SERVICES =============== -->
    <section  class="padding-bottom">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Trade services</h4>
    </header>
    
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="assets/images/posts/1.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Trade Assurance</h6>
                <p class="small text-uppercase text-muted">Order protection</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="assets/images/posts/2.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Pay anytime</h6>
                <p class="small text-uppercase text-muted">Finance solution</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="assets/images/posts/3.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Inspection solution</h6>
                <p class="small text-uppercase text-muted">Easy Inspection</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="assets/images/posts/4.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Ocean and Air Shipping</h6>
                <p class="small text-uppercase text-muted">Logistic services</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    
    </section>
    <article class="my-4">
        <img src="assets/images/banners/ad-sm.png" class="w-100">
    </article>
    </div>
</template>

<script>
export default {
  name: 'Event',
}
</script>