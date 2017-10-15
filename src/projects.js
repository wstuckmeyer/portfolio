import React, {Component} from 'react';
import Masonry from 'react-masonry-component'
import HLogo from './assets/Screen.png';
import Clean from './assets/Group.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Modal from 'react-modal';
export default class Projects extends Component{
	constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
	render(){
		return(
			<div>
				<div className='workHeader'>
					<Zoom><h1 className='workTitle'>My Work</h1></Zoom>
				</div>
				<div id='projects'>
					<Fade duration={3000} delay={200}><div id='project1'>
						<img id='HLogo' className='logoimg'src={HLogo}/>
						<div id='p1'>
							<p className='project-name'>HarmoniUs</p>
							<p className='project-titles'>React-Native, Node.js</p><p className='project-titles'> Firebase</p>
						</div>
						<div className='description' id='p1descrip'>
							<p>An IOS app to keep housemates organized</p>
							<a target="_blank" className='projectlink' href="https://github.com/wstuckmeyer/HarmonyUs">Github</a> | <a className='projectlink' onClick={this.openModal}>Prototype</a>
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
						<div className='description' id='p2descrip'>
							<p>A web app to organize community cleanups in NYC</p>
								<a target="_blank" className='projectlink' href="https://drive.google.com/file/d/0B6CrmsXBcZ7QSWI2S2UwYllhbEk/view">Preview</a> | <a target="_blank" className='projectlink' href='https://github.com/wstuckmeyer/HarmonyUs'>Github</a>
								<p>•     Secure log-in with PostgreSQL and Devise</p>
                                <p>•     Filter by neighborhood with Isotope.js</p>
                                <p>•	GoogleMaps shows map of where the project is happening.</p>
						</div>
						
					</div>
					</Fade>
				</div>
				<Modal
          			isOpen={this.state.modalIsOpen}
          			onAfterOpen={this.afterOpenModal}
         			onRequestClose={this.closeModal}
          			className={{
          				base: 'resModal'
          			}}
          			contentLabel="Example Modal"
        			>
 
          			<iframe src="https://marvelapp.com/6h35fc7?emb=1" width="452" height="901" allowTransparency="true" frameborder="0"></iframe>
        		</Modal>
		</div>	
		)
	}
}