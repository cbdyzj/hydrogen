import React from 'react'

export default function Timer(props) {

    return (
        <div className="text-center">{new Date().toISOString()}</div>
    )
}