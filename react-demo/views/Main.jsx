import React,{Component} from "react"
import Hello from "../components/hello/Hello"
import userApi from "../apis/userApi"
import MyLoading from "../components/MyLoading";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }


    componentWillMount(){
        userApi.getUser(data=>{
            console.log(data)
            this.setState({
                data:data
            })
        })
    }


    render() {

        if(this.state.data.code){
            return (
                <div>
                    <h1>{this.state.data.code}</h1>
                    <Hello/>
                </div>
            );
        }else {
            return <MyLoading/>
        }

    }

}
