import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components"
import CarouselItem from './CarouselItem';

const Events = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Container>
            <h1>Featured Events</h1>
            <Carousel responsive={responsive}>
              <CarouselItem
                image="https://i.pinimg.com/originals/f6/0b/ec/f60becb627cf5fff64a3a5ac87c596b3.jpg"
                name="Volleyball Championship"
              />

              <CarouselItem
                image="https://pamsmontessori.com/wp-content/uploads/2021/07/Jolly-Phonics-and-Craft.jpeg"
                name="Phonics Craft"
              />
              <CarouselItem
                image="https://sunnewsonline.com/wp-content/uploads/2019/04/Sports.jpg"
                name="2023 NUGA Games"
              />
              
              <CarouselItem
                image="https://blog.qceventplanning.com/wp-content/uploads/2018/12/Event-in-post-135x135-4.jpg"
                name="Becoming a Chef"
              />
              <CarouselItem
                image="https://cdn.player.one/sites/player.one/files/2022/06/01/summer-game-fest-2022l.png"
                name="PES Championship"
              />
            </Carousel>
        </Container>
    )
}

export default Events

const Container = styled.div `
    margin: 2rem 7rem 2rem 15rem;

    h1{
        margin-top: 5rem;
        font-size: 30px;
        font-weight: bold;
        color: goldenrod;
        text-align: center;
    }

    @media (max-width: 960px){
        margin: 1rem 1.5rem 1rem 1.5rem;

        h1{
            font-size: 30px;
        }
    }
`