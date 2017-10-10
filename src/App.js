import React, { Component } from 'react';
import covervideo from './MergedVideo.mp4'
import './App.css';
import { bubble as Menu } from 'react-burger-menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import MyMenu from './menu';
import Work from './projects';
import About from './about';
import Footer from './contact';

class App extends Component {
  showSettings (event) {
    event.preventDefault();
   
  }
  render() {
    return (
      <BrowserRouter>
     <div>
      <Route exact={true} path='/' render={()=>(
          <div className="App">
            <MyMenu/>
            <Home/>
          </div>
        )}
       />
       <Route exact={true} path='/work' render={()=>(
          <div className='App'>
            <MyMenu/>
            <Work/>
            <Footer/>
          </div>
        )}/>
       <Route exact={true} path='/about' render={()=>(
        <div className='App'>
          <MyMenu/>
          <About/>
          <Footer/>
        </div>
        )}/>
      
       </div>
     </BrowserRouter> 
      
      
    );
    
  }
}

export default App;
