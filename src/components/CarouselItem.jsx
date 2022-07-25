import React from 'react'
import styled from "styled-components"

const CarouselItem = ({ image, name }) => {
    return (
        <Container>
            <a href="event-details#event">
                <img src={image} alt="events" />
                <p>{name}</p>
            </a>
        </Container>
    )
}

export default CarouselItem

const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    img {
        margin-top: 4rem;
        border-radius: 10px;
        height: 350px;
        width: 70%;
    }

    p {
        text-align: left;
        margin-top: 15px;
        font-weight: bold;
        font-size: 24px;
    }

    @media (max-width: 960px) {
        height: 250px !important;
        margin-top: 40px;
        height: 200px;
        width: 100%;

        img{
            margin-top: 1rem;
            border: 3px solid black;
            height: 200px;
            width: 100%;
        }

        p{
            margin-top: 10px;
            font-size: 18px;
        }
    }
`