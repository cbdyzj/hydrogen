import React from 'react'
import styled from 'styled-components'

const TextFontContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TEXT_ZH = '赤日炎炎似火烧，野田河道半枯焦。'
const TEXT_EN = 'The quick brown fox jumps over the lazy dog.'

const TextBlockContainer = styled.div`
  padding: .5rem;
`

const Head3 = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
`

const Text = styled.span`
  display: block;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: ${props => props.font};
`

function TextBlock(props) {

    return (
        <TextBlockContainer>
            <Head3>{props.name}</Head3>
            {props.zh && <Text font={props.name}>{TEXT_ZH}</Text>}
            {props.en && <Text font={props.name}>{TEXT_EN}</Text>}
        </TextBlockContainer>
    )
}

export default function TextFont(props) {
    return (
        <TextFontContainer>
            <TextBlock name="STFangsong" en zh />
            <TextBlock name="Helvetica" en />
        </TextFontContainer>
    )
}