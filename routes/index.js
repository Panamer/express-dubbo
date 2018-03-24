/**
 * 只有register和 interfince都匹配上服务才会调用成功，出现 Dubbo service init done
 * 须等待初始化完毕才能正常使用，标志：Dubbo service init done
 * 入参格式：BaitiaoParametersVo是java的类名，map里是入参实体
 * const customerObj = {
        $class: 'com.gomeplus.baitiao.dubbo.bean.BaitiaoParametersVo', 
        $: {
            map:{
                'userNo':'795855009',
                'supplierCode':'1001'
            }
        }
    };
 */
const express = require('express');
const router = express.Router();
const znd = require('node-zookeeper-dubbo');

const opt = {
    application: {name: 'test'}, // 项目名称，必填
    register: '10.112.149:8080,10.112.179.50:8080,10.112.179.51:8080', // zookeeper服务地址，必填
    dubboVer: '2.5.5',  // dubbo版本，必填
    root:'dubbo',   // 注册到zookeeper上的根节点名称
    dependencies: { //  依赖的服务集，必填
        AuthBaseService: {
          interface: 'com.dubbo.QueryUserAccountInfoFacadeService', // 服务地址，必填
        //   version: '1.1.6-RELEASE', // 注册的服务版本
          group: 'uat', // 分组
          timeout: 10000    // 超时时间，默认6000
        }
    }
}
const Dubbo = new znd(opt);
router.get('/dubbo', function (req, res, next) {
    const customerObj = {
        $class: 'com.dubbo.bean.BaitiaoParametersVo',
        $: {
            map:{
                'userNo':'795855009',
                'supplierCode':'1001'
            }
        }
    };
    Dubbo.AuthBaseService.service(customerObj)
        .then(function (data) {
            res.send(data);
        }).catch(function (err) {
            res.send(err);
        })

});
module.exports = router;