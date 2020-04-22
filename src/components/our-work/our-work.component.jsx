import React from 'react';
import './our-work.styles.scss'
import { WORK_DETAILS } from './work-details'


import Work from '../work/work.component'

const OurWork = props => {
    return(
        <div className='our-work' ref={props.theref}>
            <h1 className='section-title'><span className='brown'>Our</span> <span className='blue'>Work</span></h1>
            <div className='work-directory'>
                {
                    WORK_DETAILS.map((item, index) => <Work key={index} icon={item.icon} discription={item.discription} name={item.name}/>)
                }
            </div>
        </div>
    )
}

export default OurWork;
