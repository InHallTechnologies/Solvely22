import React from 'react';
import './work-partner.styles.scss'

const WorkPartner = props => {
    return(
        <div className='work-partner'>
            <img className='partner-logo' src={props.partnerLogo} alt={`${props.partnerName}-logo`} />

            <div className='partner-detail'>
                <span className='partner-name'>{props.partnerName}</span>
                <span className='founders-name'>{props.founders.split("||")[0]}</span>
                <span className='founders-name'>{props.founders.split("||")[1]}</span>
                <span className='partner-view'>{props.view}</span>
            </div>
        </div>
    );
}
export default WorkPartner;