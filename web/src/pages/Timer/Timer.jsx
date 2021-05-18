import React from 'react'
import styled from 'styled-components'

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function Timer(props) {

    return (
        <CenterBox>
            {new Date().toISOString()}
        </CenterBox>
    )
}