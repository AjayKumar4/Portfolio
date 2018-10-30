import React from 'react';

import about from '../assets/images/about/creative.png';
import pratianLogo from '../assets/images/about/pratian-logo.png';
import epcetLogo from '../assets/images/about/epcet-logo.png';
import tcdLogo from '../assets/images/about/tcd-logo.png';
import spiderlogicLogo from '../assets/images/about/spiderlogic-logo.png';

export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>I've always had a passion for building and creating things. So when I graduated with a bachelor's in computer science & engineering from East Point College of Engineering & Technology, it was both an accomplishment and a dream. Next, it was developing applications at SpiderLogic India where I got to take concepts & requirement and turn them into products. Now I want to take my passion, education, and experience to develop websites and applications.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>
            <p className='text-faded'>My approach to UX/UI design and software development is to balance form and function. I think a design should be intuitive, visually balanced, and it allows the content to shine. Designs that create a great user experience are significant because they cause people to buy products from the same company over and over again. Additionally, implementing designs with code efficiency in mind will enhance performance, scalability, and overall product quality. With this approach, there is no limit on what can be achieved.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={tcdLogo} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my master's degree in <strong>Data Science & Engineering</strong> by learning & implementing <em>Data Science & Machine Learning </em>has laid the foundation for my <strong>data science</strong> career.
            </div>
        </div>
        <div className="col s12 m4">
                <img src={pratianLogo} alt="Pratian" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing Pratian's <em>Full Immersion Web Development & Testing Program </em>has laid the foundation for my <strong>software development</strong> career.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={spiderlogicLogo} alt="SpiderLogic" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                2 years of experience as a <strong>Software Engineer </strong>at <em>SpiderLogic India</em> has molded me into an engineer that can take a concept and develop it into a high volume product.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={epcetLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my bachelor's degree in <strong>Computer Science & Engineering</strong> by developing <em>Community Portal</em> web applications approach is how I acquired my logical and analytical skills.
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}