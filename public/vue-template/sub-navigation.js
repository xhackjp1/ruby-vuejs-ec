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

new Vue({
  el: '#components-demo'
})