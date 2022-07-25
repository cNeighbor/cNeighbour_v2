import React from 'react'
import styled from "styled-components"
import Jumbotron from './Jumbotron'

import Food from "../images/food.png"
import Sport from "../images/sport.png"
import Tech from "../images/tech.png"
import Shopping from "../images/shopping.png"
import School from "../images/school.png"
import Fashion from "../images/fashion.png"
import Health from "../images/health.png"
import Religion from "../images/religion.png"

const CategoriesLg = () => {
    return (
        <Container>
            <h1>Searching for?</h1>

            <Section>
                <Jumbotron 
                    title = "Food"
                    icon = {<img src={Food} width="60" alt="food-icon" />}
                />

                <Jumbotron 
                    title = "Sports"
                    icon = {<img src={Sport} width="50" alt="sport-icon" />}
                />

                <Jumbotron 
                    title = "Tech"
                    icon = {<img src={Tech} width="60" alt="tech-icon" />}
                />
                
                <Jumbotron 
                    title = "Shopping"
                    icon = {<img src={Shopping} width="60" alt="tech-icon" />}
                />

                <Jumbotron 
                    title = "School"
                    icon = {<img src={School} width="60" alt="tech-icon" />}
                />

                <Jumbotron 
                    title = "Fashion"
                    icon = {<img src={Fashion} width="60" alt="tech-icon" />}
                />

                <Jumbotron 
                    title = "Health"
                    icon = {<img src={Health} width="60" alt="tech-icon" />}
                />
                
                <Jumbotron 
                    title = "Religion"
                    icon = {<img src={Religion} width="50" alt="tech-icon" />}
                />
            </Section>
        </Container>
    )
}

export default CategoriesLg

const Container = styled.div `
    margin: 10rem 1rem 1rem 1rem;

    h1{
        font-size: 30px;
        font-weight: bold;
        color: goldenrod;
        text-align: center;
    }

    @media(max-width: 960px){
        margin: 3rem 0rem 0.5rem 0rem;

        h1{
            font-size: 30px;
        }
    }
`

const Section = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    min-height: 500px;
    background: whitesmoke;

    @media(max-width: 960px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`