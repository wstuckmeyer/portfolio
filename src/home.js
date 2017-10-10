import React, {Component} from 'react';
import covervideo from './MergedVideo.mp4'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
export default class Home extends Component{
	render(){
		return(
		<div>	
		<div id='words'>
         	<Fade duration={3000} delay={100}><a id='title'>Wesley Stuckmeyer</a></Fade><br/>
        	 <Fade duration={3000} delay={500}><a id='subtitle'>Mobile and Web Developer</a></Fade>
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
