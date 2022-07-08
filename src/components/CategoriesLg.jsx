import React from 'react'
import styled from "styled-components"
import Jumbotron from './Jumbotron'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCutlery, faFootball, faForward, faGamepad, faKitMedical, faLaptopCode, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const CategoriesLg = () => {
    return (
        <Container>
            <h1>Categories</h1>

            <Section>
                <Jumbotron 
                    title = "Food"
                    icon = {<FontAwesomeIcon icon={faCutlery} />}
                />

                <Jumbotron 
                    title = "Sports"
                    icon = {<FontAwesomeIcon icon={faFootball} />}
                />

                <Jumbotron 
                    title = "Technology"
                    icon = {<FontAwesomeIcon icon={faLaptopCode} />}
                />
                
                <Jumbotron 
                    title = "Shopping"
                    icon = {<FontAwesomeIcon icon={faShoppingBag} />}
                />

                <Jumbotron 
                    title = "School"
                    icon = {<FontAwesomeIcon icon={faBook} />}
                />

                <Jumbotron 
                    title = "Gaming"
                    icon = {<FontAwesomeIcon icon={faGamepad} />}
                />

                <Jumbotron 
                    title = "Health"
                    icon = {<FontAwesomeIcon icon={faKitMedical} />}
                />
                
                <Jumbotron 
                    title = "More"
                    icon = {<FontAwesomeIcon icon={faForward} />}
                />
            </Section>
        </Container>
    )
}

export default CategoriesLg

const Container = styled.div `
    margin: 10rem 1rem 1rem 1rem;

    h1{
        font-size: 40px;
        font-weight: bold;
        color: goldenrod;
        text-align: center;
    }

    @media(max-width: 960px){
        margin: 3rem 0.5rem 0.5rem 0.5rem;

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