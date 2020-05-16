import React from 'react'
import './partners.styles.scss'

import illustration from '../../assets/partners.svg'
import PARTNERS_LIST from './partners-list';
import WorkPartner from '../work-partners.component/work-partner.component';

const Partner = props => {
    return(
        <div className = 'partners-directory' ref={props.theref}>
            <h3 className='section-title'><span className='brown'>Official</span> <span className='blue'>Partners</span></h3>

            <div className='partners-content'>
                <img className='partners-illustration' alt='partners-illustration' src={illustration} />
                <div className='partners-list'>
                    {PARTNERS_LIST.map((partner) => <WorkPartner partnerLogo={partner.logo} partnerName={partner.name} founders={partner.directors} view={partner.views}/>)}
                </div>
            </div>
        </div>
    );
}

export default Partner;