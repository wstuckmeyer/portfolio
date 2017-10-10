import React, {Component} from 'react';
import Masonry from 'react-masonry-component'
import HLogo from './assets/FinalLogo.png';
import Clean from './assets/greylogo.png';
export default class Projects extends Component{
	render(){
		return(
			<div>
				<div className='workHeader'>
					<h1 className='workTitle'>My Work</h1>
				</div>
				<div id='projects'>
					<div id='project1'>
						<img id='HLogo'src={HLogo}/>
						<div>
							<p className='project-name'>HarmonyUs</p>
							<p className='project-titles'>React-Native, Node.js, Firebase</p>
						</div>
						<div className='description'>
							<p>An IOS app to keep housemates organized</p>
								<p>• Updates in realtime with Firebase</p>
								<p>• Users can add themselves to a household, then
								add shopping lists, to-do lists, and expenses</p>
						</div>
					</div>
					<div id='project2'>
						<div>
							<p className='project-name'>NYClean</p>
							<p className='project-titles'>Ruby, Rails, GoogleMaps API, Isotope.js, PostgreSQL</p>
						</div>
						<div className='description'>
							<p>A web app to organize community cleanups in NYC</p>
								<p>•     Secure log-in with PostgreSQL and Devise</p>
                                <p>•     Filter by neighborhood with Isotope.js</p>
						</div>
						<img id='clean' src={Clean}/>
					</div>

				</div>
		</div>	
		)
	}
}