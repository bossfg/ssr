const Vue = require("vue");
const createRouter = require("./router")
module.exports = (context) => {
  const router = createRouter();
  const app = new Vue({
    router,
    created() {
      console.log('created')
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        console.log('mounted')
      }
    },
    data() {
      return {
        message: "hello,Vue SSR!",
        propsData: context.propsData,
        asyncData: context.asyncData
      }
    },
    template: `
    <div>
      <h1>{{message}}</h1>
      <p>{{asyncData}}</p>
      <p>{{propsData}}</p>
      <ul>
          <li>
              <router-link to="/">home</router-link>
          </li>
          <li>
              <router-link to="/about">about</router-link>
          </li>
      </ul>
      <router-view></router-view>
    </div>
    `
  });
  return {
    app,
    router
  }
}