import React, {Component} from "react"
import ShopList from "../components/carts/shop-list";
import ShopFooter from "../components/carts/shop-footer";
import ShopHeader from "../components/commons/shop-header";
import "../assets/carts.css"
import cartApi from "../apis/cartApi";
import MyLoading from "../components/MyLoading";

export default class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartInfo: {} //购物车对象
        }
        this.shopCartSelected = this.shopCartSelected.bind(this)
    }

    componentWillMount() {
        cartApi.getCartInfoByUserId(data => {
            let total= this.countCartPrice(data)
            data.totalPrice = total
            this.setState({
                cartInfo: data
            })
        })
    }

    /**
     * 统计购物车的所有选中商品价格之和
     */
    countCartPrice(cartInfo) {
        let total = 0;
        cartInfo.shops.forEach((shop, sid) => {
            shop.products.forEach((product, pid) => {
                if (product.checked) {
                    total += product.price * product.num
                }
            })
        })
        return total
    }

    /**
     * 全选，反选
     */
    shopCartSelected(){
        console.log("xxxx")
        //第1步。copy 购物车 更新view
        let newCartInfo = this.state.cartInfo
        //第2步，先从state取出 cartinfo.checked
        let checked = !newCartInfo.checked;
        //设置true false
        newCartInfo.checked = checked;
        console.log(checked)
        newCartInfo.shops.forEach((shop,sid)=>{
            shop.checked = checked;
            console.log(shop.checked)
            shop.products.forEach((product,pid)=>{
                product.checked = checked
            })
        })
        let total= this.countCartPrice(this.state.cartInfo)
        newCartInfo.totalPrice = total
        //更新view
        this.setState({
            cartInfo:newCartInfo
        })



    }

    render() {
        if (this.state.cartInfo.shops) {
            return <React.Fragment>
                <ShopHeader/>
                <ShopList data={this.state.cartInfo.shops}/>
                <ShopFooter ccheck={this.shopCartSelected} data={this.state.cartInfo}/>
            </React.Fragment>;
        } else {
            return <MyLoading/>
        }
    }

}
