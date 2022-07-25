import React from 'react'
import styled from 'styled-components'
import Map from "../images/map.webp"

const Locate = () => {
    return (
        <Container>
            <BackgroundImg>
                <img src={Map} />
            </BackgroundImg>

            <Logo>
                Find a place🔎
            </Logo>

            <p className="text-white mt-2 text-center text-xl">With Campus Neighbour, locate anywhere within the campus.</p>

            <Form className="flex justify-center mt-5">
                <input type="text" className="inputField" placeholder="Enter the Place.." />
                <input type="submit" className="button" value="Search" />
            </Form>
        </Container>
    )
}

export default Locate

const Container = styled.div `
    position: relative;
    font-family: times new roman;
`
const BackgroundImg = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Logo = styled.div `
    text-align: center;
    margin-top: 200px;
    font-size: 70px;
    font-weight: 700;
    color: white;

    @media (max-width: 960px){
        font-size: 45px;
    }
`

const Form =  styled.div `
    display: flex;

    .inputField {
        width: 60%;
        height: 60px;
        border-radius: 8px;
    }

    .button {
        margin-left: 20px;
        width: 150px;
        height: 60px;
        border-radius: 8px;
        background: #67b77c;
        cursor: pointer;
        color: white;
        font-size: 20px;
    }

    @media (max-width: 960px) {
        margin: 1rem;

        .inputField {
            width: 70%;
        }

        .button {
            width: 30%;
        }
    }
`