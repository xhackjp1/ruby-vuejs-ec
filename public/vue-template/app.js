Vue.component('top-navigation', {
  template: `
  <div class="site-navbar-top">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
          <form action="" class="site-block-top-search">
            <span class="icon icon-search2"></span>
            <input type="text" class="form-control border-0" placeholder="Search">
          </form>
        </div>

        <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
          <div class="site-logo">
            <a href="index" class="js-logo-clone">Shoppers</a>
          </div>
        </div>

        <div class="col-6 col-md-4 order-3 order-md-3 text-right">
          <div class="site-top-icons">
            <ul>
              <li><a href="#"><span class="icon icon-person"></span></a></li>
              <li><a href="#"><span class="icon icon-heart-o"></span></a></li>
              <li>
                <a href="cart" class="site-cart">
                  <span class="icon icon-shopping_cart"></span>
                  <span class="count">2</span>
                </a>
              </li>
              <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
  `
})

Vue.component('sub-navigation', {
  template: `
  <nav class="site-navigation text-right text-md-center" role="navigation">
    <div class="container">
      <ul class="site-menu js-clone-nav d-none d-md-block">
        <li><a href="index">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="shop">Shop</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  `
})

Vue.component('main-cover', {
  template: `
  <div class="site-blocks-cover" style="background-image: url(images/hero_1.jpg);" data-aos="fade">
    <div class="container">
      <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
          <h1 class="mb-2">Finding Your Perfect Shoes</h1>
          <div class="intro-text text-center text-md-left">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
            <p>
              <a href="#" class="btn btn-sm btn-primary">Shop Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('big-sale', {
  template: `
  <div class="site-section block-8">
    <div class="container">
      <div class="row justify-content-center  mb-5">
        <div class="col-md-7 site-section-heading text-center pt-4">
          <h2>Big Sale!</h2>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-7 mb-5">
          <a href="#"><img src="images/blog_1.jpg" alt="Image placeholder" class="img-fluid rounded"></a>
        </div>
        <div class="col-md-12 col-lg-5 text-center pl-md-5">
          <h2><a href="#">50% less in all items</a></h2>
          <p class="post-meta mb-4">By <a href="#">Carl Smith</a> <span class="block-8-sep">&bullet;</span> September 3, 2018</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
          <p><a href="#" class="btn btn-primary btn-sm">Shop Now</a></p>
        </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('main-footer', {
  template: `
  <footer class="site-footer border-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="row">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">Navigations</h3>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li><a href="#">Sell online</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Shopping cart</a></li>
                <li><a href="#">Store builder</a></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li><a href="#">Mobile commerce</a></li>
                <li><a href="#">Dropshipping</a></li>
                <li><a href="#">Website development</a></li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li><a href="#">Point of sale</a></li>
                <li><a href="#">Hardware</a></li>
                <li><a href="#">Software</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h3 class="footer-heading mb-4">Promo</h3>
          <a href="#" class="block-6">
            <img src="images/hero_1.jpg" alt="Image placeholder" class="img-fluid rounded mb-4">
            <h3 class="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
            <p>Promo from  nuary 15 &mdash; 25, 2019</p>
          </a>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-5 mb-5">
            <h3 class="footer-heading mb-4">Contact Info</h3>
            <ul class="list-unstyled">
              <li class="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li class="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
              <li class="email">emailaddress@domain.com</li>
            </ul>
          </div>

          <div class="block-7">
            <form action="#" method="post">
              <label for="email_subscribe" class="footer-heading">Subscribe</label>
              <div class="form-group">
                <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email">
                <input type="submit" class="btn btn-sm btn-primary" value="Send">
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <p>
          Copyright &copy;
          All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  `
})

new Vue({
  el: '#app',
  data: {
    items: [{
      name: "item1",
      price: "2000",
      image_url: "women",
    }, {
      name: "item1",
      price: "2000",
      image_url: "women",
    }, {
      name: "item1",
      price: "2000",
      image_url: "women",
    }],
    results: [],
    message: "hello everyone!!",
  },
  mounted() {
    axios.get("http://localhost:4567/api/itemList")
      .then(response => {
        console.log(response.data.items);
        this.results = response.data.items
      });
  }
})