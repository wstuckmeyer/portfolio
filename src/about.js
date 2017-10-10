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
				<h1 className="workTitle">About Me</h1>
			</div>
			
			<div id='aboutContent'>
<div id='aboutMeText'>
					<p>Hi! I'm Wesley.</p>
					<p>I am a Full Stack Web Developer with an acute eye for design. I pride myself on my ability to consistently expand my coding skills and stay on top of current design trends. Great code needs great design.</p>

					<p>	My varied background in customer service has equipped me with the teamwork skills necessary to work in any environment. I am highly responsive to client needs and am committed to helping people realize their vision.</p>

					<p>	I’m currently learning Objective-C and Swift, and look forward to creating something new with it soon!</p>

					<a id='resumebtn' onClick={this.openModal}>Click for resume</a>
				</div>
			
				<div className='logos'>
					<p className='stack'>Front-end</p>
					<div className='front-end'>
						<img id='logo1' src={HTML}/>
						<img id='logo2' src={CSS}/>
						<img id='logo3' src={Native}/>
						<img id='logo4' src={JS}/>
					</div>
					<p className='stack'>Back-End</p>
					<div className="back-end">
						<img id='logo5' src={Node}/>
						<img id='logo6' src={Ruby}/>
						<img id='logo7' src={Postgres}/>
						<img id='rails' src={Rails}/>
					</div>
					<div>
						<img id='logo9' src={Github}/>
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