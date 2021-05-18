import React from 'react'
import hydrogen from '../images/hydrogen.svg'

export default function Hydrogen(props) {

    function handleClick(ev) {
        if (typeof props.onClick === 'function') {
            props.onClick(ev)
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <img onClick={handleClick} src={hydrogen} alt="hydrogen" />
            {props.children && <div style={{ textAlign: 'center', color: '#000' }}>
                {props.children}
            </div>}
        </div>
    )
}