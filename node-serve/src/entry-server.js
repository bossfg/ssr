const createApp = require("./app.js");
const getData = function(){
  return new Promise((reslove, reject) => {
      let str = 'this is a async data!';
      reslove(str);
      reject('失败')
  }).catch((error) => {
    console.error(error);
  })
}
module.exports = (context) => {
  return new Promise(async (resolve,reject)=>{
    console.log('1')
    let {url}=context;
    // 数据传递
    context.propsData = 'this is a data from props!'
    context.asyncData =  await getData();
    let {app,router}=createApp(context);
    router.push(url);
    router.onReady(()=>{
      let matchedComponents = router.getMatchedComponents();
      console.log(matchedComponents,matchedComponents.length,!matchedComponents.length)
      if(!matchedComponents.length){
        return reject('失败');
      }
      resolve(app);
    }).catch((error) => {
      console.error(error);
    })
  },reject)
}