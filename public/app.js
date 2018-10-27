const SECTIONS = "white, red, blue, grees, pink";

Vue.component('item-list', {
  props: ['items'],
  template: `
    <section>
      <div class="row">
        <div class="columns large-3 medium-6" v-for="item in items">
          <div class="card">
            <div class="card-divider">
              {{ item.title }}
            </div>
            <a :href="item.url" target="_blank"><img :src="item.image_url"></a>
            <div class="card-section">
              <p>{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

const vm = new Vue({
  el: '#app',
  data: {
    items: [
      {title: "タイトル1", price: 2000, url: "", image_url: "./images/sample1.png"},
      {title: "タイトル2", price: 2400, url: "", image_url: "./images/sample2.png"},
      {title: "タイトル3", price: 2600, url: "", image_url: "./images/sample3.png"},
      {title: "タイトル4", price: 2000, url: "", image_url: "./images/sample4.png"},
      {title: "タイトル5", price: 2400, url: "", image_url: "./images/sample5.png"},
      {title: "タイトル6", price: 2600, url: "", image_url: "./images/sample6.png"},
      {title: "タイトル7", price: 2000, url: "", image_url: "./images/sample7.png"},
      {title: "タイトル8", price: 2400, url: "", image_url: "./images/sample8.png"},
      {title: "タイトル9", price: 2600, url: "", image_url: "./images/sample9.png"},
    ],
    sections: SECTIONS.split(', '), // create an array of the sections
    section: 'white', // set default section to 'home'
    loading: true,
    title: ''
  },
  mounted() {
    //this.getPosts('home');
  },
  methods: {
    getItems(section) {
      //
    }
  },
});
