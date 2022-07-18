import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import HomeCarousel from "./Carousel"
import Jumbotron from './Jumbotron'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCutlery, faFootball, faLaptopCode, faMap, faShoppingBag, faTv } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <Container>
                <Carousel>
                    <HomeCarousel />
                </Carousel>

                <Sections>
                    <div>
                        <Link to="find">
                            <Jumbotron 
                                title = "Find a Place"
                                icon = {<FontAwesomeIcon icon={faMap} />}
                            />
                        </Link>

                        <Jumbotron 
                            title = "Place an AD"
                            icon = {<FontAwesomeIcon icon={faTv} />}
                        />
                    </div>
                </Sections>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div `
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 20px;

    @media(max-width: 960px){
        display: block;
    }
`

const Carousel = styled.div `
    margin: 20px 10px 10px 10px;

    @media(max-width: 960px){
        margin: 5px 0px 0px 0px;
    }
`

const Sections = styled.div `
    display: grid;
    grid-template-columns: 1fr;

    @media(max-width: 960px){
        display: none;
    }
`