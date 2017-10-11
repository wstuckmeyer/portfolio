import React, {Component} from 'react';
import Masonry from 'react-masonry-component'
import HLogo from './assets/FinalLogo.png';
import Clean from './assets/greylogo2.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
export default class Projects extends Component{
	render(){
		return(
			<div>
				<div className='workHeader'>
					<Zoom><h1 className='workTitle'>My Work</h1></Zoom>
				</div>
				<div id='projects'>
					<Fade duration={3000} delay={200}><div id='project1'>
						<img id='HLogo' className='logoimg'src={HLogo}/>
						<div>
							<p className='project-name'>HarmonyUs</p>
							<p className='project-titles'>React-Native, Node.js, Firebase</p>
						</div>
						<div className='description'>
							<p>An IOS app to keep housemates organized</p>
							<a target="_blank" className='projectlink' href="https://github.com/wstuckmeyer/HarmonyUs">Github</a>
								<p>• Updates in realtime with Firebase</p>
								<p>• Users add themselves to a household, then add shopping lists, to-do lists, and expenses</p>
						</div>
					</div></Fade>
					<Fade duration={3000} delay={400}>
					<div id='project2'>
						<img id='clean' className='logoimg'src={Clean}/>
						<div id='p2'>
							<p className='project-name'>NYClean</p>
							<p className='project-titles'>Ruby, Rails, GoogleMaps API</p>
							
							<p className='project-titles'>Isotope.js, PostgreSQL</p>
						</div>
						<div className='description'>
							<p>A web app to organize community cleanups in NYC</p>
								<a target="_blank" className='projectlink' href="https://drive.google.com/file/d/0B6CrmsXBcZ7QSWI2S2UwYllhbEk/view">Preview</a> | 
							  <a target="_blank" className='projectlink' href='https://github.com/wstuckmeyer/HarmonyUs'>Github</a>
								<p>•     Secure log-in with PostgreSQL and Devise</p>
                                <p>•     Filter by neighborhood with Isotope.js</p>
						</div>
						
					</div>
					</Fade>
				</div>
		</div>	
		)
	}
}