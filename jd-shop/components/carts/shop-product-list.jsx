

import React,{Component} from "react"
import ShopProduct from "./shop-product"
import Shop from "./shop";

export default class ShopProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data , sid,pcheck} = this.props

        return  <ul>
            {
                data.map((product,pid)=>{
                    return <ShopProduct  pcheck={pcheck} key={pid} data={product} sid={sid} pid={pid}/>

                })
            }
        </ul>
    }

}
