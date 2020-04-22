import React from 'react'

import './work.styles.scss'

const Work = ({name, discription, icon}) => {
    return(
        <div className='work'>
           <div className='title-section'>
               {/* <h2 className='work-title'>{name}</h2> */}
               <img className='work-icon' src={icon} alt={`${name}-icon`} /> 
           </div>
           
           <span className='work-description'>{discription}</span>
        </div>
    );
}

export default Work