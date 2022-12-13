import React from 'react'
import styled from 'styled-components'
import BusinessCard from './BusinessCard'

import image from "../images/place.png"

function Businesses() {
  return (
    <Container>
        <div class="title">
            <h1>Top Businesses</h1>
            <button className="view-lg">View all</button>
        </div>
        <Content>
            <BusinessCard 
                image="https://www.lakewood.org/files/assets/public/community-resources/recreation/carmody-recreation-center-exterior.jpg"
                name="Chitis"
                rating="4.5"
                category="Restaurant"
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
        </Content>

        <button className='view'>View all</button>
    </Container>
  )
}

export default Businesses

const Container = styled.div`
    margin: 20px;
    margin-top: 50px;
    margin-bottom: 70px;
    text-align: left;

    h1{
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 15px;

        @media (min-width: 760px) {
            font-size: 35px;
            margin-bottom: 15px;
            font-weight: bold;
        }
    }

    .title {
        display: flex;
        justify-content: space-between;
    }

    .view{
        margin-top: 30px;
        background: #FEC70A;
        width: 100%;
        height: 43px;
        border-radius: 20px;
        color: white;

        @media (min-width: 760px) {
            display: none;
        }
    }

    .view-lg{
        margin-top: 30px;
        margin-bottom: 15px;
        background: #FEC70A;
        width: 160px;
        height: 38px;
        border-radius: 20px;
        color: white;

        @media (max-width: 760px) {
            display: none;
        }
    }

    @media (max-width: 320px) {
        margin: 10px;
    }
`

const Content = styled.div`
    @media (min-width: 760px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
    }
`