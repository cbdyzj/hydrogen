import React from 'react'
import styled from 'styled-components'

const ColorName = styled.span`
  text-transform: capitalize;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.10);
`

const ColorValue = styled.span`
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.10);
`

const ColorBlockBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  padding: 0 24%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

export default function ColorBlock(props) {

    function getTextColor() {
        if (!props.gradient) {
            switch (props.name) {
                case 'black':
                    return 'white'
                case 'white':
                    return 'black'
                default:
                    return ''
            }
        }
        return props.gradient <= 400 ? 'black' : 'white'
    }

    return (
        <ColorBlockBox textColor={getTextColor()} backgroundColor={props.color}>
            <ColorName>{props.name}</ColorName>
            <ColorValue>{props.color}</ColorValue>
        </ColorBlockBox>
    )
}