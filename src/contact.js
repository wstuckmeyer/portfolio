import React, {Component} from 'react';
import Github from './assets/icons8-github_filled.png';
import Linkedin from './assets/icons8-linkedin_filled.png';
import Insta from './assets/icons8-instagram_new_filled.png';
import Twitter from './assets/icons8-twitter_filled.png';
import Mail from './assets/icons8-message_filled.png';
export default class Footer extends Component{
	render(){
		return(
			
			<div id='contactBody'>
				
					
					<a href='mailto:wstuckmeyer@gmail.com' ><img className='linkIcon'   src={Mail}/></a>

					<a target="_blank" href='https://github.com/wstuckmeyer'><img className='linkIcon' src={Github} /></a>
					
					<a 	target="_blank" href='https://www.linkedin.com/in/wstuckmeyer'><img className='linkIcon' src={Linkedin} /></a>
				
					<a	target="_blank" href='https://www.instagram.com/wstuckmeyer'><img className='linkIcon' src={Insta} /></a>
					<a target="_blank" href='https://www.twitter.com/wesstuckmeyer'><img className='linkIcon' src={Twitter} /></a>
				
				
				
			</div>
			
		)
	}
}