import React, {Component} from 'react';
import Modal from 'react-modal';
import PDF from './assets/icons8-pdf_filled.png';
import Resume2 from './WesleyResumePDF.pdf';
import HTML from './assets/icons8-html_5.png';
import CSS from './assets/icons8-css3.png';
import Github from './assets/icons8-git.png';
import JS from './assets/icons8-javascript_filled.png';
import Node from './assets/icons8-nodejs.png';
import Postgres from './assets/icons8-postgreesql.png';
import Native from './assets/icons8-react_native_filled.png';
import Ruby from './assets/icons8-ruby_programming_language.png';
import Rails from './assets/railslogo.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

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
				<Zoom><h1 className="workTitle">About Me</h1></Zoom>
			</div>
			
			<div id='aboutContent'>
			
			<div id='aboutMeText'>
					<Fade duration={3000} delay={200}><p>Hi! I'm Wesley.</p></Fade>
					<Fade delay={400} duration={3000}><p>I am a Full Stack Web Developer with an acute eye for design. I pride myself on my ability to consistently expand my coding skills and stay on top of current design trends. Great code needs great design.</p></Fade>

					<Fade duration={3000} delay={600}><p>	My varied background in customer service has equipped me with the teamwork skills necessary to work in any environment. I am highly responsive to client needs and am committed to helping people realize their vision.</p></Fade>

					<Fade duration={3000} delay={800}><p>	I’m currently learning Objective-C and Swift, and look forward to creating something new with it soon!</p></Fade>

					<Fade duration={3000} delay={1000}><a id='resumebtn' onClick={this.openModal}>Click for resume</a></Fade>
				</div>
				
				<div className='logos'>
					<Fade duration={3000} delay={300}><p className='stack'>Front-end</p></Fade>
					<Fade duration={3000} delay={300}><div className='front-end'>
						<img className='logosall' id='logo1' src={HTML}/>
						<img className='logosall' id='logo2' src={CSS}/>
						<img className='logosall' id='logo3' src={Native}/>
						<img className='logosall' id='logo4' src={JS}/>
					</div></Fade>
					<Fade duration={3000} delay={600}><p className='stack'>Back-End</p></Fade>
					<Fade duration={3000} delay={600}><div className="back-end">
						<img className='logosall' id='logo5' src={Node}/>
						<img className='logosall' id='logo6' src={Ruby}/>
						<img className='logosall' id='logo7' src={Postgres}/>
						<img className='logosall' id='rails' src={Rails}/>
					</div></Fade>
					<div>
						<Fade duration={3000} delay={600}><img className='logosall' id='logo9' src={Github}/></Fade>
					</div>
					
				</div>
				
				
				
				<div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
          	base: 'resModal'
          }}
          contentLabel="Example Modal"
        >
 
          <embed src={Resume2} width="100%" height="100%" type='application/pdf'/>
          
         
        </Modal>
      </div>
			</div>
			</div>
		)
	}
}