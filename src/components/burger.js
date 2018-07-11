import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
 class Burger extends Component {
    constructor(props){

            super(props);
            this.state = {

                  sidebar : false  
            }
    }

    showSettings (event) {
        event.preventDefault();
        alert('settings');
      }
      openSidebar (event) {
        event.preventDefault();

      }
      


  render() {
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
export default Burger;