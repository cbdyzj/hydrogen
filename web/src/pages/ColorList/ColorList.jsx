import React from 'react'
import ColorBlock from './ColorBlock.jsx'
import colors from './colors.js'

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

function autoScroll(ev) {
    const container = document.documentElement
    if (container.scrollTop) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    }
}

export default function ColorList(props) {

    const colorBlocks = getColorList()
        .map(it => (<ColorBlock key={it.name} {...it} />))

    return (
        <div onDoubleClick={autoScroll}>
            {colorBlocks}
        </div>
    )
}
