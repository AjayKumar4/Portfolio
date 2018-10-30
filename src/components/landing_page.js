import React from 'react';
import AJ from './landing_page_svg';
import Icon from './icon';
import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
		<section id='home'>
				<div className="home-wrapper">
					<div className="left-ctn">
						<div className="left-ctn-description">
							<div className="extra-large">Hi,</div>
							<div className="large">I am
							<span>&nbsp;Ajay Kumar</span>,</div>
							<div className="large">full stack developer.</div>
						</div>
						<div className="btn-wrapper">
							<a  href="#about">
								<div className="btn-ctn" >
									<div className="btn-text">
										Explore More &gt;
									</div> 
								</div>
							</ a>
						</div>
					</div>
					<div className="right-ctn">
						<div className="aj-svg-wrapper">
							<div className="aj-svg-ctn">
								<AJ/>
							</div>
						</div>
					</div>
				</div>
				<section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Let's Connect!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">Obey the principles without being bound by them.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" href="https://github.com/AjayKumar4"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_blank" href="https://docs.google.com/viewer?url=https://github.com/AjayKumar4/AJ-Resume/raw/master/aj-resume.pdf"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" href="https://www.linkedin.com/in/nuajaykumar/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
        </section>
					
		</section>	
    );
}
