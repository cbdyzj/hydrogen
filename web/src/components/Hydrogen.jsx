import React from 'react'
import hydrogen from '../images/hydrogen.svg'

export default function Hydrogen(props) {

    function handleClick(ev) {
        if (typeof props.onClick === 'function') {
            props.onClick(ev)
        }
    }

    return (
        <div id="hydrogen">
            <img onClick={handleClick} src={hydrogen} alt="hydrogen" />
            <div className="text-center text-black">
                {props.children}
            </div>
        </div>
    )
}