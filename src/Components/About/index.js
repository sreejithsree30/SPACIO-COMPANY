

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

import "./index.css"

const About = () =>{

    return(
        <div className="about-container">
            <div className='about-cart-container'>
                <div className="about-left-cart">
                    <h5>We are <br /> SpacioTechtonics</h5>
                    <button>more on our expertise <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className='about-right-cart'>
                    <p>Innovation and technology should make life simple—not the other way around.</p>
                    <p>We built Spacio Techtonics to help architects and engineers build their dreams and realise them with 
                    <span className='about-right-spantop'> custom - programmed digital tools.</span></p>
                    <p>With diverse backgrounds of engineers with professional experience and projects across India, we offer 
                    <span className='about-right-spantop'> facade architecture, engineering and advisory services </span>to you to realise your dreams with confidence</p>

                    <span className='about-right-span'>Make your dreams grow with innovation that flows.</span>
                </div>
            </div>
            <p className='home-footer'>© SPACIO TECHTONICS | all rights reserved</p> 
        </div>
    )


}

export default About