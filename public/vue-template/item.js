const SECTIONS = "all, white, red, blue, grees, pink";
const SIZELIST = "XS, S, M, L, LL, 3L"

Vue.component('item', {
  props: ['item'],
  template: `
    <section>
      <div class="row">
        <div class="card">
          <div class="card-divider">
            {{ item.title }}
          </div>
          <a :href="item.url" target="_blank"><img :src="item.image_url"></a>
          <div class="card-section">
            <p>{{ item.price }}</p>
            <select v-model="size">
              <option v-for="size in item.present_stock_size" :value="size">{{ size }}</option>
            </select>
            <a href="about.html" class="button">Add To Cart</a>
          </div>
        </div>
      </div>
    </section>
  `,
});

const vm = new Vue({
  el: '#app',
  data: {
    item: {title: "タイトル1", price: 2000, url: "", image_url: "./images/sample1.png", present_stock_size: ["S", "M"]},
    sections: SECTIONS.split(', '), // create an array of the sections
    sizelist: SIZELIST.split(', '), // create an array of the sections
    section: 'white', // set default section to 'home'
    size: 'M',
    loading: true,
    title: ''
  },
  mounted() {
    this.getItem('all');
  },
  methods: {
    getItem(section) {
      console.log("---アイテム取得---");
      this.loading = false;
    }
  },
});
