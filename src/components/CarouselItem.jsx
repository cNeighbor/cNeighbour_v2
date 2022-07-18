import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const CarouselItem = ({ image, name }) => {
    return (
        <Container>
            <Link to="event-details">
                <img src={image} alt="events" />
                <p>{name}</p>
            </Link>
        </Container>
    )
}

export default CarouselItem

const Container = styled.div `
    height: 450px !important;
    display: flex;
    flex-direction: column;

    img {
        margin-top: 4rem;
        border-radius: 10px;
        height: 350px;
        width: 280px;
    }

    p {
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        font-weight: bold;
        font-size: 24px;
    }

    @media (max-width: 960px) {
        height: 250px !important;
        margin-top: 40px;
        height: 200px;
        width: 200px;

        img{
            margin-top: 1rem;
            border: 3px solid black;
            border-radius: 50%;
            height: 200px;
            width: 200px;
        }

        p{
            margin-top: 10px;
            font-size: 18px;
        }
    }
`