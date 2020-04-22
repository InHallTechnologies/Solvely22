import React from 'react'
import './team-member.styles.scss'

const TeamMember = ({imageUrl, name, views, position}) => {
    return(
        <div className='team-member'>
            <img className='member-photo' src={imageUrl} alt={`${name}-display`} />

            <div className='member-details' >
                <h3 className='member-name'>{name}</h3>
                <span className='member-position'>{position}</span>
                <span className='member-views'>{views}</span>
            </div>
        </div>
    )
}

export default TeamMember