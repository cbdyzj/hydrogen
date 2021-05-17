import React from 'react'
import hydrogen from '../images/hydrogen.svg'

export default function Hydrogen(props) {

    function handleClick(ev) {
        if (typeof props.onClick === 'function') {
            props.onClick(ev)
        }
    }

    return (
        <div className="text-center">
            <img onClick={handleClick} src={hydrogen} alt="hydrogen" />
            {props.children && <div className="text-center text-black">
                {props.children}
            </div>}
        </div>
    )
}