import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel"
import Header1 from "../images/header1.jpg"
import Header2 from "../images/header2.jpg"
import Header3 from "../images/header3.jpg"
import Header4 from "../images/header4.jpg"
import styled from "styled-components"

const HomeCarousel = () => {
    return (
        <Container>
            <Carousel showArrows={true} className="carousel">
                <div>
                    <img src={Header1} />
                </div>
                <div>
                    <img src={Header2} />
                </div>
                <div>
                    <img src={Header3} />
                </div>
                <div>
                    <img src={Header4} />
                </div>
            </Carousel>
        </Container>
    )
}

export default HomeCarousel

const Container = styled.div `

    @media(min-width: 960px){
        .carousel{
            height: 500px;
            border-radius: 10px;
        }
        img {
            max-height: 500px;
        }
    }

    @media(max-width: 960px){
        .carousel{
            border-radius: 10px;
        }
        img{
            max-height: 250px !important;
        }
    }
    

`