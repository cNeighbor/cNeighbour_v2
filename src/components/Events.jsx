import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Card from './Card'

import image from "../images/event.png"
import HorizontalScroll from './HorizontalScroll';

function Events() {
  return (
    <Container>
        <div className='top_div'> <h2>Upcoming events</h2> <button className='view'>View all</button> </div>
        <HorizontalScroll/>

        
    </Container>
  )
}

export default Events

const Container = styled.div`
    margin: 20px;
    margin-top: 40px;
    text-align: left;
    .top_div{
        display: flex;
    }

    h2{
        font-size: 25px;
        flex-basis: 80%;
    }

    .view{
        margin-top: 30px;
        background: #FFC70A;
        height: 43px;
        border-radius: 20px;
        color: white;
    }
`
