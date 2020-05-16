import React from 'react'

import './work.styles.scss'

const Work = ({name, discription, icon}) => {
    return(
        <div className='work'>
        <img className='work-icon' src={icon} alt={`${name}-icon`} /> 
           <span className='work-description'>{discription}</span>
        </div>
    );
}

export default Work