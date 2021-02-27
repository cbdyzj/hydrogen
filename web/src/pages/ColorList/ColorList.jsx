import React from 'react'
import ColorBlock from './ColorBlock'
import colors from './colors'

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

export default function ColorList(props) {

    const colorBlocks = getColorList()
        .map(it => (<ColorBlock key={it.name} {...it} />))

    function handleDoubleClick(ev) {
        const box = document.documentElement
        if (box.scrollTop) {
            box.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' })
        }
    }

    return (
        <div onDoubleClick={handleDoubleClick}>
            {colorBlocks}
        </div>
    )
}
