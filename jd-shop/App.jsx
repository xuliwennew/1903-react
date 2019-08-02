import React,{Component} from "react"
import ShopCart from "./views/shop-cart";
import One from "./views/TestContext";
import OneContext from "./views/OneContext"


export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return  <OneContext.Provider value={{title:"从上下文共享的数据"}}>
            <One/>
        </OneContext.Provider>
    }

}
