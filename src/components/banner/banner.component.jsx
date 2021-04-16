import React from 'react'
import './banner.styles.scss'

import illustration from '../../assets/idea.png'

const Banner = (props) => {
    
    return(
        <div className='banner' ref={props.theref} >

            <div className='banner-text-box'>
                <h1 className='headline'>We develop <span className='brown'>solutions</span> for your <span className='blue'>growth</span></h1>

                <span className='tagline'>We create <span className='brown'>simple</span>, <span className='blue'>affordable</span>, and <span className='brown'>dedicated </span> platforms to deal with problems encountered in the ever changing world. </span>
            </div>

            <img className='illustration' src={illustration} alt='illustration' />
        </div>
    )
}

export default Banner