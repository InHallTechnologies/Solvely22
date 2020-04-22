import React from 'react'
import './banner.styles.scss'

import illustration from '../../assets/2911196-removebg-preview.png'

const Banner = (props) => {
    
    return(
        <div className='banner' ref={props.theref} >

            <div className='banner-text-box'>
                <h1 className='headline'>We develop <span className='brown'>solutions</span> for your <span className='blue'>growth</span></h1>

                <span className='tagline'>We help you to grow by providing devoted platforms to deal with problems encountered in the ever-changing world. </span>
            </div>

            <img className='illustration' src={illustration} alt='illustration' />
        </div>
    )
}

export default Banner