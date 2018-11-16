import MyComponent from 'MyComponent.vue'
new Vue({
  el: '#app',
  components: {
    MyComponent
  }
})
// グローバルもOK
Vue.component(MyComponent)