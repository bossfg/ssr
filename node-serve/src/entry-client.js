const createApp = require("./app");
let {app,router}=createApp({});
router.onReady(()=>{
  console.log('2')
  app.$mount("#app")
});