import React,{Component} from "react"
import ShopProductList from "./shop-product-list";

export default class Shop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data ,sid,pcheck} = this.props;

        return  <div className="shop-group-item">
            <div className="shop-name">
                <input type="checkbox"
                       defaultValue={data.checked}
                       defaultChecked={data.checked}
                       className={[data.checked?"checked":"unchecked"]} />
                    <h4>
                        <a href="#">{data.shopName}</a>
                    </h4>
                    <div className="coupons">
                        <span>领券</span>
                        <em>|</em>
                        <span>编辑</span>
                    </div>
            </div>
            <ShopProductList  pcheck={pcheck} data={data.products} sid={sid}/>
            <div className="shopPrice">
                本店总计：
                ￥<span className="shop-total-amount ShopTotal">16000</span>
            </div>
        </div>
    }

}
