import React from 'react'
import styled from 'styled-components'

function Ad({text}) {
  return (
    <Container>
        <p><b>AD:</b> {text}</p>
    </Container>
  )
}

export default Ad

const Container = styled.div`
    background: #28282B;
    color: white;
    padding: 10px;
    margin-top: 15px;

    p{
      font-size: 13px;
    }

    @media (min-width: 768px) {
      padding: 20px;

      p{
        font-size: 15px;
      }
    }
`