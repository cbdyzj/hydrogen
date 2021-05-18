import React from 'react'
import styled from 'styled-components'

const SM = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 640px;
  padding: 8px;
  color: #fff;
  font-size: 32px;
  background-color: #fb7185;
  writing-mode: vertical-lr;
`

const MD = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 768px;
  padding: 8px;
  color: #fff;
  font-size: 32px;
  background-color: #c084fc;
  writing-mode: vertical-lr;
`

const LG = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 1024px;
  padding: 8px;
  color: #fff;
  font-size: 32px;
  background-color: #60a5fa;
  writing-mode: vertical-lr;
`
const XL = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 1280px;
  padding: 8px;
  color: #fff;
  font-size: 32px;
  background-color: #2dd4bf;
  writing-mode: vertical-lr;
`

const XL2 = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 1536px;
  padding: 8px;
  color: #fff;
  font-size: 32px;
  background-color: #fb923c;
  writing-mode: vertical-lr;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`

function autoScroll(ev) {
    const container = document.documentElement
    if (container.scrollTop) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    }
}

export default function Container(props) {

    return (
        <FlexBox onDoubleClick={autoScroll}>
            <SM>SM: 640px</SM>
            <MD>MD: 768px</MD>
            <LG>LG: 1024px</LG>
            <XL>XL: 1280px</XL>
            <XL2>2XL: 1536px</XL2>
        </FlexBox>
    )
}