import React from 'react'

import './navigation-option.styles.scss'

const NavigationOption = props => {
    return(<span onClick = {props.handleClick} id={props.label} className={props.styles} >{props.label}</span>)
}

export default NavigationOption;