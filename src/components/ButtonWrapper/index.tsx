import React from 'react'
import { propTypes } from '../../utils/interfaces';
import "./styles.css"
export const ButtonWrapper = (props:propTypes) => {
  return (
    <div className='navbarButtonWrapper'>
        {props.children}
    </div>
  )
}
