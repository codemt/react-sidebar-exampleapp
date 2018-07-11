import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
 class Home extends Component {

    constructor(props){

        super(props);
        this.state = {

              toggle : false 
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
}

showSettings (event) {
    event.preventDefault();
    alert('settings');
  }
  toggleSidebar (event) {
    event.preventDefault();
    this.setState({
        toggle : true
    })
    this.openSidebar();
  }
  openSidebar = () => {

        if(this.state.toggle){

           return (

            <div>
            <Menu onClick={this.openSidebar}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a  onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
          </Menu>   
            </div>


           )

        }

  }
  render() {
    return (
      <div>
          {this.openSidebar()}
            <h1> This is Home . </h1>
            <button onClick={this.toggleSidebar}> Open Sidebar </button> 
      </div>
    )
  }
};
export default Home;
