import React from 'react'
import { postMessage, setListener } from './bridge.js'

setListener((message) => {
    console.log('receive message: ' + message)
    return 'OK'
})

export default function App(props) {

    function handleClickHydrogen(ev){
        postMessage('hydrogen')
    }

    return (
        <img onClick={handleClickHydrogen} id="hydrogen" src="./hydrogen.svg" alt="hydrogen" />
    )
}
