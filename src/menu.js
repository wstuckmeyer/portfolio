import { bubble as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import Burger from './assets/icons8-menu_filled.png';

export default class MyMenu extends Component{
	render(){
		return(
 			<div className="App">
 			<img id='burger' src={Burger}/>
        		<Menu id="menu" width={'28%'}>
          			<a id="home" className="menu-item" href="/">Home</a>
          			<a onClick={ this.showSettings } className="menu-item" href="/work">My Work</a>
          			<a id="about" className="menu-item" href="/about">About Me</a>
          			
        
        		</Menu>
      		</div>
     	 )
    }
}