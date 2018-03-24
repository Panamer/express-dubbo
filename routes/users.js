var express = require('express');
var router = express.Router();
var nzd =require('node-zookeeper-dubbo');
/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send('成功调用');
});
router.get('/dubbo', function(req, res, next) {
  res.send('成功调用dubbo');
});
//   var opt={
//     application:{name:'dubbo-test'},
//     register:'10.143.117.18:2181', // zookeeper url
//     dubboVer:'2.5.3.6',
//     root:'dubbo',
//     path: 'org.cf.myfen.service.auth.authbaseservice',
//     dependencies:{
//       authbaseservice:{
//         interface:'org.cf.myfen.service.auth.authbaseservice',
//         version:'LATEST',
//         timeout:6000,
//         group:'fen-server' // dubbo group（Product，Dev，Test）
//     }
//   }
// }
//   const customerObj = {
//     $class: 'com.xxx.XXXDTO',
//     $: {
//       a: 1,
//       b: 'test',
//       c: {$class: 'java.lang.Long', $: 123}
//     }
//   };
  const Dubbo = new nzd();
//   console.log(Dubbo.authbaseservice)


//   router.get('/foo',(req,res)=>{
//     req.header("Authorization", "Bearer e07ce721-dffb-4672-ab20-70a84cb7a880")    
//       Dubbo.authbaseservice
//         .authCollect({'$class': 'java.lang.Long', '$': '10000000'},customerObj)
//         .then(data=>res.send(data))
//         .catch(err=>res.send(err))
//   })


module.exports = router;
