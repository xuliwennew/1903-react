
import api from "../commons/api"
import {CARTURL} from "../commons/urlShemas"

export default  {


    getCartInfoByUserId(cb){
        api.get(CARTURL,cb)
    }
}
