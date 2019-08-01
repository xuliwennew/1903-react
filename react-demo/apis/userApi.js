/**
 *  模块说明: xxxx
 *  作者: xxx
 *  创建时间: xxx
 *
 *  修改人：xx
 *  修改原因：xxx
 *  修改时间: xx
 */

import api from "../commons/api"
import {USERURL} from "../commons/ajaxUrl"


export default  {


    /**
     * 获取用户信息
     * @param cb 返回的数据
     */
    getUser(cb){
        //修改原因: xxxx
        api.get(USERURL,cb)
    },


}
