import React from 'react'
import { postMessage, setListener } from './bridge'
import ColorBlock from './pages/ColorBlock'
import colors from './utils/colors'

setListener((message) => {
    console.log('receive message: ' + message)
    return 'OK'
})

function getColorList() {
    return Object.entries(colors)
        .flatMap(([name, item]) => {
            if (typeof item === 'string') {
                return {
                    name,
                    color: item,
                }
            } else {
                return Object.entries(item)
                    .map(([gradient, item]) => {
                        return {
                            name: `${name} ${gradient}`,
                            color: item,
                            gradient,
                        }
                    })
            }
        })
}

export default function App(props) {

    const colorBlocks = getColorList()
        .map(it => (<ColorBlock key={it.name} {...it} />))

    return (
        <div>
            {colorBlocks}
        </div>
    )
}
