

import React,{Component} from "react"
import ShopProduct from "./shop-product"

export default class ShopProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data , sid} = this.props

        return  <ul>
            {
                data.map((product,pid)=>{
                    return <ShopProduct key={pid} data={product} sid={sid} pid={pid}/>

                })
            }
        </ul>
    }

}
