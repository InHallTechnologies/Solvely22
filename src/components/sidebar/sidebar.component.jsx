import React from 'react'

import './sidebar.styles.scss'
import NavigationOption from '../navigation-option/navigation-option.component';

import close from '../../assets/close.png'
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {

  
    handleClick = (event) => {
        
        switch(event.target.id){
            case 'HOME':
                this.props.allRef.banner.current.scrollIntoView({behavior: 'smooth'})
                
                break;
            
            case 'TEAM':
                this.props.allRef.team.current.scrollIntoView({behavior: 'smooth'})
                break;
        
            case 'OUR WORK':
                this.props.allRef.ourwork.current.scrollIntoView({behavior: 'smooth'})
                break;
                
            case 'WORK WITH US':
                this.props.allRef.contactus.current.scrollIntoView({behavior: 'smooth'})
                break;

            case 'ABOUT US':
                this.props.history.push('/about-us')
                break

            default :
                this.props.allRef.team.current.scrollIntoView({behavior: 'smooth'})

        }



        this.props.optionClicked();
        
       
    }

    render() {
        return(
            <div className='sidebar'>
                <img className='close-menu' src={close} alt='close-menu' onClick= {this.props.clickHandler}/>
                {
                    this.props.menuItems.map((item, index) => <NavigationOption handleClick = {this.handleClick}  key={this.props.menuItems[index]} styles='side-bar' label = {item}/>)             
                }
            </div>
        )
    }
}

export default withRouter(Sidebar);