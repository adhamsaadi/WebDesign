import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './Second';
import * as serviceWorker from './serviceWorker';

class Controller extends Component{

  constructor(props) {
    super(props);



    // Create a new function to schedule updates.
    //  [anchorEl, setAnchorEl] = React.useState(null);
     this.state ={page :     <App changePageEvent={this.secondPageHandler } /> };
// 
    this.firstPageHandler = this.firstPageHandler.bind(this);
    this.secondPageHandler = this.secondPageHandler.bind(this);


  } 
  secondPageHandler = (event) =>{
    this.setState({page: <Second changePageEvent={this.firstPageHandler } />})
  }
  firstPageHandler = (event) =>{
    this.setState({page: <App changePageEvent={this.secondPageHandler } />})
  }
  render(){
    return(
    <React.StrictMode>
    {this.state.page}

  </React.StrictMode>
    );
  }
}
export default Controller;