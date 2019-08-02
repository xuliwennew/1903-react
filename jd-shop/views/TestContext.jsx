import React from "react"
import OneContext from './OneContext'


class Three extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <OneContext.Consumer>
            {
                value=> (
                    <div>
                        <h1>从context中获取的数据  {value.title}</h1>
                        <h1>{this.props.data}</h1>
                    </div>
                )
            }
        </OneContext.Consumer>
    }

}

class Two extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Three data={this.props.data}></Three>
            </div>
        );
    }

}



class One extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:"这是Context"
        }
    }

    render() {
        return (
            <div>
                <Two data={this.state.title}/>
            </div>
        );
    }

}


export default One
