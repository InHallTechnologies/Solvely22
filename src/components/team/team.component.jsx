import React from 'react'

import team from '../../assets/team-illustration.svg'

import './team.styles.scss'
import TEAM_MEMBERS from './team-members'
import TeamMember from '../team-member/team-member.component'

const Team = props => {
    return(
        <div className='team' ref={props.theref}>
            <h1 className='section-title'><span className='brown'>Meet</span> The <span className='blue'>Team</span></h1>
            <div className='team-content'>
                <img className='team-illustration' src={team} alt='team-illustration'/>
                <div className='team-document'>
                    {
                        TEAM_MEMBERS.map((member, index) => <TeamMember key={index} imageUrl={member.imageUrl} name={member.name} views={member.views} position={member.position} />)
                    }
                </div>
            </div>
        </div>
    )
}


export default Team;