import React from 'react'

export default function ColorBlock(props) {

    function getTextColor() {
        if (!props.gradient) {
            switch (props.name) {
                case 'black':
                    return 'text-white'
                case 'white':
                    return 'text-black'
                default:
                    return ''
            }
        }
        return props.gradient <= 400 ? 'text-black' : 'text-white'
    }

    return (
        <div className={`flex justify-around items-center ${getTextColor()}`}
             style={{ height: '2rem', backgroundColor: props.color,padding:'0 24%' }}>
            <span className="capitalize text-shadow">{props.name}</span>
            <span className="uppercase text-shadow">{props.color}</span>
        </div>
    )
}