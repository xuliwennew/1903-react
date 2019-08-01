

import React,{Component} from "react"
import Shop from "./shop";

export default class ShopList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data } = this.props //店铺列表
        return <div className="shopping">
            {
                data.map((shop,sid)=>{
                    return <Shop data={shop} sid={sid} key={sid}/>
                })
            }
        </div>
    }

}
