import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Second extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return <div><h1>This is second page</h1><button onClick={this.props.changePageEvent} className="btn btn-primary">Go Back</button></div>;
    }
}
export default Second;