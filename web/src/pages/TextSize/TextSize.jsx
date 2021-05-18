import React from 'react'
import styled from 'styled-components'

const TextSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  gap: 0.5rem;

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const Text = {
    XS: styled.span`
      font-size: 0.75rem;
      line-height: 1rem;
    `,
    SM: styled.span`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `,
    BASE: styled.span`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    LG: styled.span`
      font-size: 1.125rem;
      line-height: 1.75rem;
    `,
    XL: styled.span`
      font-size: 1.25rem;
      line-height: 1.75rem;
    `,
    XL2: styled.span`
      font-size: 1.5rem;
      line-height: 2rem;
    `,
    XL3: styled.span`
      font-size: 1.875rem;
      line-height: 2.25rem;
    `,
    XL4: styled.span`
      font-size: 2.25rem;
      line-height: 2.5rem;
    `,
    XL5: styled.span`
      font-size: 3rem;
      line-height: 1;
    `,
    XL6: styled.span`
      font-size: 3.75rem;
      line-height: 1;
    `,
    XL7: styled.span`
      font-size: 4.5rem;
      line-height: 1;
    `,
    XL8: styled.span`
      font-size: 6rem;
      line-height: 1;
    `,
    XL9: styled.span`
      font-size: 8rem;
      line-height: 1;
    `,
}

const TEXT = '赤日炎炎似火烧，野田河道半枯焦。'

function autoScroll(ev) {
    const container = document.documentElement
    if (container.scrollTop) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    }
}

export default function TextSize(props) {

    return (
        <TextSizeContainer onDoubleClick={autoScroll}>
            <Text.XS>XS: {TEXT}</Text.XS>
            <Text.SM>SM: {TEXT}</Text.SM>
            <Text.BASE>BASE: {TEXT}</Text.BASE>
            <Text.LG>LG: {TEXT}</Text.LG>
            <Text.XL>XL: {TEXT}</Text.XL>
            <Text.XL2>2XL: {TEXT}</Text.XL2>
            <Text.XL3>3XL: {TEXT}</Text.XL3>
            <Text.XL4>4XL: {TEXT}</Text.XL4>
            <Text.XL5>5XL: {TEXT}</Text.XL5>
            <Text.XL6>6XL: {TEXT}</Text.XL6>
            <Text.XL7>7XL: {TEXT}</Text.XL7>
            <Text.XL8>9XL: {TEXT}</Text.XL8>
            <Text.XL9>9XL: {TEXT}</Text.XL9>
        </TextSizeContainer>
    )
}