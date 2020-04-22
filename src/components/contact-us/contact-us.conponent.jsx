import React from 'react'

import './contact-us.styles.scss'

const ContactUs = props => {
    return(
        <div className='contact-us' ref={props.theref}>
            <h2 className='section-title'><span className='brown'>Contact</span> <span className='blue'>Us</span></h2>
            <div className='section-content'>
                <div className='text-and-social'>
                     <span className='office-address'>Solvely.22 Pvt. Ltd.</span>
                     <span className='office-address'>E802, Goyalco Orchid Lakeview Apartments,</span>
                     <span className='office-address'>Bellandur, Bengaluru - 560103</span>

                    <div className='social-links'>
                        <a href="#" className="social-icon fa fa-facebook"></a>
                        <a href="#" className="social-icon fa fa-twitter"></a>
                        <a href="#" className="social-icon fa fa-linkedin"></a>
                    </div>
                </div>

                <form className='contact-us-form'>
                    <input className='input' name='phone-number' placeholder='Enter your phone nunber...' required  type="tel"/>
                    <input className='input message' name='text-message' placeholder='Enter your message...'  type="text"/>
                    <input className='submt-button' type='submit' value='SUBMIT'/>
                </form>

            </div>

            <footer className='footer-notes'>&copy; Copyright 2020 InHall Technolgies Private Limited. All rights reserved.</footer>

        </div>
    )
}

export default ContactUs;