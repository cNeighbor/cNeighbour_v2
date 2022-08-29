import React from 'react'
import styled from 'styled-components'
import Card from './Card'

import image from "../images/place.png"

function Places() {
  return (
    <Container>
        <h1>Popular places</h1>
        <Card 
            image={image}
            name="Jerry Mariot Hotels"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />

        <button className='view'>View all</button>
    </Container>
  )
}

export default Places

const Container = styled.div`
    margin: 20px;
    text-align: left;

    h1{
        font-size: 25px;
    }

    .view{
        margin-top: 30px;
        background: #FFC70A;
        width: 100%;
        height: 43px;
        border-radius: 20px;
        color: white;
    }
`