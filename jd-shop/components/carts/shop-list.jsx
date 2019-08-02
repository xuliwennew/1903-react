

import React,{Component} from "react"
import Shop from "./shop";

export default class ShopList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data,pcheck } = this.props //店铺列表
        return <div className="shopping">
            {
                data.map((shop,sid)=>{
                    return <Shop pcheck={pcheck} data={shop} sid={sid} key={sid}/>
                })
            }
        </div>
    }

}
