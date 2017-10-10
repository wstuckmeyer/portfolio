import React, {Component} from 'react';
import covervideo from './MergedVideo.mp4'
export default class Home extends Component{
	render(){
		return(
		<div>	
		<div id='words'>
         	<a id='title'>Wesley Stuckmeyer</a><br/>
        	 <a id='subtitle'>Mobile and Web Developer</a>
        </div>
        	<video
        id='background-video'
        autoPlay
        loop
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
          zIndex: -199
        }}
        src={covervideo}

      >
      
      </video>
      </div>
	

			)
	}
}
