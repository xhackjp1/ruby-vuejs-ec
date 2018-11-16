const SECTIONS = "all, white, red, blue, grees, pink";
const SIZELIST = "XS, S, M, L, LL, 3L"

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
              <select v-model="size">
                <option v-for="size in item.present_stock_size" :value="size">{{ size }}</option>
              </select>
              <a href="item" class="button">Add To Cart</a>
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
      {title: "タイトル1", price: 2000, url: "", image_url: "./images/sample1.png", present_stock_size: ["S", "M"]},
      {title: "タイトル2", price: 2400, url: "", image_url: "./images/sample2.png", present_stock_size: ["S", "L"]},
      {title: "タイトル3", price: 2600, url: "", image_url: "./images/sample3.png", present_stock_size: ["S",]},
      {title: "タイトル4", price: 2000, url: "", image_url: "./images/sample4.png", present_stock_size: ["M"]},
      {title: "タイトル5", price: 2400, url: "", image_url: "./images/sample5.png", present_stock_size: ["M"]},
      {title: "タイトル6", price: 2600, url: "", image_url: "./images/sample6.png", present_stock_size: ["S", "M", "L"]},
      {title: "タイトル7", price: 2000, url: "", image_url: "./images/sample7.png", present_stock_size: ["S", "M"]},
      {title: "タイトル8", price: 2400, url: "", image_url: "./images/sample8.png", present_stock_size: ["S"]},
      {title: "タイトル9", price: 2600, url: "", image_url: "./images/sample9.png", present_stock_size: ["L", "LL", "3L"]},
    ],
    sections: SECTIONS.split(', '), // create an array of the sections
    sizelist: SIZELIST.split(', '), // create an array of the sections
    section: 'white', // set default section to 'home'
    size: 'M',
    loading: true,
    title: ''
  },
  mounted() {
    this.getItems('all');
  },
  methods: {
    getItems(section) {
      console.log("---アイテム取得---");
      this.loading = false;
    }
  },
});
