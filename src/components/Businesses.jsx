import React from 'react'
import styled from 'styled-components'
import BusinessCard from './BusinessCard'

import image from "../images/place.png"

function Businesses() {
  return (
    <Container>
        <h1>Top Businesses</h1>

        <BusinessCard 
            image="https://www.lakewood.org/files/assets/public/community-resources/recreation/carmody-recreation-center-exterior.jpg"
            name="Chitis"
            rating="4.5"
            category="Restaurant"
            duration="All day"
        />

        <BusinessCard 
            image="https://www.fairhopeal.gov/home/showpublishedimage/1449/636881499928800000"
            name="Virah's Court"
            rating="4.5"
            category="Sport"
            duration="All day"
        />

        <BusinessCard 
            image="https://sportsfacilities.com/wp-content/uploads/2020/01/4-Rec-Center-Innovations-1024x683.jpeg"
            name="Springfield Hotels"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />

        <BusinessCard 
            image={image}
            name="Coffee cafe"
            rating="4.5"
            category="Restaurant"
            duration="All day"
        />

        <button className='view'>View all</button>
    </Container>
  )
}

export default Businesses

const Container = styled.div`
    margin: 20px;
    margin-top: 50px;
    text-align: left;

    h1{
        font-size: 25px;
        margin-bottom: 25px;
    }

    .view{
        margin-top: 30px;
        background: #FEC70A;
        width: 100%;
        height: 43px;
        border-radius: 20px;
        color: white;
    }

    @media (max-width: 320px) {
        margin: 10px;
    }
`