import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

const HomeCarousel = () => {
    return (
        <Container>
            <Carousel showArrows={true} className="carousel">
                <div>
                    <img src="https://wallpaper.dog/large/20382870.jpg" />
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/3692584.jpg" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                </div>
                <div>
                    <img src="https://s3-media0.fl.yelpcdn.com/educatorphoto/fP07TGmh-eQwrs3j-aa1Qg/o.jpg" />
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