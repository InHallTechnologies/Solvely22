import React from 'react';

import illustration from '../../assets/gaming_.svg'
import background from '../../assets/810.jpg'

import ContactUs from '../../components/contact-us/contact-us.conponent'

import './about-us.styles.scss'

class AboutUs extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {
        return(
            <div className='about-us'>
                <img className='background' src ={background} alt='bg' />
                <h1 className = 'title'><span className='brown'>About</span> <span className='blue'>Us</span></h1>
    
                <div className = 'content'>
                    <span className='text-content'>
                    {`We identify market problems, create and deliver solutions. Founded by two college buds - Lokesh Srivastava & Salil Kumar,
    Solvely.22 is an aspiring company which aims to bring people and technology together to create ingenious web and cloud based solutions, 
        with a commitment to seamless user experience and exceptional customer service.`}</span>
                    <span className='text-content'>
                          We're here to help. Hope you'll give us the chance.
                    </span>
                
                    <img src = {illustration} className='illustration' alt='nighbour' /> 
                </div>
    
                  <ContactUs/>
            </div>
        )
    }
}

export default AboutUs;